export type CartographicSource = {
  id: string;
  title: string;
  authors: string;
  year: number;
  institution: string;
  url: string;
  coverage: string;
  scale?: string;
  format: string;
  rights: string;
  use: string;
  limitations: string;
  status: 'catalogued' | 'image_review_pending' | 'georeferencing_pending';
};

// Fontes localizadas em acervos e catálogos. Registro bibliográfico não equivale
// a limite provincial já vetorizado ou georreferenciado.
export const cartographicSources: CartographicSource[] = [
  {
    id: 'schlieben-para-1830',
    title: 'L. Das Kaiserthum Brasilien. Provinz 1. Para und zwar Comarca',
    authors: 'Wilhelm Ernst August von Schlieben; litografia de W. Werner',
    year: 1830,
    institution: 'David Rumsey Historical Map Collection / Old Maps Online',
    url: 'https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~269903~90045190:L--Das-kaiserthum-Brasilien--Provin',
    coverage: 'Província do Pará e comarca indicada no título',
    scale: 'Série catalogada em 1:2.000.000',
    format: 'Carta provincial impressa; folha individual de atlas',
    rights: 'Conferir condições de reutilização no registro da coleção antes de republicar a imagem.',
    use: 'Fonte cartográfica contemporânea ao início da Regência; candidata à leitura e georreferência do Pará.',
    limitations: 'A ficha da folha precisa ser conferida diretamente e a extensão representada não deve ser presumida apenas pelo título.',
    status: 'image_review_pending'
  },
  {
    id: 'schlieben-mattogrosso-1830',
    title: 'L. Das Kaiserthum Brasilien. Provinz 16. Mattogrosso',
    authors: 'Wilhelm Ernst August von Schlieben; litografia de W. Werner',
    year: 1830,
    institution: 'David Rumsey Historical Map Collection / Old Maps Online',
    url: 'https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~269907~90045186:L--Das-kaiserthum-Brasilien--Provin',
    coverage: 'Província de Mato Grosso',
    scale: '1:2.000.000',
    format: 'Carta provincial impressa; folha individual de atlas',
    rights: 'Conferir condições de reutilização no registro da coleção antes de republicar a imagem.',
    use: 'Fonte cartográfica contemporânea ao início da Regência; candidata à leitura e georreferência de Mato Grosso.',
    limitations: 'A folha ainda precisa de inspeção visual e comparação com fontes independentes.',
    status: 'image_review_pending'
  },
  {
    id: 'martius-eschwege-east-brazil-1831',
    title: 'Karte von Ost-Brasilien — mapa do Brasil oriental em quatro folhas',
    authors: 'Wilhelm Ludwig von Eschwege, Carl Friedrich Philipp von Martius e Joseph Anton Schwarzmann',
    year: 1831,
    institution: 'Instituto Moreira Salles — Coleção Iconografia Brasileira',
    url: 'https://acervos.ims.com.br/index.php/Detail/objects/89321?lang=pt_BR',
    coverage: 'Províncias marítimas de Pernambuco até Rio de Janeiro, Minas Gerais e partes de províncias limítrofes; registro consultado corresponde à folha superior esquerda',
    scale: 'Não informada no registro consultado',
    format: 'Litografia sobre papel; suporte 70 × 52,2 cm; mancha 47,8 × 45,5 cm',
    rights: 'O IMS informa que a imagem está em domínio público e permite download; citar autores e Acervo Instituto Moreira Salles.',
    use: 'Carta de 1831 feita a partir de observações dos autores e cartas consideradas mais exatas; fonte prioritária para a faixa oriental coberta.',
    limitations: 'É uma das quatro folhas e não cobre todo o território brasileiro; a escala e a continuidade entre folhas precisam ser verificadas antes da georreferência.',
    status: 'georeferencing_pending'
  },
  {
    id: 'duvotenay-san-pedro-1839',
    title: 'Mappa da Provincia de San Pedro: publicado segundo uma carta manuscripta',
    authors: 'José Pedro César; Thunot Duvotenay; gravura de Alexis Orgiazzi',
    year: 1839,
    institution: 'Biblioteca Nacional Digital de Portugal; exemplar digital também catalogado pela University of Pennsylvania',
    url: 'https://purl.pt/3994',
    coverage: 'Província de São Pedro',
    scale: 'Aproximadamente 1:700.000',
    format: 'Mapa impresso em preto e branco; 54,2 × 68 cm (folha 59 × 71 cm)',
    rights: 'Verificar condições de reprodução no registro do exemplar antes de redistribuir a imagem.',
    use: 'Fonte primária provincial de 1839, baseada em carta manuscrita levantada sob direção do Visconde de São Leopoldo.',
    limitations: 'A escala aproximada e o mapa original devem ser inspecionados; não representa as demais províncias.',
    status: 'georeferencing_pending'
  },
  {
    id: 'dreys-war-theatre-1839',
    title: 'Mappa do Theatro da Guerra na Provincia do Rio Grande de S. Pedro do Sul',
    authors: 'Nicolau Dreys',
    year: 1839,
    institution: 'Instituto Histórico e Geográfico do Rio Grande do Sul; obra associada digitalizada pela Biblioteca Brasiliana Guita e José Mindlin (USP)',
    url: 'https://www.ihgrgs.org.br/mapoteca/cd_mapas_rs/CD/imagens/mapas/cap_3/301-59.htm',
    coverage: 'Teatro da guerra na província de São Pedro do Rio Grande do Sul',
    format: 'Mapa histórico associado à obra Notícia descriptiva da provincia do Rio-Grande de S. Pedro do Sul (Rio de Janeiro, J. Villeneuve, 1839)',
    rights: 'Confirmar os termos do acervo custodiante antes de reutilizar a imagem.',
    use: 'Fonte contextual para geografia histórica do conflito farroupilha; complementar à carta provincial de 1839.',
    limitations: 'Mapa temático de teatro de guerra, não substitui carta de limites administrativos provinciais.',
    status: 'image_review_pending'
  }
];
