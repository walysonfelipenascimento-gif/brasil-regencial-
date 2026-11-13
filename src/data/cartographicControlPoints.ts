/**
 * Pontos de controle para georreferenciamento de cartas históricas.
 *
 * A coleção permanece vazia até que cada ponto seja identificado na imagem
 * original em alta resolução e associado a uma coordenada moderna verificável.
 * Coordenadas não devem ser estimadas a partir de prévias ou desenhadas à mão.
 */
export type CartographicControlPoint = {
  id: string;
  sourceId: string;
  sheetId: string;
  featureDescription: string;
  imagePixel: { x: number; y: number };
  longitude: number;
  latitude: number;
  coordinateReference: 'EPSG:4326';
  coordinateSource: string;
  identificationMethod: 'coastline_intersection' | 'river_confluence' | 'church_or_town' | 'survey_marker' | 'other';
  confidence: 'high' | 'medium' | 'low';
  uncertaintyMeters?: number;
  reviewedBy: string[];
  notes: string;
};

export const cartographicControlPoints: CartographicControlPoint[] = [];

export type ControlPointValidation = {
  valid: boolean;
  errors: string[];
};

/** Valida um ponto isolado; não calcula transformação nem precisão do mosaico. */
export function validateControlPoint(value: unknown): ControlPointValidation {
  const errors: string[] = [];
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return { valid: false, errors: ['registro precisa ser um objeto'] };
  }
  const point = value as Record<string, unknown>;
  const required = ['id', 'sourceId', 'sheetId', 'featureDescription', 'coordinateSource', 'notes'];
  for (const key of required) {
    if (typeof point[key] !== 'string' || !(point[key] as string).trim()) {
      errors.push(key + ': campo textual obrigatório');
    }
  }
  const pixel = point.imagePixel;
  if (!pixel || typeof pixel !== 'object' || Array.isArray(pixel)) {
    errors.push('imagePixel: coordenada de pixel ausente');
  } else {
    const p = pixel as Record<string, unknown>;
    if (!Number.isFinite(p.x) || !Number.isFinite(p.y) || (p.x as number) < 0 || (p.y as number) < 0) {
      errors.push('imagePixel: x e y devem ser números finitos não negativos');
    }
  }
  if (point.coordinateReference !== 'EPSG:4326') errors.push('coordinateReference: usar EPSG:4326');
  if (!Number.isFinite(point.longitude) || (point.longitude as number) < -180 || (point.longitude as number) > 180) {
    errors.push('longitude: valor fora dos limites');
  }
  if (!Number.isFinite(point.latitude) || (point.latitude as number) < -90 || (point.latitude as number) > 90) {
    errors.push('latitude: valor fora dos limites');
  }
  const methods = ['coastline_intersection', 'river_confluence', 'church_or_town', 'survey_marker', 'other'];
  if (!methods.includes(String(point.identificationMethod))) errors.push('identificationMethod: método não reconhecido');
  if (!['high', 'medium', 'low'].includes(String(point.confidence))) errors.push('confidence: nível inválido');
  if (point.uncertaintyMeters !== undefined &&
      (!Number.isFinite(point.uncertaintyMeters) || (point.uncertaintyMeters as number) < 0)) {
    errors.push('uncertaintyMeters: deve ser número finito não negativo');
  }
  if (!Array.isArray(point.reviewedBy) || point.reviewedBy.some(name => typeof name !== 'string' || !name.trim())) {
    errors.push('reviewedBy: deve ser uma lista de revisores');
  }
  if (point.confidence === 'low' && !(point.notes as string)?.trim()) {
    errors.push('pontos de baixa confiança exigem nota de incerteza');
  }
  return { valid: errors.length === 0, errors };
}
