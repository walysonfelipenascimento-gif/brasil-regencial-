export type HistoricalEvent = { year: number; title: string; place: string; category: string; summary: string };
export const historicalEvents: HistoricalEvent[] = [
  { year: 1831, title: 'Abdicação de Dom Pedro I', place: 'Rio de Janeiro', category: 'Política', summary: 'A abdicação abriu o período de governo regencial durante a menoridade de Dom Pedro II.' },
  { year: 1834, title: 'Ato Adicional', place: 'Império do Brasil', category: 'Política', summary: 'Reforma constitucional que alterou a organização político-administrativa do Império.' },
  { year: 1835, title: 'Cabanagem', place: 'Grão-Pará', category: 'Revoltas', summary: 'Movimento de grande participação popular iniciado em 1835.' },
  { year: 1835, title: 'Revolta dos Malês', place: 'Salvador, Bahia', category: 'Revoltas', summary: 'Levante protagonizado por africanos muçulmanos, escravizados e libertos.' },
  { year: 1837, title: 'Sabinada', place: 'Salvador, Bahia', category: 'Revoltas', summary: 'Movimento político ocorrido na Bahia entre 1837 e 1838.' },
  { year: 1838, title: 'Balaiada', place: 'Maranhão', category: 'Revoltas', summary: 'Revolta iniciada em 1838, com participação de diferentes grupos populares.' }
];
