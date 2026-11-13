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


## Ampliação da série provincial de Schlieben — folhas regionais de 1830

A busca em catálogos de David Rumsey, Old Maps Online, Stanford e Ruderman Rare Maps permitiu identificar os agrupamentos regionais adicionais da série *Das Kaiserthum Brasilien*, do *Atlas von Amerika* (Leipzig, George Joachim Göschen, 1830), desenhada por Wilhelm Ernst August von Schlieben e litografada por W. Werner. A escala de 1:2.000.000 é informada pelos registros catalográficos da série.

### Folha das províncias 2–10 — Nordeste
Título catalogado: *Das Kaiserthum Brasilien Provinz 2. Maranho. 3. Piauy. 4. Ceara. 5. Rio Grande. 6. Prahyba. 7. Pernamubuco. 8. Alagoas. 9. Sergipe. 10. Bahia.*

- Catálogo com transcrição do título e descrição da cobertura entre São Luís/Fortaleza e Salvador/Porto Seguro: https://raremaps.com/gallery/detail/0314gh/das-kaiserthum-brasilien-provinz-2-maranho-3-piauy-4-ceara-5-io-grande-6-prahyba-7-pernamubuco-8-alagoas-9-sergipe-10-bahia
- Registro agregado da série no catálogo David Rumsey: https://www.davidrumsey.com/luna/servlet/view/all/where/South+America/Brazil/when/1830?sort=pub_list_no_initialsort%2Cpub_list_no%2Cseries_no
- **Cautela:** o título abrevia a unidade 5 como “Rio Grande”. Não expandir automaticamente para Rio Grande do Norte até que a imagem e fontes coevas confirmem a identificação.

### Folha das províncias 11, 12, 17 e 18 — Centro-Sudeste
Título catalogado: *Das Kaiserthum Brasilien Provinz 11. Espirito Santo. 12. Rio De Janeiro, 17 Goyaz 18. Minas Geraes.*

- Ficha com título, autoria e descrição geográfica: https://raremaps.com/gallery/detail/0318gh/das-kaiserthum-brasilien-provinz-11-espirito-santo-12-rio-de-janeiro17-goyaz-18-minas-geraes
- Registro da série na David Rumsey: https://www.davidrumsey.com/luna/servlet/view/all/where/South+America/Brazil/when/1830?sort=pub_list_no_initialsort%2Cpub_list_no%2Cseries_no
- A descrição de catálogo indica mapa centrado em Cidade de Goiás e Paracatu e abrangendo áreas vizinhas. É uma pista bibliográfica, não uma interpretação final da geometria.

### Folha das províncias 13, 14 e 15, ilhas 19 e quadro Q — Sul
- **Título catalogado:** *Das Kaiserthum Brasilien Provinz 13 S. Paulo, 14. S. Catharina. 15. S. Pedro 19 Die Inseln a. Fernado de Noronho b. Trinidade. Q. Die Rep. Montevideo (Banda Oriental)*.
- Registro da Barry Lawrence Ruderman Map Collection, Stanford University: https://exhibits.stanford.edu/ruderman/catalog/mr595ky4847
- Registro MODS da Stanford SearchWorks: https://searchworks.stanford.edu/view/mr595ky4847.mods
- Registro agregado Old Maps Online: https://www.oldmapsonline.org/en/maps/7df4a937-c4fd-560a-8edb-f3ad28963ade
- **Cautela:** o número 19 designa ilhas, não uma província. A República de Montevidéu aparece como quadro geográfico separado e não integra as províncias brasileiras.

### O que a série permite afirmar — e o que não permite

- Os catálogos identificam folhas que nomeiam as 18 províncias do inventário de pesquisa: Pará (1); Maranhão a Bahia (2–10); Espírito Santo, Rio de Janeiro, Goiás e Minas Gerais (11, 12, 17, 18); São Paulo, Santa Catarina e São Pedro (13–15); Mato Grosso (16).
- A folha 2–10 agrupa nove províncias; a 11/12/17/18 quatro; a 13/14/15 e elementos adicionais do Atlântico Sul; outras folhas catalogadas cobrem Pará (1) e Mato Grosso (16).
- A série é uma base comparativa útil para o estado cartográfico publicado em 1830. **Não é prova automática de que os limites permaneceram iguais durante todos os anos de 1831 a 1840.**
- As fichas comerciais auxiliam na identificação bibliográfica, mas não concedem direitos de republicação. A busca por exemplares digitais institucionais e termos de uso continua obrigatória.
- O mapa deve ser visualmente inspecionado antes de transcrever linhas de fronteira. O título sozinho não basta para desenhar polígonos.



## Inspeção do registro Stanford — folha meridional Schlieben

A consulta ao registro e ao manifesto IIIF da Stanford University Libraries confirmou metadados específicos que corrigem a atribuição genérica anterior:

- **Identificador persistente:** https://purl.stanford.edu/mr595ky4847
- **Título:** *Das Kaiserthum Brasilien Provinz 13 S. Paulo, 14. S. Catharina. 15 S. Pedro 19 Die Inseln a. Fernado de Noronho b. Trinidade . . . Die Rep. Montevideo (Banda Orientale)*.
- **Contribuidor catalogado:** “Schleiben”; notas do registro atribuem a preparação a W. E. A. von Schlieben.
- **Data no catálogo Stanford:** 1826 (não 1830). O atlas foi publicado em 15 partes entre 1825 e 1830; agregadores como Old Maps Online associam a série a 1830. Para esta folha específica, usar 1826 conforme o registro primário da Stanford, registrando a divergência.
- **Escala:** não determinada pela Stanford. A escala 1:2.000.000 listada por Old Maps Online não está confirmada para esta folha individual; não usar como escala validada.
- **Dimensões físicas catalogadas:** 10 × 8 polegadas.
- **Digitalização:** canvas IIIF 1690 × 2222 pixels; arquivo original digitalizado JP2 de 705 KB.
- **Imagem IIIF:** https://stacks.stanford.edu/image/iiif/mr595ky4847%2F0315gh/full/full/0/default.jpg
- **Download JP2:** https://stacks.stanford.edu/file/mr595ky4847/0315gh.jp2
- **Manifesto IIIF:** https://purl.stanford.edu/mr595ky4847/iiif/manifest
- **MODS:** https://purl.stanford.edu/mr595ky4847.mods
- **Licença:** CC BY-NC-SA 3.0 — https://creativecommons.org/licenses/by-nc-sa/3.0/legalcode . A Stanford declara uso não comercial, atribuição e compartilhamento pela mesma licença; uso comercial requer contato com rumseymapcenter@stanford.edu.
- **Cobertura descrita:** sul do Brasil e Uruguai, de Rio de Janeiro a Montevidéu e ao Rio da Prata. A ficha nomeia São Paulo, Santa Catarina e São Pedro; as ilhas aparecem separadamente, assim como a República de Montevidéu.

A ficha no catálogo do Atlas foi corrigida para 1826, escala “não determinada”, PURL persistente, imagem, arquivo JP2 e licença. O painel oferece links separados para imagem, arquivo e licença. Esta inspeção valida a ficha e a disponibilidade do arquivo, mas **não substitui a leitura cartográfica detalhada nem a georreferência**.


## Correção de metadados das folhas Schlieben no catálogo Stanford

A pesquisa encontrou também o registro institucional da folha nordestina, permitindo substituir o link comercial por acesso persistente Stanford:

- **Folha 2–10 (Nordeste):** PURL https://purl.stanford.edu/jt436cm9609 ; data catalogada 1826; escala não determinada; canvas 1698 × 2230 px; JP2 https://stacks.stanford.edu/file/jt436cm9609/0314gh.jp2 ; imagem IIIF https://stacks.stanford.edu/image/iiif/jt436cm9609%2F0314gh/full/full/0/default.jpg ; licença CC BY-NC-SA 3.0.
- **Folha 1 (Pará/Rio Negro):** PURL https://purl.stanford.edu/jp189rv3526 ; data catalogada 1826; escala não determinada; canvas 2220 × 1679 px; JP2 https://stacks.stanford.edu/file/jp189rv3526/0316gh.jp2 ; imagem IIIF https://stacks.stanford.edu/image/iiif/jp189rv3526%2F0316gh/full/full/0/default.jpg ; licença CC BY-NC-SA 3.0.
- **Folha 13–15 (Sul):** PURL https://purl.stanford.edu/mr595ky4847 ; data catalogada 1826; escala não determinada; canvas 1690 × 2222 px; JP2 https://stacks.stanford.edu/file/mr595ky4847/0315gh.jp2 ; imagem IIIF https://stacks.stanford.edu/image/iiif/mr595ky4847%2F0315gh/full/full/0/default.jpg ; licença CC BY-NC-SA 3.0.

Nos três registros, Stanford descreve mapa não colorido com dimensões físicas 10 × 8 polegadas e o atlas como publicação em 15 partes entre 1825 e 1830. A data 1826 é a data específica fornecida pelo catálogo para cada folha consultada. Stanford declara escala não determinada; portanto, a escala genérica de 1:2.000.000 atribuída por agregadores não será usada como escala confirmada dessas folhas. A licença exige uso não comercial, atribuição e compartilhamento pela mesma licença.

A folha 2–10 usa “Rio Grande” sem qualificação. O catálogo preserva essa forma original e não a transforma em Rio Grande do Norte sem confirmação documental. A folha do Pará inclui partes da Colômbia e do Peru, conforme descrição Stanford, e não deve ser recortada por fronteiras atuais.



## Inspeção visual preliminar — folha Nordeste (1826), Stanford

O visualizador Stanford foi aberto e ampliado para inspeção da digitalização da folha 2–10.

- **Identificação:** https://purl.stanford.edu/jt436cm9609
- **Imagem IIIF:** https://stacks.stanford.edu/image/iiif/jt436cm9609/0314gh/full/425,/0/default.jpg
- **Manifesto:** https://purl.stanford.edu/jt436cm9609/iiif/manifest
- A imagem apresenta o título geral “DAS KAISERTHUM BRASILIEN PROVINZ” e os nomes de províncias listados no título do catálogo: Maranho, Piauy, Ceara, Rio Grande, Prahyba, Pernambuco, Alagoas, Sergipe e Bahia.
- A inspeção do visualizador reportou linhas internas finas, rios nomeados e alguns trechos com perda/fade. Não há escala gráfica ou legenda explícita; a ficha Stanford informa “Scale not determined”.
- A leitura “Rio Grande” permanece pendente de confirmação histórica. A tentativa de leitura ampliada do navegador sugeriu associação ao Rio Grande do Norte, mas a ficha catalográfica não explicita “do Norte”; não converter essa hipótese em dado fechado.
- A ficha Stanford data a folha em ca. 1826. Portanto, ela serve como antecedente cartográfico próximo, não como retrato exato de todo o período 1831–1840.
- **Decisão técnica:** a qualidade parece suficiente para uma futura digitalização assistida, mas ainda não é aceite para vetorização automática nem para publicação de limites. Precisamos validar pontos de controle, transformação cartográfica, erro RMS, coerência entre rios/topônimos e documentação independente.

## Inspeção visual preliminar — folha Pará/Rio Negro (1826), Stanford

O visualizador Stanford foi aberto para examinar a folha 1.

- **Identificação:** https://purl.stanford.edu/jp189rv3526
- **Imagem IIIF:** https://stacks.stanford.edu/image/iiif/jp189rv3526/0316gh/full/full/0/default.jpg
- **Manifesto:** https://purl.stanford.edu/jp189rv3526/iiif/manifest
- **Título:** *Das Kaiserthum Brasilien Provinz 1 Para und zwar Comarca C. Rio Negro (with parts of Columbia and Peru)*.
- A imagem mostra a bacia amazônica e uma extensa rede hidrográfica; a ficha e a inspeção identificam referências como Pará, Rio Negro, Amazonas/Solimões, Madeira, Tapajós, Xingu, Juruá e Purus, além de topônimos históricos.
- Linhas administrativas e internacionais aparecem no desenho, mas não há escala gráfica nem escala determinada nos metadados. A inspeção não identificou graticule claro nem rosa dos ventos.
- A cobertura atravessa regiões que hoje pertencem a mais de um país; não recortar a carta pelas fronteiras internacionais atuais.
- **Decisão técnica:** fonte importante para estudar a Comarca do Rio Negro e o espaço amazônico em 1826, mas inadequada para obter medidas ou polígonos confiáveis sem georreferenciamento com controle e confronto documental. Os nomes e limites refletem o conhecimento e as convenções cartográficas da época.



## Série completa de quatro folhas — mapa oriental de 1831 (Acervo IMS)

A pesquisa por títulos e números de inventário confirmou que o IMS cataloga as quatro folhas separadamente. Todas pertencem à mesma carta original e compartilham autoria, edição, data de produção/publicação e a descrição de cobertura geral.

| Posição | Registro IMS | Arquivo | Suporte e mancha |
|---|---|---|---|
| Superior esquerda | https://acervos.ims.com.br/index.php/Detail/objects/89321 | 005IB01979.jpg | 70 × 52,2 cm; mancha 47,8 × 45,5 cm |
| Superior direita | https://acervos.ims.com.br/index.php/Detail/objects/89322 | 005IB01980.jpg | 70 × 53 cm; mancha 47,7 × 41,5 cm |
| Inferior direita | https://acervos.ims.com.br/index.php/Detail/objects/89323 | 005IB01981.jpg | 70,1 × 52,1 cm; mancha 49 × 41,5 cm |
| Inferior esquerda | https://acervos.ims.com.br/index.php/Detail/objects/89324 | 005IB01982.jpg | 69,8 × 52,5 cm; mancha 49,1 × 45,4 cm |

**Título original transcrito nas quatro fichas:** *Karte von Ost-Brasilien. Carte géographique de la partie orientale de l'Empire du Brèsil en quatre Feiulles, contenant les Provinces maritimes de Pernambuco jusqu'à Rio de Janeiro, celle de Minas Geraës, et une partie des Provinces limitrophes, redigée d'après leurs propres observations et les cartes les plus exactes, et dediée a S.M. Don Pedro Empereur du Brésil par Guill. de Eschwege et Ch. Fr. Ph. de Martius, dresseé par I. Schwarzmann.*

- **Data:** produção e publicação em 1831.
- **Autoria:** Carl Friedrich Philipp von Martius, Wilhelm Ludwig von Eschwege e Joseph Anton Schwarzmann.
- **Editores:** Martius e Johann Baptist von Spix.
- **Impressão:** M. Lindauer.
- **Obra:** *Atlas zur Reise in Brasilien*, de Spix e Martius.
- **Técnica:** litografia; as folhas têm variações de aquarela e tinta conforme o exemplar.
- **Direitos:** as quatro fichas do IMS informam domínio público e download liberado. Citar autores e Acervo Instituto Moreira Salles.
- **Download em alta resolução:** cada registro oferece link “DownloadRepresentation”; os endereços específicos estão cadastrados em src/data/cartographicSources.ts.

A confirmação das quatro folhas evita tratar a imagem superior esquerda isoladamente como se fosse o mapa inteiro. O próximo trabalho cartográfico é alinhar as quatro folhas pelas margens e elementos geográficos comuns, verificar deformações do papel e só então preparar um mosaico georreferenciado. A escala não foi informada nas fichas consultadas; não presumir escala nem aplicar transformação antes de pontos de controle.



## Complemento documental — carta de São Pedro e mapa do teatro da guerra (1839)

A ficha da Biblioteca Nacional Digital de Portugal confirma os metadados completos da carta provincial de São Pedro:

- **Título:** *Mappa da Provincia de San Pedro: publicado segundo uma carta manuscripta*.
- **Levantamento:** sob direção do Visconde de São Leopoldo por José Pedro César, Coronel de Milícias.
- **Geógrafo:** Thunot Duvotenay; **gravura:** Alexis Orgiazzi.
- **Publicação:** Paris, Dépôt Général de la Guerre, 1839.
- **Escala:** aproximadamente 1:700.000; 20 léguas portuguesas (18 ao grau) = 7,10 cm.
- **Dimensões:** mapa 54,20 × 68 cm; folha 59 × 71 cm.
- **Cota:** C.C. 1791 A.
- **Registro persistente:** https://purl.pt/3994 ; **imagem de acesso/baixar:** https://dnet8ble6lm7w.cloudfront.net/maps/BRA/BRA0141.jpeg ; registro complementar: https://dia.upenn.edu/pt/maps/BRA0141/ ; exemplar citado na BnF: https://gallica.bnf.fr/ark:/12148/btv1b53099596d/f1.item .

A Mapoteca do Instituto Histórico e Geográfico do Rio Grande do Sul confirmou o título e autoria do mapa temático de Dreys:
- *Mappa do Theatro da Guerra na Provincia do Rio Grande de S. Pedro do Sul*, Nicolau Dreys, 1839.
- Página do mapa: https://www.ihgrgs.org.br/mapoteca/cd_mapas_rs/CD/imagens/mapas/cap_3/301-59.htm
- Imagem do mapa: https://www.ihgrgs.org.br/mapoteca/cd_mapas_rs/CD/imagens/mapas/cap_3/images/301-59.jpg
- A Biblioteca Brasiliana Guita e José Mindlin/USP cataloga a obra de Dreys, publicada por J. Villeneuve no Rio de Janeiro em 1839, com xv, 216 páginas e mapa anexo: https://digital.bbm.usp.br/handle/bbm/7854 . O PDF do exemplar tem 57,84 MB e os direitos são reservados salvo indicação em contrário.
- **Distinção:** o mapa de Dreys é temático do teatro da guerra; não deve ser usado como limite administrativo provincial.



## Inspeção preliminar das quatro folhas do IMS — limites da leitura em resolução média

O visualizador do IMS foi percorrido para os quatro registros. A inspeção confirma uma composição cartográfica coerente, mas **não permite ler com segurança os nomes provinciais e os detalhes finos na prévia de resolução média**.

- Folha superior esquerda (89321): contornos, relevo e bloco de título visíveis; nomes de localidades e províncias muito pequenos/faintes na prévia.
- Folha superior direita (89322): costa, rios/tributários e hachuras de relevo visíveis; aparece uma grade retangular sobre parte da folha, mas não foram lidos valores de coordenadas.
- Folha inferior direita (89323): rios em azul, relevo hachurado e três mapas de detalhe; o relatório visual detectou escala gráfica e bloco explicativo, mas os valores não são legíveis na prévia.
- Folha inferior esquerda (89324): a posição e o catálogo confirmam a peça complementar; a prévia não permitiu transcrever com segurança os nomes ou detalhes.
- A composição de quatro folhas é confirmada pelos títulos, posições, técnica e continuidade geográfica geral. O encaixe preciso de bordas ainda precisa ser verificado com os arquivos grandes.
- O IMS oferece download em versão grande em cada ficha. O próximo procedimento é obter essas versões, comparar as margens e ler legenda/escala e topônimos em resolução suficiente.

**Decisão:** não extrair fronteiras provinciais das prévias médias. A série permanece em inspeção visual pendente até que as versões grandes sejam examinadas e as linhas possam ser distinguidas de rios, relevo, molduras e outras convenções.

