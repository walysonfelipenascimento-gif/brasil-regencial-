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
