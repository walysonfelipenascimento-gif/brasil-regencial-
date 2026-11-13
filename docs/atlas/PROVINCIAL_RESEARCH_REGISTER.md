# Registro de pesquisa — divisões provinciais (1831–1840)

## Estado do trabalho

Foi criado um inventário de 18 unidades provinciais para orientar a pesquisa. O inventário é uma lista administrativa de trabalho, não uma afirmação de que todas as cartas do intervalo representem exatamente os mesmos limites. Nenhuma geometria foi publicada.

## Inventário inicial

1. Pará (em fontes, verificar também a designação Grão-Pará)
2. Maranhão
3. Piauí
4. Ceará
5. Rio Grande do Norte
6. Paraíba
7. Pernambuco
8. Alagoas
9. Sergipe
10. Bahia
11. Espírito Santo
12. Rio de Janeiro
13. São Paulo
14. Santa Catarina
15. São Pedro do Rio Grande do Sul
16. Minas Gerais
17. Goiás
18. Mato Grosso

A lista não inclui Amazonas como província, pois sua criação ocorreu em 1850; tampouco Paraná, criado em 1853, ou o Município Neutro como província. A partir da reforma de 1834, a Corte deve ser representada e pesquisada separadamente da província do Rio de Janeiro. A Comarca do São Francisco exige tratamento temporal específico em razão de sua transferência de Pernambuco para a Bahia em 1827.

## Fontes institucionais para localizar cartas e documentos

Estas instituições são pontos de partida para pesquisa e catalogação. A existência de um portal não prova, por si só, que uma carta específica tenha sido encontrada ou que seus limites estejam validados.

- **Biblioteca Nacional — BNDigital:** https://bndigital.bn.gov.br/ — pesquisar mapas, atlas e documentos cartográficos do século XIX.
- **Biblioteca e Mapoteca do IBGE:** https://biblioteca.ibge.gov.br/ — catálogo cartográfico e obras de referência.
- **Arquivo Nacional:** https://www.gov.br/arquivonacional/pt-br — fundos documentais e instrumentos de pesquisa.
- **Biblioteca do Senado Federal:** https://www12.senado.leg.br/institucional/biblioteca — legislação imperial e atos de organização territorial.
- **Câmara dos Deputados — legislação histórica:** https://www2.camara.leg.br/ — atos normativos e textos legais, a conferir por data e edição.

## Fichamento obrigatório de cada carta

- Título original, autoria/cartógrafo, editor/impressor.
- Data de publicação e, se diferente, período representado.
- Instituição custodiante, código de referência e URL permanente.
- Escala, projeção, orientação e sistema de coordenadas (se informado).
- Material, resolução e qualidade do exemplar digitalizado.
- Licença/direitos de reprodução e condições de publicação.
- Método de georreferenciamento, pontos de controle e erro residual.
- Interpretações alternativas, lacunas e grau de confiança.
- Revisão por historiador/cartógrafo antes de gerar GeoJSON público.

## Critério de aceite da camada provincial

Não desenhar fronteiras com base em estados atuais, mapas escolares modernos ou interpolação visual sem evidência. Se duas cartas divergirem, preservar as versões por data e fonte; não fundi-las silenciosamente. Se a fonte não permitir precisão suficiente, exibir a incerteza ou não publicar o polígono.


## Cartas históricas localizadas — pesquisa de 13 de novembro de 2026

A pesquisa em catálogos de coleções cartográficas e bibliotecas identificou fontes específicas, algumas contemporâneas à Regência. Elas passam a integrar o catálogo técnico em `src/data/cartographicSources.ts` e aparecem no painel do Atlas. **Localizar/cadastrar não equivale a georreferenciar ou validar limites.**

### 1. Cartas provinciais de Schlieben (1830)

- **Pará:** *L. Das Kaiserthum Brasilien. Provinz 1. Para und zwar Comarca*. Wilhelm Ernst August von Schlieben; litografia de W. Werner. Registro na David Rumsey Historical Map Collection: https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~269903~90045190:L--Das-kaiserthum-Brasilien--Provin . Série catalogada em escala 1:2.000.000. A folha precisa ser inspecionada e sua cobertura conferida.
- **Mato Grosso:** *L. Das Kaiserthum Brasilien. Provinz 16. Mattogrosso*. Registro na David Rumsey: https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~269907~90045186:L--Das-kaiserthum-Brasilien--Provin . Old Maps Online registra a série em 1830 e escala 1:2.000.000: https://www.oldmapsonline.org/en/Mato_Grosso_Plateau .
- A série *Atlas von Amerika*, Leipzig, George Joachim Goschen, 1830, é atribuída a Schlieben. Os registros confirmam folhas provinciais individualizadas, mas ainda não foi estabelecido o inventário completo das folhas nem sua continuidade territorial.

### 2. Carta do Brasil oriental (1831)

- **Título:** *Karte von Ost-Brasilien. Carte géographique de la partie orientale de l'Empire du Brésil en quatre feuilles*.
- **Autoria:** Wilhelm Ludwig von Eschwege, Carl Friedrich Philipp von Martius e Joseph Anton Schwarzmann; edição associada a Martius e Spix; impressão M. Lindauer.
- **Data:** produção e publicação em 1831.
- **Cobertura:** províncias marítimas de Pernambuco até Rio de Janeiro, Minas Gerais e partes das províncias limítrofes. O registro do IMS consultado corresponde à folha superior esquerda de uma série de quatro.
- **Suporte:** litografia; 70 × 52,2 cm; mancha 47,8 × 45,5 cm. Escala não indicada na ficha consultada.
- **Acervo:** Instituto Moreira Salles, Coleção Iconografia Brasileira. O acervo informa domínio público e download gratuito, com citação dos autores e do IMS.
- Registro: https://acervos.ims.com.br/index.php/Detail/objects/89321?lang=pt_BR . A ficha declara que a carta foi redigida a partir de observações dos autores e cartas consideradas mais exatas.
- **Limite de uso:** uma folha não equivale ao conjunto das quatro; não usar como cobertura nacional nem extrapolar limites para áreas ausentes.

### 3. Província de São Pedro (1839)

- **Título:** *Mappa da Provincia de San Pedro: publicado segundo uma carta manuscripta*.
- **Levantamento:** sob direção do Visconde de São Leopoldo por José Pedro César; Thunot Duvotenay, geógrafo; gravura de Alexis Orgiazzi.
- **Publicação:** Paris, Dépôt Général de la Guerre, 1839.
- **Escala:** aproximadamente 1:700.000; 20 léguas portuguesas (18 ao grau) = 7,10 cm.
- **Dimensões:** mapa 54,2 × 68 cm; folha 59 × 71 cm.
- **Acervo e registro:** Biblioteca Nacional Digital de Portugal, cota C.C. 1791 A: https://purl.pt/3994 . University of Pennsylvania também cataloga a carta: https://dia.upenn.edu/pt/maps/BRA0141/ ; a ficha cita o exemplar da BnF: https://gallica.bnf.fr/ark:/12148/btv1b53099596d/f1.item .
- **Limite de uso:** carta provincial importante para 1839, mas não representa as demais províncias. Conferir imagem original e condições de reutilização.

### 4. Mapa do teatro da guerra farroupilha (1839)

- **Título:** *Mappa do Theatro da Guerra na Provincia do Rio Grande de S. Pedro do Sul*.
- **Autor/data:** Nicolau Dreys, 1839.
- **Acervo:** Mapoteca do Instituto Histórico e Geográfico do Rio Grande do Sul: https://www.ihgrgs.org.br/mapoteca/cd_mapas_rs/CD/imagens/mapas/cap_3/301-59.htm .
- A obra associada *Noticia descriptiva da provincia do Rio-Grande de S. Pedro do Sul* foi publicada no Rio de Janeiro por J. Villeneuve em 1839; exemplar digital da Biblioteca Brasiliana Guita e José Mindlin/USP: https://digital.bbm.usp.br/handle/bbm/7854 . O catálogo descreve xv, 216 páginas e mapa; PDF do exemplar disponível no registro.
- **Limite de uso:** mapa temático do teatro da guerra, útil para contexto geográfico do conflito, não é carta de limites administrativos provinciais.

## Resultado e próximos passos técnicos

- Fontes primárias identificadas para Pará e Mato Grosso (1830), faixa oriental do Império (1831) e São Pedro (1839), além de um mapa temático de guerra (1839).
- O *Atlas do Império do Brasil* de Cândido Mendes é de **1868**, posterior em 28 anos ao fim da Regência. Pode auxiliar comparação historiográfica, mas não deve ser usado como retrato direto de 1831–1840. Referência acadêmica: https://www.scielo.br/j/his/a/yfVmV5GwN9z6vBW6nJS4j4J/?lang=pt&ilang=es .
- Próximo passo: inspecionar imagens em alta resolução, completar as folhas da série Schlieben e Martius/Eschwege e georreferenciar cada carta com pontos de controle distribuídos. Registrar transformação, erro RMS e incerteza.
- Nenhum polígono foi criado nesta atualização; não há base para declarar fronteiras provinciais nacionais completas ou concluir a Etapa 1.
