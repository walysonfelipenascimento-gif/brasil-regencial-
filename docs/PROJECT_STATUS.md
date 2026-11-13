# Brasil Regencial — estado consolidado do projeto

**Atualizado em:** 6 de novembro de 2026  
**Etapa atual:** 1 de 5 — Atlas histórico  
**Estado geral:** em desenvolvimento; Etapa 1 ainda não concluída.

Este documento é o ponto de retomada do projeto. Deve ser atualizado sempre que houver mudança importante de arquitetura, etapa, infraestrutura ou estado de validação.

## Visão e etapas

Projeto educacional independente: **Brasil Regencial — Um território, muitas histórias**, sobre o Brasil entre 1831 e 1840.

1. **Atlas histórico** — cartografia, províncias, acontecimentos, filtros temporais e camadas.
2. **Movimento e animação** — transições e animações históricas.
3. **Documentário cinematográfico** — narrativa audiovisual de aproximadamente cinco minutos.
4. **Museu virtual e arquivo histórico** — acervo com proveniência e contexto.
5. **Experiência educacional e simulador** — atividades e experiências interativas.

A ordem deve ser respeitada. Não iniciar a etapa seguinte como concluída enquanto a etapa anterior não passar por revisão e aceite.

## Infraestrutura independente

- GitHub: https://github.com/walysonfelipenascimento-gif/brasil-regencial-
- Branch: `main`
- Render service: `brasil-regencial`
- Render service ID: `srv-dbn43o3rjlhs73djj850`
- URL: https://brasil-regencial.onrender.com
- Deploys: https://dashboard.render.com/web/srv-dbn43o3rjlhs73djj850/deploys
- Build: `npm install && npm run build`
- Start: `npm start`
- Auto deploy: configurado como `yes` para commits na branch `main`.
- Banco de dados: não configurado; manter dados estáticos nesta fase.

**Separação obrigatória:** este repositório e serviço são exclusivos do Brasil Regencial. Não alterar Nexora, seus repositórios, serviços Render, projetos Supabase, segredos ou arquivos.

## O que existe

- Aplicação Next.js 15, React 19 e TypeScript.
- Interface responsiva com Visão geral, Atlas histórico, Linha do tempo, Expedições, Museu virtual e Arquivo histórico.
- Mapa interativo MapLibre GL com base contemporânea OpenStreetMap e atribuição.
- Marcadores aproximados para acontecimentos políticos e revoltas.
- Busca por acontecimento/localidade, filtro por ano e camadas temáticas.
- Linha do tempo que mantém movimentos plurianuais visíveis nos anos em que estavam em curso.
- Marcadores com diferenciação visual entre Política e Revoltas, movimentos em curso e registros anteriores.
- Inventário preliminar de 18 províncias.
- Contrato tipado GeoJSON e validador para futuras fronteiras históricas.
- Registros editoriais e critérios de proveniência em `docs/atlas/`.

## Limites históricos que não podem ser violados

- O mapa-base OSM é contemporâneo; não representa o Brasil provincial de 1831–1840.
- Os pontos dos acontecimentos são referências aproximadas de cidades/regiões, não local exato, frente de batalha, área de influência ou extensão territorial.
- **Ainda não há polígonos provinciais históricos validados.** A coleção GeoJSON de fronteiras permanece intencionalmente vazia.
- Não desenhar fronteiras a partir dos estados atuais, mapas escolares modernos ou interpolação sem evidência.
- Amazonas (1850) e Paraná (1853) não devem ser incluídos como províncias da Regência; a Corte/Município Neutro precisa ser distinguida da província do Rio de Janeiro após a reforma de 1834.
- A Comarca do São Francisco exige tratamento histórico temporal próprio.
- Datas e descrições do catálogo de acontecimentos continuam preliminares até serem conferidas em fontes identificáveis.
- Instituições listadas nos registros são pontos de partida; não afirmar que uma carta específica foi encontrada ou conferida sem catalogação concreta.

## Pendências obrigatórias para concluir a Etapa 1

1. Localizar cartas históricas específicas próximas a 1831–1840 em acervos institucionais.
2. Registrar título, autor, data representada/publicada, instituição, identificador persistente, URL, escala e licença.
3. Comparar cartas e identificar alterações temporais nos limites provinciais.
4. Avaliar georreferenciamento, pontos de controle, erro residual e incertezas.
5. Criar geometrias apenas quando a evidência permitir; validar topologia e vigência.
6. Publicar camadas provinciais temporais com fonte e incerteza visíveis.
7. Revisar coordenadas e cronologia dos acontecimentos com bibliografia/fonte específica.
8. Testar build, navegação, filtros, mapa e experiência móvel.
9. Confirmar no Render o commit efetivamente publicado e verificar a página ao vivo.

## Situação do Render — atenção

O último deploy anteriormente confirmado como `live` foi o commit `77034b360d3b52615a4e52f1d0c1f456dc3190c2`. Commits posteriores foram enviados ao GitHub, mas não se deve afirmar que estão publicados até que a lista de deploys do Render confirme o commit correspondente. Como auto deploy está habilitado, não disparar deploy manual após push; investigar por que os commits não aparecem como deploys automáticos.

## Commits recentes relevantes

- `d41068158637a9518dad3fbb8b775c8a565c8d45` — primeira correção da cronologia plurianual.
- `a65268812ccb77a4bf7da5f2fa683b80792b8908` — recorte anual para eventos pontuais e movimentos em curso.
- `b1f4baa560c6b289136498f3d30c916582bf3802` — tipagem do catálogo e aviso editorial.
- `4a3ba356fd8c21471ca200c1e30e00701b928c16` — estados temporais nos marcadores.
- `c9603dab91b6ff8f3c250850df8af8e8f87c5e4a` — estilo temporal e por categoria.
- `5abfbb8206532d1c54bf8313abb52281f26b0e1a` — documentação dos estados temporais.
- `964d7142314ecbf4ecd6d9bf8ed70d8fba4df08b` — legenda e contexto temporal do atlas.
- `bab5aed6fd4d3a1989281831ce32f80e3e710b65` — acabamento da legenda e resumo anual.

## Atualização de implementação — 6 de novembro de 2026

- Marcadores do mapa agora distinguem Política e Revoltas, movimentos em curso e registros anteriores ao ano selecionado.
- Popups identificam o estado temporal e reiteram que os pontos são referências aproximadas.
- A legenda do atlas identifica as categorias e o resumo anual informa quantos movimentos estão ativos no intervalo selecionado.
- Busca ganhou rótulo acessível, ação para limpar o termo e estado vazio quando não há resultados.
- Foi adicionado GitHub Actions em `.github/workflows/ci.yml` para executar `npx tsc --noEmit` e `npm run build` em pushes e pull requests para `main`. Ainda não há resultado de execução confirmado.

Commits adicionais: `1ff7ae8a4dbe4eb69271abdaef87bf7ce97ecbb8` (CI), `6ecac3c992a920777854c4fd4dfe41a296889005` (busca e estado vazio), `56f41278ae268e9d9a08678a29a1bd49d76fc298` (estilo da busca).

## Próxima retomada

Continuar diretamente na Etapa 1. Prioridade principal: pesquisa cartográfica documental para identificar cartas provinciais específicas e produzir geometrias validadas. Em paralelo, aguardar/verificar a execução do CI, resolver o fluxo de deploy automático e testar a aplicação. Não declarar a etapa concluída enquanto as fronteiras históricas exigidas não tiverem fonte identificada e validação.



## Correção da esteira de verificação — 6 de novembro de 2026

A primeira execução do GitHub Actions falhou na etapa de configuração do Node.js porque o workflow solicitava cache npm sem que houvesse lockfile no repositório. A configuração foi corrigida removendo o cache dependente de lockfile. Commit da correção: `e9392016d79d3d84f6ad7f00b7d73c8b65b1cfba`. Na última consulta, a execução estava em andamento na instalação das dependências; TypeScript e build ainda não tinham sido executados. Acompanhar em https://github.com/walysonfelipenascimento-gif/brasil-regencial-/actions.


## Melhoria de navegação cartográfica — 6 de novembro de 2026

- Marcadores com coordenadas coincidentes agora são agrupados em um único ponto interativo, evitando que acontecimentos no Rio de Janeiro e em Salvador fiquem visualmente sobrepostos.
- O popup do grupo lista individualmente os acontecimentos, ordenados por ano, com categoria, intervalo, descrição e estado temporal.
- O agrupamento usa somente coordenadas já cadastradas e exatamente idênticas decimais para detectar coincidências; não desloca pontos nem sugere precisão geográfica adicional.
- Marcadores agrupados exibem a quantidade de registros e recebem estilo/foco acessível.
- Esta melhoria não altera a natureza aproximada das localizações nem cria fronteiras ou áreas de conflito.

Commits: `eaeeb9fe67c71db2c208eec2db9a7e199f209973` (agrupamento funcional) e `c15a87081b0a7e73f47c38f03d07324942486dd3` (estilo e acessibilidade).

**Validação pendente:** conferir TypeScript/build no CI e confirmar publicação no Render. Não afirmar deploy concluído até o commit aparecer como `live`.

## Auditoria de continuidade — 6 de novembro de 2026, 21:55 UTC

### Verificação automatizada
- Commit mais recente conferido no GitHub: `fc2ee29e8bcda69d8c106221a460e18299909f88`.
- A execução do GitHub Actions associada a esse conjunto de alterações concluiu com sucesso: compilação Next.js, checagem de tipos TypeScript e geração das páginas estáticas.
- O workflow ainda registra avisos de depreciação do runtime Node 20 usado pelas actions v4 e de uma dependência transitiva (`punycode`). Não são falhas da compilação; revisar a atualização das actions em tarefa própria.

### Auditoria de publicação
- O serviço Render continua configurado para acompanhar `main`, com `autoDeploy=yes` e gatilho por commit.
- O último deploy efetivamente `live` continua sendo `77034b360d3b52615a4e52f1d0c1f456dc3190c2`, concluído às 21:18:01 UTC.
- A consulta ao histórico de eventos do serviço não mostrou evento de build/deploy após 21:18 UTC, apesar dos commits posteriores no GitHub.
- Portanto, o código mais recente está no GitHub e passou no CI, mas **a publicação dessas alterações no Render ainda não está confirmada**. Não disparar deploy manual enquanto auto deploy estiver habilitado; investigar primeiro a entrega do evento de commit/webhook e conferir novamente a lista de deploys.

### Revisão técnica do mapa
- O agrupamento de marcadores usa igualdade exata das coordenadas cadastradas; pontos apenas próximos não são fundidos.
- A inicialização e a limpeza do MapLibre removem marcadores e instância do mapa no cleanup do efeito React.
- A validação GeoJSON rejeita dados malformados, coordenadas fora de WGS84, anéis abertos, datas inválidas, fontes sem URL e feições sem revisão declarada.
- A validação ainda não substitui uma verificação topológica especializada (por exemplo, auto-interseções e relações entre anéis). Nenhum polígono histórico foi publicado.
- A coleção `regencyBoundaries` permanece vazia até que cartas específicas sejam identificadas, catalogadas e georreferenciadas com incerteza documentada.

Este adendo prevalece sobre observações antigas deste documento que diziam que a execução do CI ainda estava em andamento ou que o critério de agrupamento era arredondado.

## Continuidade — verificação posterior (6 de novembro de 2026)

- Commit `20aa1482bfb759fcad3fd2682713269ef540f3db`: lista lateral de acontecimentos agora usa as mesmas camadas habilitadas que alimentam os marcadores do mapa. Ao desativar uma categoria, seus registros deixam também de aparecer na lista; a mensagem vazia explica como reativá-los.
- GitHub Actions do commit `20aa1482`: concluído com sucesso. Também passaram os commits de documentação/auditoria `fb6843c5`, melhoria de busca `74222299` e ajuste CSS `fc2ee29e`.
- O inventário provincial continua com 18 entradas catalogadas para pesquisa, mas sem geometrias validadas. O GeoJSON permanece deliberadamente vazio.
- A publicação Render ainda não acompanha o HEAD do GitHub: último deploy `live` confirmado permanece `77034b3`. Não declarar as melhorias recentes disponíveis no site público até o Render confirmar o commit correspondente.

## Continuidade — navegação móvel e CI (13 de novembro de 2026)

- A navegação lateral anterior era ocultada em telas de até 650 px sem oferecer uma alternativa equivalente. Foi adicionada uma barra horizontal compacta com acesso às seis áreas principais: Visão geral, Atlas histórico, Linha do tempo, Expedições, Museu virtual e Arquivo histórico.
- A navegação móvel indica a página atual com `aria-current="page"`; os controles também receberam destaque de foco por teclado.
- Commits: `da73209b2e5cde590eeb84d97b11eb99e097c8df` (navegação móvel) e `6f385fbb4f5d994c745fc63215edd1c093dd83e2` (estilos responsivos).
- O workflow de CI que agora inclui ESLint, TypeScript e build passou no commit `6be1e44fab50cf23260a7b72308b4a99ce5dc938` (execução 42300969997).
- As alterações de navegação dispararam novas execuções de CI: `43459560590` e `43459564811`. No momento desta atualização, ambas ainda não tinham resultado final; conferir antes de considerar a alteração validada.
- O deploy Render permanece sem confirmação para os commits recentes. O serviço ainda informa auto deploy habilitado; não disparar manualmente enquanto essa configuração estiver ativa. Último commit live conhecido: `77034b360d3b52615a4e52f1d0c1f456dc3190c2`.
- A camada de fronteiras provinciais e a revisão documental dos eventos continuam como bloqueios históricos reais da Etapa 1. A barra móvel melhora o acesso à interface, mas não altera o estado de conclusão da etapa.

## Página inicial — refinamento visual (13 de novembro de 2026)

- A abertura da Visão geral foi redesenhada com hierarquia editorial, composição em duas colunas, ilustração abstrata de bússola/cartografia (explicitamente decorativa, não é mapa histórico), chamadas de acesso ao Atlas e apresentação do projeto.
- Incluída faixa de indicadores com rótulos cautelosos: 10 anos do recorte; 18 unidades no inventário administrativo inicial (não são polígonos validados); 12 registros cronológicos preliminares.
- A página inicial recebeu ajustes próprios para telas pequenas, foco visível e respeito à preferência por movimento reduzido.
- Commits: `696c939cbfd1c225424421b90db1e9fb16809cda` (estrutura da Home) e `b4454080db8951b2467f56eb4f1e3ec0922700fe` (estilos da Home).
- Verificações CI das duas alterações: execuções `43459857038` e `43459895632`; estavam em andamento na última consulta.
- A Home refinada não altera o critério de conclusão da Etapa 1. O atlas ainda não pode ser declarado historicamente completo sem cartas provinciais de época ou reconstruções georreferenciadas com fontes identificadas, controle de qualidade e revisão. Não serão usados limites estaduais atuais como substitutos.


## Pesquisa cartográfica ampliada e catálogo no Atlas — 13 de novembro de 2026

- A pesquisa com TinyFish identificou cartas primárias e registros cartográficos específicos: folhas provinciais de Schlieben (1830) para Pará e Mato Grosso; mapa do Brasil oriental em quatro folhas de Eschwege/Martius/Schwarzmann (1831); carta da Província de São Pedro (1839); e mapa do teatro da guerra farroupilha de Nicolau Dreys (1839).
- Metadados, URLs persistentes, cobertura, escala conhecida, direitos/limitações e estado de análise foram registrados em `src/data/cartographicSources.ts`.
- O painel lateral do Atlas agora apresenta as fontes cartográficas, com ano, autores, acervo, cobertura, escala e estado de processamento. Os registros não são apresentados como polígonos prontos.
- O *Atlas do Império do Brasil* de Cândido Mendes é de 1868; será tratado apenas como fonte comparativa posterior, nunca como retrato direto da Regência.
- **Estado da Etapa 1:** avançou de ausência de cartas específicas para catálogo de fontes primárias verificáveis. Ainda não concluída: as imagens precisam ser inspecionadas, as séries de folhas completadas, as cartas georreferenciadas e as geometrias validadas; cronologia e coordenadas dos eventos também exigem revisão documental.
- Nenhum polígono provincial foi inventado ou publicado nesta atualização.


## Continuidade — série Schlieben ampliada (13 de novembro de 2026)

- Pesquisa adicional identificou três agrupamentos regionais da série de 1830: províncias 2–10 (Nordeste); províncias 11, 12, 17 e 18 (Centro-Sudeste); províncias 13, 14 e 15, além de ilhas 19 e quadro Q da República de Montevidéu (Sul/Atlântico).
- Em conjunto com os registros previamente catalogados das províncias 1 (Pará) e 16 (Mato Grosso), os títulos da série nomeiam as 18 províncias do inventário de pesquisa.
- A folha 2–10 traz a designação “Rio Grande” sem qualificação. O catálogo não a converte automaticamente em Rio Grande do Norte; a identificação permanece pendente de inspeção do original e confronto documental.
- A folha 13–15 identifica São Paulo, Santa Catarina e São Pedro. “19” corresponde a ilhas, não a província; a República de Montevidéu aparece em quadro separado e não integra o território provincial brasileiro.
- As novas fichas foram incluídas em src/data/cartographicSources.ts; o painel do Atlas passa a apresentar onze registros cartográficos no total: cinco registros da série Schlieben, quatro folhas da carta oriental de 1831 e duas cartas de 1839.
- **Limite técnico:** títulos e registros de catálogo ainda não são linhas de limite verificadas. Nenhuma geometria foi criada. As folhas devem ser inspecionadas em alta resolução, com direitos de uso conferidos, antes de qualquer georreferenciamento.


## Inspeção de imagem e metadados — Stanford (13 de novembro de 2026)

- O navegador TinyFish inspecionou o registro persistente Stanford da folha meridional de Schlieben e consultou diretamente o manifesto IIIF e MODS.
- Correção: a folha individual é datada de **1826** pela Stanford, embora agregadores associem o conjunto do Atlas von Amerika a 1830 e a obra tenha sido publicada em partes entre 1825 e 1830. A data específica de cada folha deve prevalecer sobre a data genérica do atlas.
- Correção: Stanford informa **escala não determinada**. A escala 1:2.000.000 que aparece em Old Maps Online não foi confirmada para essa folha individual.
- Resolução disponível: 1690 × 2222 px; arquivo JP2 705 KB; dimensões físicas catalogadas 10 × 8 polegadas.
- Licença confirmada: CC BY-NC-SA 3.0, uso não comercial com atribuição e compartilhamento pela mesma licença. O painel agora expõe os links de imagem, arquivo e licença.
- Identificador persistente, manifesto IIIF e arquivo original digitalizado foram adicionados à ficha da fonte.
- A imagem ainda não foi georreferenciada nem usada para extrair limites. Nenhum polígono criado.


## Continuidade — cópias Stanford e correção de escala/data

- Foram localizadas cópias digitais institucionais adicionais Stanford para as folhas Schlieben do Pará (província 1) e Nordeste (províncias 2–10), ambas com PURL, manifesto IIIF, arquivo JP2, dimensões e licença.
- Os metadados Stanford datam essas folhas em 1826 e registram “Scale not determined”. A ficha meridional (13–15) também é de 1826 e tem escala não determinada. O catálogo do projeto foi corrigido para não aplicar a escala genérica de 1:2.000.000 a folhas para as quais o repositório primário não informa escala.
- A série de mapas está sendo tratada como uma sequência publicada em partes entre 1825 e 1830, e não como um conjunto de folhas todas necessariamente impressas no mesmo ano.
- As fichas das folhas 1, 2–10 e 13–15 agora têm acesso persistente Stanford, links IIIF/JP2 e licença CC BY-NC-SA 3.0. O uso não comercial exige atribuição e compartilhamento pela mesma licença.
- A identificação “Rio Grande” na folha 2–10 continua sem expansão automática para Rio Grande do Norte.


## Continuidade — inspeção visual de duas folhas Stanford (13 de novembro de 2026)

- O visualizador foi aberto para as folhas Schlieben 2–10 (Nordeste) e 1 (Pará/Rio Negro), ambas catalogadas pela Stanford como ca. 1826.
- Na folha Nordeste, o título e os rótulos provinciais são legíveis em zoom; linhas internas e rios aparecem, mas não há escala gráfica/legenda e a Stanford registra escala indeterminada. A identificação da unidade “Rio Grande” não foi fechada; o navegador sugeriu Rio Grande do Norte, mas o registro não explicita “do Norte”.
- Na folha Pará/Rio Negro, a imagem mostra a rede hidrográfica amazônica e referências a Pará, Rio Negro e províncias/territórios vizinhos, além de partes do que hoje são Colômbia e Peru. Linhas administrativas aparecem, mas não há escala determinada nem graticule claro.
- As duas folhas parecem legíveis o bastante para uma etapa futura de digitalização assistida, mas não foram aceitas para vetorização nem usadas para gerar polígonos. Sem escala, pontos de controle e documentação complementar, não é possível converter linhas da imagem em coordenadas confiáveis.
- A ficha do Pará foi atualizada com a cobertura da Comarca do Rio Negro e as limitações observadas.


## Continuidade — quatro folhas do mapa oriental de 1831 localizadas (13 de novembro de 2026)

- A busca no Acervo Instituto Moreira Salles confirmou os quatro registros individuais da carta de Eschwege, Martius e Schwarzmann: superior esquerda (89321), superior direita (89322), inferior direita (89323) e inferior esquerda (89324).
- As quatro folhas são de 1831, pertencem ao Atlas zur Reise in Brasilien e têm autoria, edição e imprenta identificadas. O IMS informa domínio público e download liberado, com citação de autores e acervo.
- As dimensões de suporte/mancha variam ligeiramente entre folhas; a composição final deve acomodar essas diferenças e possíveis deformações do papel.
- O catálogo técnico agora registra as quatro folhas separadamente, com links para visualização e download, direitos e limitações. O painel do Atlas lista cada uma.
- **Ainda não georreferenciadas:** a escala não foi informada nas fichas. O mosaico precisa ser alinhado, comparado por feições comuns e ajustado por pontos de controle com erro RMS documentado antes de qualquer extração de limites.


## Continuidade — metadados e acesso visual das cartas de 1839

- A ficha da Biblioteca Nacional Digital de Portugal confirma a carta de São Pedro de 1839, escala aproximada 1:700.000, autoria do levantamento por José Pedro César sob direção do Visconde de São Leopoldo, geógrafo Thunot Duvotenay e gravador Alexis Orgiazzi. A cota do exemplar digitalizado é C.C. 1791 A.
- A University of Pennsylvania oferece imagem direta da carta e registra a referência à Bibliothèque nationale de France.
- O IHGRGS confirmou o título e autoria do mapa de teatro da guerra de Nicolau Dreys (1839), com imagem digital acessível. A obra associada também foi conferida no catálogo BBM/USP; o PDF é de 57,84 MB e o registro mantém direitos reservados salvo indicação em contrário.
- O catálogo técnico agora tem **11 registros cartográficos**: seis registros/folhas da série Schlieben (incluindo três folhas Stanford de 1826 e uma folha regional ainda catalogada por agregadores); quatro folhas da carta oriental de 1831; carta provincial de São Pedro de 1839; e mapa temático de Dreys de 1839. (A contagem por fonte e por folha deve ser entendida conforme os itens cadastrados no código; o total exato é o comprimento do catálogo.)
- Imagens e downloads diretos foram adicionados ao painel quando o acervo os disponibiliza. Direitos são respeitados por registro: Stanford CC BY-NC-SA 3.0; IMS domínio público com atribuição; os demais exigem consulta aos termos do custodiante.


## Continuidade — leitura preliminar das quatro folhas do IMS

- A inspeção visual dos quatro registros do IMS confirmou que as folhas formam uma composição coerente do Brasil oriental, com continuidade geral de costa, rios e relevo.
- As prévias em resolução média não permitem ler com segurança os nomes provinciais, os valores de escala ou a legenda. Uma grade aparece em parte da folha superior direita; um bloco de escala/explicação aparece na inferior direita, mas seus valores não são legíveis na prévia.
- O IMS disponibiliza versões grandes para download em cada ficha. A extração de limites fica suspensa até examinar essas versões e fazer o encaixe das margens.
- Nenhum polígono foi gerado a partir das prévias. O catálogo mantém as quatro folhas como inspeção visual pendente.


## Continuidade — mesa interativa para composição cartográfica

- Criado `src/components/CartographicWorkbench.tsx` e integrado ao painel do Atlas.
- O usuário pode selecionar as quatro folhas do mapa de 1831, ver cada prévia e acessar a ficha e o download em alta resolução no IMS.
- A mesa mostra os metadados específicos da folha selecionada e deixa explícito que alinhamento e georreferenciamento continuam pendentes.
- CSS responsivo adicionado para seleção 2×2, prévia ampliada e ficha técnica.
- A interface não cria nem simula limites provinciais; prepara a inspeção das imagens originais.


## Atualização da mesa cartográfica — modos mosaico e inspeção

- A mesa das quatro folhas agora tem alternância entre mosaico de referência 2 × 2 e inspeção individual.
- As prévias preservam a proporção e deixam de ser cortadas para preencher miniaturas.
- Selecionar uma folha no mosaico abre sua inspeção; a inspeção permite alternar entre as quatro folhas, consultar metadados, ficha e link de download.
- O mosaico é explicitamente apresentado como disposição de referência, não como composição georreferenciada ou encaixe de pixels.
- A tentativa de verificar os quatro endpoints de download em alta resolução retornou `target_unreachable`; não se afirma que os arquivos grandes foram baixados.
