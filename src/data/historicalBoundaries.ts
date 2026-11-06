import type { Feature, FeatureCollection, MultiPolygon, Polygon } from 'geojson';

/**
 * Limite administrativo histórico publicável.
 * Cada feição precisa apontar para uma carta/documento catalogado.
 * Não aceitar geometria sem fonte, recorte temporal e avaliação de precisão.
 */
export type HistoricalBoundaryProperties = {
  provinceId: string;
  historicalName: string;
  validFrom: string; // ISO 8601 (inclusive)
  validTo: string;   // ISO 8601 (exclusive)
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

export type HistoricalBoundaryFeature = Feature<
  Polygon | MultiPolygon,
  HistoricalBoundaryProperties
>;

export type HistoricalBoundaryCollection =
  FeatureCollection<Polygon | MultiPolygon, HistoricalBoundaryProperties>;

/** Coleção vazia intencional: nenhum polígono foi validado até o momento. */
export const regencyBoundaries: HistoricalBoundaryCollection = {
  type: 'FeatureCollection',
  features: []
};

export function validateHistoricalBoundary(
  feature: HistoricalBoundaryFeature
): string[] {
  const p = feature.properties;
  const errors: string[] = [];
  if (!p.provinceId.trim()) errors.push('provinceId ausente');
  if (!p.historicalName.trim()) errors.push('nome histórico ausente');
  if (!p.sourceId.trim() || !p.sourceUrl.trim()) errors.push('fonte documental ausente');
  if (!p.sourceDate.trim()) errors.push('data da fonte ausente');
  if (!p.validFrom.trim() || !p.validTo.trim() || p.validFrom >= p.validTo) {
    errors.push('intervalo temporal inválido');
  }
  if (!p.georeferencingMethod.trim()) errors.push('método de georreferenciamento ausente');
  if (!Number.isInteger(p.controlPointCount) || p.controlPointCount < 3) {
    errors.push('são necessários ao menos três pontos de controle');
  }
  if (p.confidence === 'low' && !p.uncertaintyNote?.trim()) {
    errors.push('incerteza de baixa confiança precisa ser explicada');
  }
  if (p.reviewedBy.length === 0) errors.push('revisão especializada pendente');
  return errors;
}
