export type CartographicSource = {
  id: string;
  title: string;
  authors: string;
  year: number;
  institution: string;
  url: string;
  imageUrl?: string;
  downloadUrl?: string;
  licenseUrl?: string;
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
    year: 1826,
    institution: 'Barry Lawrence Ruderman Map Collection, Stanford University Libraries; registro agregado no Old Maps Online',
    url: 'https://purl.stanford.edu/jp189rv3526',
    imageUrl: 'https://stacks.stanford.edu/image/iiif/jp189rv3526%2F0316gh/full/full/0/default.jpg',
    downloadUrl: 'https://stacks.stanford.edu/file/jp189rv3526/0316gh.jp2',
    licenseUrl: 'https://creativecommons.org/licenses/by-nc-sa/3.0/legalcode',
    coverage: 'Província do Pará e Comarca do Rio Negro; a ficha Stanford informa que a folha também abrange partes da Colômbia e do Peru',
    scale: 'Não determinada (metadados Stanford)',
    format: 'Mapa impresso não colorido; 10 × 8 polegadas; digitalização JP2, canvas IIIF 2220 × 1679 px; imagem legível em zoom no visualizador Stanford',
    rights: 'CC BY-NC-SA 3.0; uso não comercial, atribuição e compartilhamento pela mesma licença. Direitos comerciais exigem autorização do Stanford David Rumsey Map Center.',
    use: 'Fonte cartográfica contemporânea ao início da Regência; candidata à leitura e georreferência do Pará.',
    limitations: 'Stanford cataloga esta folha como 1826 e informa escala não determinada; não usar a escala genérica de 1:2.000.000 atribuída à série por agregadores. A inspeção visual identifica rios e linhas administrativas, mas a ausência de escala/graticule claro impede medição direta; não converter as linhas em limites modernos nem georreferenciar sem pontos de controle e revisão histórica.',
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
    scale: '1:2.000.000 (Old Maps Online; confirmar na folha original)',
    format: 'Carta provincial impressa; folha individual de atlas',
    rights: 'Conferir condições de reutilização no registro da coleção antes de republicar a imagem.',
    use: 'Fonte cartográfica contemporânea ao início da Regência; candidata à leitura e georreferência de Mato Grosso.',
    limitations: 'A folha ainda precisa de inspeção visual e comparação com fontes independentes.',
    status: 'image_review_pending'
  },
  {
    id: 'schlieben-northeast-1830',
    title: 'Das Kaiserthum Brasilien. Provinz 2–10',
    authors: 'Wilhelm Ernst August von Schlieben; litografia de W. Werner; edição de George Joachim Göschen',
    year: 1826,
    institution: 'Barry Lawrence Ruderman Map Collection, Stanford University Libraries; registro agregado no Old Maps Online',
    url: 'https://purl.stanford.edu/jt436cm9609',
    imageUrl: 'https://stacks.stanford.edu/image/iiif/jt436cm9609%2F0314gh/full/full/0/default.jpg',
    downloadUrl: 'https://stacks.stanford.edu/file/jt436cm9609/0314gh.jp2',
    licenseUrl: 'https://creativecommons.org/licenses/by-nc-sa/3.0/legalcode',
    coverage: 'Faixa costeira setentrional: Maranhão (2), Piauí (3), Ceará (4), Rio Grande (5 — designação do original, não expandida sem inspeção), Paraíba (6), Pernambuco (7), Alagoas (8), Sergipe (9) e Bahia (10)',
    scale: 'Não determinada (metadados Stanford)',
    format: 'Mapa impresso não colorido; 10 × 8 polegadas; digitalização JP2, canvas IIIF 1698 × 2230 px',
    rights: 'CC BY-NC-SA 3.0; uso não comercial, atribuição e compartilhamento pela mesma licença. Direitos comerciais exigem autorização do Stanford David Rumsey Map Center.',
    use: 'Identifica nove províncias do Nordeste em uma carta de referência anterior à Regência, útil para estudar a configuração administrativa de partida.',
    limitations: 'Stanford cataloga esta folha como 1826 e informa escala não determinada; não usar a escala genérica de 1:2.000.000 atribuída à série por agregadores. O título usa a expressão Rio Grande sem qualificação, que não deve ser automaticamente convertida em Rio Grande do Norte antes da inspeção visual e comparação documental.',
    status: 'image_review_pending'
  },
  {
    id: 'schlieben-southeast-1830',
    title: 'Das Kaiserthum Brasilien. Provinz 11, 12, 17 e 18',
    authors: 'Wilhelm Ernst August von Schlieben; litografia de W. Werner; edição de George Joachim Göschen',
    year: 1830,
    institution: 'Ruderman Rare Maps; série referenciada na David Rumsey Historical Map Collection e Old Maps Online',
    url: 'https://raremaps.com/gallery/detail/0318gh/das-kaiserthum-brasilien-provinz-11-espirito-santo-12-rio-de-janeiro17-goyaz-18-minas-geraes',
    coverage: 'Espírito Santo (11), Rio de Janeiro (12), Goiás (17) e Minas Gerais (18); o catálogo descreve a folha como centrada em Cidade de Goiás e Paracatu, com cobertura de áreas adjacentes',
    scale: '1:2.000.000 (série Schlieben, conforme registros catalográficos)',
    format: 'Folha litográfica regional do Atlas von Amerika (1830)',
    rights: 'Registro de catálogo comercial para identificação; não republicar a imagem sem autorização. Buscar exemplar institucional em domínio público.',
    use: 'Fonte cartográfica regional para comparação das províncias do Centro-Sudeste no começo do período regencial.',
    limitations: 'Descrição de vendedor e metadados agregados não substituem inspeção do original. Conferir a representação da Corte, limites entre Rio de Janeiro e Minas Gerais e continuidade das bordas.',
    status: 'image_review_pending'
  },
  {
    id: 'schlieben-south-1830',
    title: 'Das Kaiserthum Brasilien. Provinz 13, 14, 15 e 19; Q. Die Rep. Montevideo',
    authors: 'Wilhelm Ernst August von Schlieben; litografia de W. Werner; edição de George Joachim Göschen',
    year: 1826,
    institution: 'Barry Lawrence Ruderman Map Collection, Stanford University Libraries; registro agregado no Old Maps Online',
    url: 'https://purl.stanford.edu/mr595ky4847',
    imageUrl: 'https://stacks.stanford.edu/image/iiif/mr595ky4847%2F0315gh/full/full/0/default.jpg',
    downloadUrl: 'https://stacks.stanford.edu/file/mr595ky4847/0315gh.jp2',
    licenseUrl: 'https://creativecommons.org/licenses/by-nc-sa/3.0/legalcode',
    coverage: 'São Paulo (13), Santa Catarina (14), São Pedro (15), ilhas atlânticas (19) e República de Montevidéu (quadro Q, território externo ao inventário provincial brasileiro)',
    scale: 'Não determinada (metadados Stanford); Old Maps Online lista 1:2.000.000 para a série, sem confirmação específica nesta folha',
    format: 'Mapa impresso não colorido; 10 × 8 polegadas; digitalização JP2, canvas IIIF 1690 × 2222 px; Atlas von Europa publicado em partes entre 1825 e 1830',
    rights: 'CC BY-NC-SA 3.0; uso não comercial, atribuição e compartilhamento pela mesma licença. Direitos comerciais exigem autorização do Stanford David Rumsey Map Center.',
    use: 'Identifica as províncias meridionais brasileiras em 1830 e ajuda a contextualizar a vizinhança platina.',
    limitations: 'Stanford cataloga a folha como 1826 e declara escala não determinada; isso prevalece para esta cópia sobre a data 1830/escala 1:2.000.000 atribuídas genericamente à série por agregadores. A designação 19 refere-se a ilhas, não a uma província. A República de Montevidéu não deve ser incluída no território brasileiro. Inspecionar a folha para interpretar limites e convenções cartográficas.',
    status: 'image_review_pending'
  },
  {
    id: 'martius-eschwege-east-brazil-1831',
    title: 'Karte von Ost-Brasilien — folha superior esquerda (série de quatro folhas)',
    authors: 'Wilhelm Ludwig von Eschwege, Carl Friedrich Philipp von Martius e Joseph Anton Schwarzmann',
    year: 1831,
    institution: 'Instituto Moreira Salles — Coleção Iconografia Brasileira',
    url: 'https://acervos.ims.com.br/index.php/Detail/objects/89321?lang=pt_BR',
    imageUrl: 'https://acervos.ims.com.br/service.php/File/20025_ca_object_representations_media_60356_medium.jpg',
    downloadUrl: 'https://acervos.ims.com.br/index.php/Detail/DownloadRepresentation/context/objects/representation_id/60356/id/89321/download/1/version/large',
    coverage: 'Províncias marítimas de Pernambuco até Rio de Janeiro, Minas Gerais e partes de províncias limítrofes; registro consultado corresponde à folha superior esquerda',
    scale: 'Não informada no registro consultado',
    format: 'Gravura/litografia sobre papel; suporte 70 × 52,2 cm; mancha 47,8 × 45,5 cm',
    rights: 'O IMS informa que a imagem está em domínio público e permite download; citar autores e Acervo Instituto Moreira Salles.',
    use: 'Carta de 1831 feita a partir de observações dos autores e cartas consideradas mais exatas; fonte prioritária para a faixa oriental coberta.',
    limitations: 'É uma das quatro folhas e não cobre todo o território brasileiro; a escala e a continuidade entre folhas precisam ser verificadas antes da georreferência.',
    status: 'image_review_pending'
  },
  {
    id: 'martius-eschwege-east-brazil-1831-upper-right',
    title: 'Karte von Ost-Brasilien — folha superior direita',
    authors: 'Carl Friedrich Philipp von Martius, Wilhelm Ludwig von Eschwege e Joseph Anton Schwarzmann; editores Martius e Johann Baptist von Spix; impressão M. Lindauer',
    year: 1831,
    institution: 'Instituto Moreira Salles — Coleção Iconografia Brasileira',
    url: 'https://acervos.ims.com.br/index.php/Detail/objects/89322',
    imageUrl: 'https://acervos.ims.com.br/service.php/File/50129_ca_object_representations_media_60357_medium.jpg',
    downloadUrl: 'https://acervos.ims.com.br/index.php/Detail/DownloadRepresentation/context/objects/representation_id/60357/id/89322/download/1/version/large',
    coverage: 'Folha superior direita da carta oriental em quatro folhas; o título geral cobre as províncias marítimas de Pernambuco ao Rio de Janeiro, Minas Gerais e partes de províncias limítrofes',
    scale: 'Não informada no registro consultado',
    format: 'Litografia e aquarela sobre papel; suporte 70 × 53 cm; mancha 47,7 × 41,5 cm',
    rights: 'Domínio público; download liberado pelo IMS. Citar autores e Acervo Instituto Moreira Salles.',
    use: 'Segunda folha do mosaico cartográfico oriental de 1831, necessária para recompor a cobertura contínua.',
    limitations: 'A posição da folha é confirmada pelo catálogo; a extensão exata das províncias visíveis e a junção com as demais folhas exigem inspeção visual e comparação das margens.',
    status: 'image_review_pending'
  },
  {
    id: 'martius-eschwege-east-brazil-1831-lower-right',
    title: 'Karte von Ost-Brasilien — folha inferior direita',
    authors: 'Carl Friedrich Philipp von Martius, Wilhelm Ludwig von Eschwege e Joseph Anton Schwarzmann; editores Martius e Johann Baptist von Spix; impressão M. Lindauer',
    year: 1831,
    institution: 'Instituto Moreira Salles — Coleção Iconografia Brasileira',
    url: 'https://acervos.ims.com.br/index.php/Detail/objects/89323',
    imageUrl: 'https://acervos.ims.com.br/service.php/File/13610_ca_object_representations_media_60358_medium.jpg',
    downloadUrl: 'https://acervos.ims.com.br/index.php/Detail/DownloadRepresentation/context/objects/representation_id/60358/id/89323/download/1/version/large',
    coverage: 'Folha inferior direita da carta oriental em quatro folhas; o título geral cobre as províncias marítimas de Pernambuco ao Rio de Janeiro, Minas Gerais e partes de províncias limítrofes',
    scale: 'Não informada no registro consultado',
    format: 'Litografia e aquarela sobre papel; suporte 70,1 × 52,1 cm; mancha 49 × 41,5 cm',
    rights: 'Domínio público; download liberado pelo IMS. Citar autores e Acervo Instituto Moreira Salles.',
    use: 'Terceira folha do mosaico cartográfico oriental de 1831, necessária para recompor a cobertura contínua.',
    limitations: 'A posição da folha é confirmada pelo catálogo; a extensão exata das províncias visíveis e a junção com as demais folhas exigem inspeção visual e comparação das margens.',
    status: 'image_review_pending'
  },
  {
    id: 'martius-eschwege-east-brazil-1831-lower-left',
    title: 'Karte von Ost-Brasilien — folha inferior esquerda',
    authors: 'Carl Friedrich Philipp von Martius, Wilhelm Ludwig von Eschwege e Joseph Anton Schwarzmann; editores Martius e Johann Baptist von Spix; impressão M. Lindauer',
    year: 1831,
    institution: 'Instituto Moreira Salles — Coleção Iconografia Brasileira',
    url: 'https://acervos.ims.com.br/index.php/Detail/objects/89324',
    imageUrl: 'https://acervos.ims.com.br/service.php/File/16555_ca_object_representations_media_60359_medium.jpg',
    downloadUrl: 'https://acervos.ims.com.br/index.php/Detail/DownloadRepresentation/context/objects/representation_id/60359/id/89324/download/1/version/large',
    coverage: 'Folha inferior esquerda da carta oriental em quatro folhas; o título geral cobre as províncias marítimas de Pernambuco ao Rio de Janeiro, Minas Gerais e partes de províncias limítrofes',
    scale: 'Não informada no registro consultado',
    format: 'Litografia, aquarela e tinta metaloácida sobre papel; suporte 69,8 × 52,5 cm; mancha 49,1 × 45,4 cm',
    rights: 'Domínio público; download liberado pelo IMS. Citar autores e Acervo Instituto Moreira Salles.',
    use: 'Quarta folha do mosaico cartográfico oriental de 1831, necessária para recompor a cobertura contínua.',
    limitations: 'A posição da folha é confirmada pelo catálogo; a extensão exata das províncias visíveis e a junção com as demais folhas exigem inspeção visual e comparação das margens.',
    status: 'image_review_pending'
  },
  {
    id: 'duvotenay-san-pedro-1839',
    title: 'Mappa da Provincia de San Pedro: publicado segundo uma carta manuscripta',
    authors: 'José Pedro César; Thunot Duvotenay; gravura de Alexis Orgiazzi',
    year: 1839,
    institution: 'Biblioteca Nacional Digital de Portugal; exemplar digital também catalogado pela University of Pennsylvania',
    url: 'https://purl.pt/3994',
    imageUrl: 'https://dnet8ble6lm7w.cloudfront.net/maps/BRA/BRA0141.jpeg',
    downloadUrl: 'https://dia.upenn.edu/pt/maps/BRA0141/',
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
    imageUrl: 'https://www.ihgrgs.org.br/mapoteca/cd_mapas_rs/CD/imagens/mapas/cap_3/images/301-59.jpg',
    coverage: 'Teatro da guerra na província de São Pedro do Rio Grande do Sul',
    format: 'Mapa histórico associado à obra Notícia descriptiva da provincia do Rio-Grande de S. Pedro do Sul (Rio de Janeiro, J. Villeneuve, 1839)',
    rights: 'Confirmar os termos do acervo custodiante antes de reutilizar a imagem.',
    use: 'Fonte contextual para geografia histórica do conflito farroupilha; complementar à carta provincial de 1839.',
    limitations: 'Mapa temático de teatro de guerra, não substitui carta de limites administrativos provinciais.',
    status: 'image_review_pending'
  }
];
