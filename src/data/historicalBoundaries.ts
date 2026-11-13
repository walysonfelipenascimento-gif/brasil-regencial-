export type HistoricalPosition = number[];
export type HistoricalPolygonGeometry = { type: 'Polygon'; coordinates: HistoricalPosition[][] };
export type HistoricalMultiPolygonGeometry = { type: 'MultiPolygon'; coordinates: HistoricalPosition[][][] };
export type HistoricalGeometry = HistoricalPolygonGeometry | HistoricalMultiPolygonGeometry;
export type HistoricalBoundaryFeature = {
  type: 'Feature';
  geometry: HistoricalGeometry;
  properties: HistoricalBoundaryProperties;
};
export type HistoricalBoundaryProperties = {
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
  publicationStatus: 'draft' | 'under_review' | 'approved';
};
export type HistoricalBoundaryCollection = {
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

type Position2D = [number, number];

function cross(a: Position2D, b: Position2D, c: Position2D): number {
  return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
}

function onSegment(a: Position2D, b: Position2D, point: Position2D): boolean {
  const epsilon = 1e-10;
  return Math.abs(cross(a, b, point)) <= epsilon &&
    point[0] >= Math.min(a[0], b[0]) - epsilon &&
    point[0] <= Math.max(a[0], b[0]) + epsilon &&
    point[1] >= Math.min(a[1], b[1]) - epsilon &&
    point[1] <= Math.max(a[1], b[1]) + epsilon;
}

function segmentsIntersect(a: Position2D, b: Position2D, c: Position2D, d: Position2D): boolean {
  const abC = cross(a, b, c), abD = cross(a, b, d);
  const cdA = cross(c, d, a), cdB = cross(c, d, b);
  if (((abC > 0 && abD < 0) || (abC < 0 && abD > 0)) &&
      ((cdA > 0 && cdB < 0) || (cdA < 0 && cdB > 0))) return true;
  return onSegment(a, b, c) || onSegment(a, b, d) ||
    onSegment(c, d, a) || onSegment(c, d, b);
}

function ringArea(ring: Position2D[]): number {
  let area = 0;
  for (let i = 0; i < ring.length - 1; i++) {
    area += ring[i][0] * ring[i + 1][1] - ring[i + 1][0] * ring[i][1];
  }
  return area / 2;
}

function ringSelfIntersects(ring: Position2D[]): boolean {
  const segmentCount = ring.length - 1;
  for (let i = 0; i < segmentCount; i++) {
    for (let j = i + 1; j < segmentCount; j++) {
      if (j === i + 1 || (i === 0 && j === segmentCount - 1)) continue;
      if (segmentsIntersect(ring[i], ring[i + 1], ring[j], ring[j + 1])) return true;
    }
  }
  return false;
}

function pointInRing(point: Position2D, ring: Position2D[]): boolean {
  let inside = false;
  for (let i = 0, j = ring.length - 2; i < ring.length - 1; j = i++) {
    const a = ring[i], b = ring[j];
    if (onSegment(a, b, point)) return true;
    const crosses = (a[1] > point[1]) !== (b[1] > point[1]) &&
      point[0] < ((b[0] - a[0]) * (point[1] - a[1])) / (b[1] - a[1]) + a[0];
    if (crosses) inside = !inside;
  }
  return inside;
}

function ringsIntersect(a: Position2D[], b: Position2D[]): boolean {
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < b.length - 1; j++) {
      if (segmentsIntersect(a[i], a[i + 1], b[j], b[j + 1])) return true;
    }
  }
  return false;
}

function validateRing(ring: unknown, label: string, errors: string[]): ring is Position2D[] {
  if (!Array.isArray(ring) || ring.length < 4) {
    errors.push(label + ': anel precisa de ao menos quatro posições');
    return false;
  }

  let valid = true;
  for (const [index, position] of ring.entries()) {
    if (!Array.isArray(position) || position.length < 2 ||
        !Number.isFinite(position[0]) || !Number.isFinite(position[1])) {
      errors.push(label + ': coordenada inválida na posição ' + index);
      valid = false;
      continue;
    }
    const [longitude, latitude] = position as number[];
    if (longitude < -180 || longitude > 180 || latitude < -90 || latitude > 90) {
      errors.push(label + ': coordenada fora dos limites WGS84 na posição ' + index);
      valid = false;
    }
  }

  if (!valid) return false;
  const positions = ring as Position2D[];
  const first = positions[0], last = positions[positions.length - 1];
  if (first[0] !== last[0] || first[1] !== last[1]) {
    errors.push(label + ': anel não está fechado');
    valid = false;
  }
  const uniqueVertices = new Set(positions.slice(0, -1).map(point => point[0] + ',' + point[1]));
  if (uniqueVertices.size < 3) {
    errors.push(label + ': são necessários ao menos três vértices distintos');
    valid = false;
  }
  if (Math.abs(ringArea(positions)) < 1e-12) {
    errors.push(label + ': área nula ou degenerada');
    valid = false;
  }
  if (ringSelfIntersects(positions)) {
    errors.push(label + ': auto-interseção detectada; revise o traçado');
    valid = false;
  }
  return valid;
}

function validatePolygonRings(rings: unknown, label: string, errors: string[]) {
  if (!Array.isArray(rings) || rings.length === 0) {
    errors.push(label + ': polígono sem anel');
    return;
  }
  const validRings: Position2D[][] = [];
  rings.forEach((ring, index) => {
    if (validateRing(ring, label + ', anel ' + index, errors)) validRings[index] = ring;
  });
  const shell = validRings[0];
  if (!shell) return;
  validRings.slice(1).forEach((hole, index) => {
    if (!hole) return;
    if (!pointInRing(hole[0], shell) || ringsIntersect(shell, hole)) {
      errors.push(label + ', anel interno ' + (index + 1) + ': deve estar contido no anel externo e não pode cruzá-lo');
    }
  });
  for (let i = 1; i < validRings.length; i++) {
    for (let j = i + 1; j < validRings.length; j++) {
      const a = validRings[i], b = validRings[j];
      if (a && b && (ringsIntersect(a, b) || pointInRing(a[0], b) || pointInRing(b[0], a))) {
        errors.push(label + ': anéis internos se cruzam ou se sobrepõem');
      }
    }
  }
}

function validateGeometry(geometry: unknown, errors: string[]) {
  if (!isRecord(geometry) || !Array.isArray(geometry.coordinates)) {
    errors.push('geometria ausente ou inválida');
    return;
  }

  if (geometry.type === 'Polygon') {
    validatePolygonRings(geometry.coordinates, 'polígono', errors);
    return;
  }

  if (geometry.type === 'MultiPolygon') {
    if (geometry.coordinates.length === 0) errors.push('multipolígono sem polígonos');
    geometry.coordinates.forEach((polygon, index) =>
      validatePolygonRings(polygon, 'polígono ' + index, errors)
    );
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
  if (!['draft', 'under_review', 'approved'].includes(String(p.publicationStatus))) {
    errors.push('status editorial inválido; use draft, under_review ou approved');
  }
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


/**
 * Retorna somente feições editorialmente aprovadas e estruturalmente válidas.
 * Rascunhos e itens em revisão nunca chegam à camada pública do atlas.
 */
export function getPublishableHistoricalBoundaries(
  collection: HistoricalBoundaryCollection
): HistoricalBoundaryCollection {
  return {
    type: 'FeatureCollection',
    features: collection.features.filter(feature =>
      feature.properties.publicationStatus === 'approved' &&
      validateHistoricalBoundary(feature).length === 0
    )
  };
}

/** Diagnóstico para revisão editorial; não altera nem corrige os dados recebidos. */
export function auditHistoricalBoundaryCollection(
  collection: HistoricalBoundaryCollection
): { total: number; publishable: number; withheld: number; issues: { provinceId: string; errors: string[] }[] } {
  const issues = collection.features.flatMap(feature => {
    const errors = validateHistoricalBoundary(feature);
    if (feature.properties.publicationStatus !== 'approved') {
      errors.push('feição não aprovada para publicação');
    }
    return errors.length ? [{ provinceId: feature.properties.provinceId, errors }] : [];
  });
  const publishable = collection.features.length - issues.length;
  return {
    total: collection.features.length,
    publishable,
    withheld: collection.features.length - publishable,
    issues
  };
}
