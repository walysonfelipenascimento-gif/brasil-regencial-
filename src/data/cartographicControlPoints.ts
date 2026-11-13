/**
 * Pontos de controle e cálculo de transformação afim para cartas históricas.
 * A coleção fica vazia até a identificação em imagem original verificável.
 */
export type CartographicControlPoint = {
  id: string; sourceId: string; sheetId: string; featureDescription: string;
  imagePixel: { x: number; y: number };
  longitude: number; latitude: number; coordinateReference: 'EPSG:4326';
  coordinateSource: string;
  identificationMethod: 'coastline_intersection' | 'river_confluence' | 'church_or_town' | 'survey_marker' | 'other';
  confidence: 'high' | 'medium' | 'low'; uncertaintyMeters?: number;
  reviewedBy: string[]; notes: string;
};

export const cartographicControlPoints: CartographicControlPoint[] = [];

export type ControlPointValidation = { valid: boolean; errors: string[] };

/** Valida estrutura e faixas; não prova a identidade geográfica do detalhe. */
export function validateControlPoint(value: unknown): ControlPointValidation {
  const errors: string[] = [];
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return { valid: false, errors: ['registro precisa ser um objeto'] };
  }
  const point = value as Record<string, unknown>;
  for (const key of ['id', 'sourceId', 'sheetId', 'featureDescription', 'coordinateSource', 'notes']) {
    if (typeof point[key] !== 'string' || !(point[key] as string).trim()) errors.push(key + ': campo textual obrigatório');
  }
  const pixel = point.imagePixel;
  if (!pixel || typeof pixel !== 'object' || Array.isArray(pixel)) errors.push('imagePixel: coordenada ausente');
  else {
    const p = pixel as Record<string, unknown>;
    if (!Number.isFinite(p.x) || !Number.isFinite(p.y) || (p.x as number) < 0 || (p.y as number) < 0) {
      errors.push('imagePixel: x e y devem ser números finitos não negativos');
    }
  }
  if (point.coordinateReference !== 'EPSG:4326') errors.push('coordinateReference: usar EPSG:4326');
  if (!Number.isFinite(point.longitude) || (point.longitude as number) < -180 || (point.longitude as number) > 180) errors.push('longitude: valor fora dos limites');
  if (!Number.isFinite(point.latitude) || (point.latitude as number) < -90 || (point.latitude as number) > 90) errors.push('latitude: valor fora dos limites');
  if (!['coastline_intersection', 'river_confluence', 'church_or_town', 'survey_marker', 'other'].includes(String(point.identificationMethod))) errors.push('identificationMethod: método não reconhecido');
  if (!['high', 'medium', 'low'].includes(String(point.confidence))) errors.push('confidence: nível inválido');
  if (point.uncertaintyMeters !== undefined && (!Number.isFinite(point.uncertaintyMeters) || (point.uncertaintyMeters as number) < 0)) errors.push('uncertaintyMeters: deve ser número finito não negativo');
  if (!Array.isArray(point.reviewedBy) || point.reviewedBy.some(name => typeof name !== 'string' || !name.trim())) errors.push('reviewedBy: deve ser uma lista de revisores');
  return { valid: errors.length === 0, errors };
}

export type AffineFitResult =
  | { valid: false; errors: string[] }
  | { valid: true; coefficients: { east: [number, number, number]; north: [number, number, number] }; rmsMeters: number; maxResidualMeters: number; residuals: { id: string; meters: number }[]; referenceLatitude: number; referenceLongitude: number };

const EARTH_RADIUS_METERS = 6371008.8;

/** Resolve sistema linear 3×3 por eliminação de Gauss com pivoteamento. */
function solve3(matrix: number[][], vector: number[]): number[] | null {
  const a = matrix.map((row, i) => [...row, vector[i]]);
  for (let col = 0; col < 3; col++) {
    let pivot = col;
    for (let row = col + 1; row < 3; row++) if (Math.abs(a[row][col]) > Math.abs(a[pivot][col])) pivot = row;
    if (Math.abs(a[pivot][col]) < 1e-10) return null;
    [a[col], a[pivot]] = [a[pivot], a[col]];
    const divisor = a[col][col];
    for (let j = col; j < 4; j++) a[col][j] /= divisor;
    for (let row = 0; row < 3; row++) {
      if (row === col) continue;
      const factor = a[row][col];
      for (let j = col; j < 4; j++) a[row][j] -= factor * a[col][j];
    }
  }
  return [a[0][3], a[1][3], a[2][3]];
}

/**
 * Ajusta pixel -> plano local em metros (equiretangular local) por mínimos
 * quadrados. Exige >=4 pontos revisados para haver redundância de verificação.
 * RMS é erro interno nos pontos usados; não equivale a precisão externa.
 */
export function calculateAffineFit(points: CartographicControlPoint[]): AffineFitResult {
  const errors: string[] = [];
  if (points.length < 4) errors.push('São necessários ao menos 4 pontos para ajuste e verificação redundante.');
  const ids = new Set<string>();
  points.forEach((point, index) => {
    const validation = validateControlPoint(point);
    if (!validation.valid) errors.push(`Ponto ${index + 1}: ${validation.errors.join('; ')}`);
    if (ids.has(point.id)) errors.push(`Identificador duplicado: ${point.id}`);
    ids.add(point.id);
    if (!point.reviewedBy?.length) errors.push(`Ponto ${point.id}: requer ao menos um revisor registrado.`);
    if (point.confidence === 'low') errors.push(`Ponto ${point.id}: confiança baixa impede o ajuste.`);
  });
  if (errors.length) return { valid: false, errors };

  const referenceLongitude = points.reduce((sum, p) => sum + p.longitude, 0) / points.length;
  const referenceLatitude = points.reduce((sum, p) => sum + p.latitude, 0) / points.length;
  const latRad = referenceLatitude * Math.PI / 180;
  const lonScale = EARTH_RADIUS_METERS * Math.cos(latRad) * Math.PI / 180;
  const latScale = EARTH_RADIUS_METERS * Math.PI / 180;
  const rows = points.map(p => [p.imagePixel.x, p.imagePixel.y, 1]);
  const targets = points.map(p => ({
    east: (p.longitude - referenceLongitude) * lonScale,
    north: (p.latitude - referenceLatitude) * latScale
  }));
  const normal = [[0,0,0],[0,0,0],[0,0,0]];
  rows.forEach(row => row.forEach((value, i) => row.forEach((other, j) => { normal[i][j] += value * other; })));
  const eastVector = [0,0,0], northVector = [0,0,0];
  rows.forEach((row, i) => row.forEach((value, j) => {
    eastVector[j] += value * targets[i].east;
    northVector[j] += value * targets[i].north;
  }));
  const east = solve3(normal, eastVector), north = solve3(normal, northVector);
  if (!east || !north) return { valid: false, errors: ['Pontos colineares ou mal distribuídos: transformação afim indeterminada.'] };

  const residuals = rows.map((row, i) => {
    const predictedEast = row.reduce((sum, value, j) => sum + value * east[j], 0);
    const predictedNorth = row.reduce((sum, value, j) => sum + value * north[j], 0);
    return { id: points[i].id, meters: Math.hypot(predictedEast - targets[i].east, predictedNorth - targets[i].north) };
  });
  const rmsMeters = Math.sqrt(residuals.reduce((sum, r) => sum + r.meters ** 2, 0) / residuals.length);
  return {
    valid: true,
    coefficients: { east: east as [number,number,number], north: north as [number,number,number] },
    rmsMeters, maxResidualMeters: Math.max(...residuals.map(r => r.meters)),
    residuals, referenceLatitude, referenceLongitude
  };
}


export type CrossValidationResult =
  | { valid: false; errors: string[] }
  | { valid: true; method: 'leave_one_out'; meanErrorMeters: number; maxErrorMeters: number; errorsByPoint: { id: string; errorMeters: number }[] };

/**
 * Validação cruzada leave-one-out: cada ponto é retirado, o ajuste é refeito
 * com os demais e a posição prevista é comparada à coordenada de referência.
 * Requer >=5 pontos para manter pelo menos quatro no ajuste de cada rodada.
 */
export function validateAffineIndependently(points: CartographicControlPoint[]): CrossValidationResult {
  if (points.length < 5) {
    return { valid: false, errors: ['São necessários ao menos 5 pontos revisados para validação leave-one-out.'] };
  }
  const errorsByPoint: { id: string; errorMeters: number }[] = [];
  for (let heldIndex = 0; heldIndex < points.length; heldIndex++) {
    const held = points[heldIndex];
    const training = points.filter((_, index) => index !== heldIndex);
    const fit = calculateAffineFit(training);
    if (!fit.valid) {
      return { valid: false, errors: [`Não foi possível validar o ponto ${held.id}: ${fit.errors.join('; ')}`] };
    }
    const x = held.imagePixel.x, y = held.imagePixel.y;
    const east = fit.coefficients.east[0] * x + fit.coefficients.east[1] * y + fit.coefficients.east[2];
    const north = fit.coefficients.north[0] * x + fit.coefficients.north[1] * y + fit.coefficients.north[2];
    const latRad = fit.referenceLatitude * Math.PI / 180;
    const lonScale = EARTH_RADIUS_METERS * Math.cos(latRad) * Math.PI / 180;
    const latScale = EARTH_RADIUS_METERS * Math.PI / 180;
    const predictedLongitude = fit.referenceLongitude + east / lonScale;
    const predictedLatitude = fit.referenceLatitude + north / latScale;
    const deltaEast = (predictedLongitude - held.longitude) * lonScale;
    const deltaNorth = (predictedLatitude - held.latitude) * latScale;
    errorsByPoint.push({ id: held.id, errorMeters: Math.hypot(deltaEast, deltaNorth) });
  }
  return {
    valid: true, method: 'leave_one_out',
    meanErrorMeters: errorsByPoint.reduce((sum, item) => sum + item.errorMeters, 0) / errorsByPoint.length,
    maxErrorMeters: Math.max(...errorsByPoint.map(item => item.errorMeters)),
    errorsByPoint
  };
}


export type PixelRing = Array<[number, number]>;
export type GeoreferencedPolygonResult =
  | { valid: false; errors: string[] }
  | { valid: true; feature: {
      type: 'Feature';
      geometry: { type: 'Polygon'; coordinates: number[][][] };
      properties: {
        sourceId: string; sheetId: string; method: 'affine_least_squares';
        controlPointCount: number; fitRmsMeters: number;
        crossValidationMeanMeters: number; crossValidationMaxMeters: number;
        confidence: 'medium' | 'high'; uncertaintyNote: string;
      };
    } };

/**
 * Converte um anel traçado em pixels para Polygon GeoJSON WGS84.
 * Não traça limites automaticamente: recebe apenas vértices previamente
 * digitalizados sobre a carta. O limite de erro deve ser definido e justificado
 * pelo responsável cartográfico para a escala e finalidade da camada.
 */
export function createGeoreferencedPolygon(
  pixelRings: PixelRing[],
  points: CartographicControlPoint[],
  maxAllowedCrossValidationErrorMeters: number,
  uncertaintyNote: string
): GeoreferencedPolygonResult {
  const errors: string[] = [];
  if (!Array.isArray(pixelRings) || pixelRings.length === 0) errors.push('É necessário ao menos um anel digitalizado.');
  if (!Number.isFinite(maxAllowedCrossValidationErrorMeters) || maxAllowedCrossValidationErrorMeters <= 0) {
    errors.push('Defina um limite de erro positivo, justificado para a escala e finalidade.');
  }
  if (typeof uncertaintyNote !== 'string' || !uncertaintyNote.trim()) errors.push('Registre a incerteza e as limitações da geometria.');
  if (errors.length) return { valid: false, errors };

  const sourceIds = new Set(points.map(point => point.sourceId));
  const sheetIds = new Set(points.map(point => point.sheetId));
  if (sourceIds.size !== 1 || sheetIds.size !== 1) return { valid: false, errors: ['Todos os pontos e vértices devem pertencer à mesma fonte e folha cartográfica.'] };
  const fit = calculateAffineFit(points);
  if (!fit.valid) return { valid: false, errors: fit.errors };
  const independent = validateAffineIndependently(points);
  if (!independent.valid) return { valid: false, errors: independent.errors };
  if (independent.maxErrorMeters > maxAllowedCrossValidationErrorMeters) {
    return { valid: false, errors: [`Erro independente máximo (${independent.maxErrorMeters.toFixed(1)} m) excede o limite definido (${maxAllowedCrossValidationErrorMeters.toFixed(1)} m).`] };
  }

  const coordinates: number[][][] = [];
  pixelRings.forEach((ring, ringIndex) => {
    if (!Array.isArray(ring) || ring.length < 4) {
      errors.push(`Anel ${ringIndex + 1}: precisa de pelo menos quatro vértices.`);
      return;
    }
    if (ring.some(([x, y]) => !Number.isFinite(x) || !Number.isFinite(y) || x < 0 || y < 0)) {
      errors.push(`Anel ${ringIndex + 1}: pixels inválidos.`);
      return;
    }
    const first = ring[0], last = ring[ring.length - 1];
    if (first[0] !== last[0] || first[1] !== last[1]) {
      errors.push(`Anel ${ringIndex + 1}: feche o anel repetindo o primeiro vértice.`);
      return;
    }
    const latRad = fit.referenceLatitude * Math.PI / 180;
    const lonScale = EARTH_RADIUS_METERS * Math.cos(latRad) * Math.PI / 180;
    const latScale = EARTH_RADIUS_METERS * Math.PI / 180;
    const transformed = ring.map(([x, y]) => {
      const east = fit.coefficients.east[0] * x + fit.coefficients.east[1] * y + fit.coefficients.east[2];
      const north = fit.coefficients.north[0] * x + fit.coefficients.north[1] * y + fit.coefficients.north[2];
      return [fit.referenceLongitude + east / lonScale, fit.referenceLatitude + north / latScale];
    });
    if (transformed.some(([lon, lat]) => !Number.isFinite(lon) || !Number.isFinite(lat) || lon < -180 || lon > 180 || lat < -90 || lat > 90)) {
      errors.push(`Anel ${ringIndex + 1}: transformação produziu coordenadas fora de WGS84.`);
      return;
    }
    coordinates.push(transformed);
  });
  if (errors.length) return { valid: false, errors };
  const confidence = independent.maxErrorMeters <= maxAllowedCrossValidationErrorMeters * 0.5 ? 'high' : 'medium';
  return {
    valid: true,
    feature: {
      type: 'Feature',
      geometry: { type: 'Polygon', coordinates },
      properties: {
        sourceId: points[0].sourceId, sheetId: points[0].sheetId,
        method: 'affine_least_squares', controlPointCount: points.length,
        fitRmsMeters: fit.rmsMeters,
        crossValidationMeanMeters: independent.meanErrorMeters,
        crossValidationMaxMeters: independent.maxErrorMeters,
        confidence,
        uncertaintyNote
      }
    }
  };
}
