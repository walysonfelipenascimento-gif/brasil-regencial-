export type HistoricalProvince = {
  id: string;
  name: string;
  displayName: string;
  macroregion: string;
  status: 'catalogued_geometry_pending';
  notes: string;
};

// Inventário administrativo de referência para a pesquisa cartográfica.
// Não representa polígonos, limites ou áreas geográficas validadas.
export const regencyProvinces: HistoricalProvince[] = [
  { id: 'para', name: 'Pará', displayName: 'Grão-Pará / Pará', macroregion: 'Norte', status: 'catalogued_geometry_pending', notes: 'Verificar denominação oficial e extensão territorial em cada carta consultada.' },
  { id: 'maranhao', name: 'Maranhão', displayName: 'Maranhão', macroregion: 'Norte', status: 'catalogued_geometry_pending', notes: 'Comparar cartas do período e a representação de seus limites com Piauí e Pará.' },
  { id: 'piaui', name: 'Piauí', displayName: 'Piauí', macroregion: 'Norte', status: 'catalogued_geometry_pending', notes: 'Verificar a configuração provincial e as áreas de fronteira nas cartas datadas.' },
  { id: 'ceara', name: 'Ceará', displayName: 'Ceará', macroregion: 'Norte', status: 'catalogued_geometry_pending', notes: 'Conferir limites históricos com Piauí, Rio Grande do Norte e Paraíba.' },
  { id: 'rio-grande-do-norte', name: 'Rio Grande do Norte', displayName: 'Rio Grande do Norte', macroregion: 'Nordeste', status: 'catalogued_geometry_pending', notes: 'Verificar grafias históricas e limites costeiros/interiores.' },
  { id: 'paraiba', name: 'Paraíba', displayName: 'Paraíba', macroregion: 'Nordeste', status: 'catalogued_geometry_pending', notes: 'Conferir limites com Pernambuco e Ceará nas cartas de época.' },
  { id: 'pernambuco', name: 'Pernambuco', displayName: 'Pernambuco', macroregion: 'Nordeste', status: 'catalogued_geometry_pending', notes: 'A Comarca do São Francisco foi desmembrada de Pernambuco e incorporada à Bahia em 1827; representar essa alteração com fonte e data.' },
  { id: 'alagoas', name: 'Alagoas', displayName: 'Alagoas', macroregion: 'Nordeste', status: 'catalogued_geometry_pending', notes: 'Província criada em 1817; validar a geometria e seus limites em cartas do período.' },
  { id: 'sergipe', name: 'Sergipe', displayName: 'Sergipe', macroregion: 'Nordeste', status: 'catalogued_geometry_pending', notes: 'Província autônoma desde 1820; verificar limites com Bahia e Alagoas.' },
  { id: 'bahia', name: 'Bahia', displayName: 'Bahia', macroregion: 'Nordeste', status: 'catalogued_geometry_pending', notes: 'Incluir a transferência da Comarca do São Francisco em 1827 apenas conforme evidência cartográfica.' },
  { id: 'espirito-santo', name: 'Espírito Santo', displayName: 'Espírito Santo', macroregion: 'Leste', status: 'catalogued_geometry_pending', notes: 'Conferir limites históricos com Bahia, Minas Gerais e Rio de Janeiro.' },
  { id: 'rio-de-janeiro', name: 'Rio de Janeiro', displayName: 'Rio de Janeiro', macroregion: 'Sudeste', status: 'catalogued_geometry_pending', notes: 'Distinguir a província do Município Neutro da Corte, instituído após a reforma de 1834.' },
  { id: 'sao-paulo', name: 'São Paulo', displayName: 'São Paulo', macroregion: 'Sudeste', status: 'catalogued_geometry_pending', notes: 'Conferir limites com Minas Gerais, Goiás, Paraná (então parte de São Paulo) e Santa Catarina.' },
  { id: 'santa-catarina', name: 'Santa Catarina', displayName: 'Santa Catarina', macroregion: 'Sul', status: 'catalogued_geometry_pending', notes: 'Verificar denominação provincial e limites com São Paulo e São Pedro do Rio Grande do Sul.' },
  { id: 'sao-pedro-do-rio-grande-do-sul', name: 'São Pedro do Rio Grande do Sul', displayName: 'São Pedro do Rio Grande do Sul', macroregion: 'Sul', status: 'catalogued_geometry_pending', notes: 'Usar denominação histórica conforme a fonte; não substituir automaticamente por nome atual.' },
  { id: 'minas-gerais', name: 'Minas Gerais', displayName: 'Minas Gerais', macroregion: 'Sudeste', status: 'catalogued_geometry_pending', notes: 'Conferir limites com Goiás, Bahia, Espírito Santo, Rio de Janeiro e São Paulo.' },
  { id: 'goias', name: 'Goiás', displayName: 'Goiás', macroregion: 'Centro-Oeste', status: 'catalogued_geometry_pending', notes: 'Não confundir com o atual estado do Tocantins; validar extensão e limites históricos.' },
  { id: 'mato-grosso', name: 'Mato Grosso', displayName: 'Mato Grosso', macroregion: 'Centro-Oeste', status: 'catalogued_geometry_pending', notes: 'Conferir a grande extensão provincial e limites com Goiás, Minas Gerais e áreas fronteiriças.' }
];
