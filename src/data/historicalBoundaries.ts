type Position = number[];
type PolygonGeometry = { type: 'Polygon'; coordinates: Position[][] };
type MultiPolygonGeometry = { type: 'MultiPolygon'; coordinates: Position[][][] };
type HistoricalGeometry = PolygonGeometry | MultiPolygonGeometry;
type HistoricalBoundaryFeature = {
  type: 'Feature';
  geometry: HistoricalGeometry;
  properties: HistoricalBoundaryProperties;
};
type HistoricalBoundaryProperties = {
  provinceId: string;
  historicalName: string;
  validFrom: string;
  validTo: string;
  sourceId: string;
  sourceUrl: string;
  sourceDate: string;
  scale?: string;
  confidence: 'high' | 'medium' | 'low';
  uncertaintyNote?: string;
  georeferencingMethod: string;
  controlPointCount: number;
  rmsError?: number;
  reviewedBy: string[];
};
type HistoricalBoundaryCollection = {
  type: 'FeatureCollection';
  features: HistoricalBoundaryFeature[];
};

/**
 * Limite administrativo histórico publicável.
 * Cada feição precisa apontar para uma carta/documento catalogado.
 * Não aceitar geometria sem fonte, recorte temporal e avaliação de precisão.
 */

/** Coleção vazia intencional: nenhum polígono foi validado até o momento. */
export const regencyBoundaries: HistoricalBoundaryCollection = {
  type: 'FeatureCollection',
  features: []
};

type UnknownRecord = Record<string, unknown>;

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function isIsoDate(value: unknown): value is string {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(value + 'T00:00:00Z');
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

function validateRing(ring: unknown, label: string, errors: string[]) {
  if (!Array.isArray(ring) || ring.length < 4) {
    errors.push(label + ': anel precisa de ao menos quatro posições');
    return;
  }

  for (const [index, position] of ring.entries()) {
    if (!Array.isArray(position) || position.length < 2 ||
        !Number.isFinite(position[0]) || !Number.isFinite(position[1])) {
      errors.push(label + ': coordenada inválida na posição ' + index);
      continue;
    }
    const [longitude, latitude] = position as number[];
    if (longitude < -180 || longitude > 180 || latitude < -90 || latitude > 90) {
      errors.push(label + ': coordenada fora dos limites WGS84 na posição ' + index);
    }
  }

  const first = ring[0];
  const last = ring[ring.length - 1];
  if (Array.isArray(first) && Array.isArray(last) &&
      (first[0] !== last[0] || first[1] !== last[1])) {
    errors.push(label + ': anel não está fechado');
  }
}

function validateGeometry(geometry: unknown, errors: string[]) {
  if (!isRecord(geometry) || !Array.isArray(geometry.coordinates)) {
    errors.push('geometria ausente ou inválida');
    return;
  }

  if (geometry.type === 'Polygon') {
    if (geometry.coordinates.length === 0) errors.push('polígono sem anel');
    geometry.coordinates.forEach((ring, index) => validateRing(ring, 'anel ' + index, errors));
    return;
  }

  if (geometry.type === 'MultiPolygon') {
    if (geometry.coordinates.length === 0) errors.push('multipolígono sem polígonos');
    geometry.coordinates.forEach((polygon, polygonIndex) => {
      if (!Array.isArray(polygon) || polygon.length === 0) {
        errors.push('polígono ' + polygonIndex + ' sem anel');
        return;
      }
      polygon.forEach((ring, ringIndex) =>
        validateRing(ring, 'polígono ' + polygonIndex + ', anel ' + ringIndex, errors)
      );
    });
    return;
  }

  errors.push('tipo de geometria não suportado; use Polygon ou MultiPolygon');
}

/**
 * Validação defensiva de uma feição recebida em tempo de execução.
 * Aceita unknown para que JSON externo malformado gere erros legíveis,
 * em vez de lançar exceções ao acessar propriedades inexistentes.
 */
export function validateHistoricalBoundary(feature: unknown): string[] {
  const errors: string[] = [];
  if (!isRecord(feature)) return ['feição GeoJSON ausente ou inválida'];
  if (feature.type !== 'Feature') errors.push('tipo GeoJSON inválido');

  validateGeometry(feature.geometry, errors);

  if (!isRecord(feature.properties)) {
    errors.push('propriedades da feição ausentes ou inválidas');
    return errors;
  }

  const p = feature.properties;
  if (!isNonEmptyString(p.provinceId)) errors.push('provinceId ausente');
  if (!isNonEmptyString(p.historicalName)) errors.push('nome histórico ausente');
  if (!isNonEmptyString(p.sourceId)) errors.push('identificador da fonte ausente');

  if (!isNonEmptyString(p.sourceUrl)) {
    errors.push('URL da fonte ausente');
  } else {
    try {
      const url = new URL(p.sourceUrl);
      if (url.protocol !== 'https:' && url.protocol !== 'http:') {
        errors.push('URL da fonte precisa usar HTTP ou HTTPS');
      }
    } catch {
      errors.push('URL da fonte inválida');
    }
  }

  if (!isIsoDate(p.sourceDate)) errors.push('data da fonte precisa estar em formato AAAA-MM-DD');
  if (!isIsoDate(p.validFrom) || !isIsoDate(p.validTo) || p.validFrom >= p.validTo) {
    errors.push('intervalo temporal inválido; use datas ISO válidas e fim posterior ao início');
  }

  if (!isNonEmptyString(p.georeferencingMethod)) errors.push('método de georreferenciamento ausente');
  if (!Number.isInteger(p.controlPointCount) || (p.controlPointCount as number) < 3) {
    errors.push('são necessários ao menos três pontos de controle');
  }
  if (p.rmsError !== undefined &&
      (typeof p.rmsError !== 'number' || !Number.isFinite(p.rmsError) || p.rmsError < 0)) {
    errors.push('erro RMS deve ser um número finito não negativo');
  }
  if (!['high', 'medium', 'low'].includes(String(p.confidence))) {
    errors.push('nível de confiança inválido');
  }
  if (p.confidence === 'low' && !isNonEmptyString(p.uncertaintyNote)) {
    errors.push('incerteza de baixa confiança precisa ser explicada');
  }
  if (!Array.isArray(p.reviewedBy) || p.reviewedBy.length === 0 ||
      p.reviewedBy.some(name => !isNonEmptyString(name))) {
    errors.push('revisão especializada pendente ou inválida');
  }

  return errors;
}
