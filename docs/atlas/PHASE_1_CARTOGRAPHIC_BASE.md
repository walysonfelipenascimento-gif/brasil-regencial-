# Atlas histórico — Etapa 1: base cartográfica funcional

## Entrega desta etapa

- Motor cartográfico web: MapLibre GL JS.
- Mapa-base de referência: tiles raster do OpenStreetMap.
- Controles de navegação e aproximação.
- Marcadores de acontecimentos com ano, local e categoria.
- Filtro temporal (1831–1840) e camadas temáticas já presentes na interface.
- Atribuição visível ao OpenStreetMap.

## Limite histórico explícito

O mapa-base do OpenStreetMap representa a geografia contemporânea. Ele serve somente como referência espacial para localizar acontecimentos. Não representa fronteiras, nomes administrativos ou divisão provincial do Império do Brasil na Regência.

Nenhum polígono provincial foi desenhado nesta entrega. A camada provincial histórica permanece bloqueada até que cada geometria tenha fonte identificada, data de referência, escala/resolução, método de georreferenciamento, licença e revisão historiográfica.

## Pontos atualmente cadastrados

As coordenadas abaixo são pontos de referência urbanos aproximados, não coordenadas de limites históricos nem indicação de que todo o acontecimento ocorreu exatamente naquele ponto.

| Acontecimento | Ano | Ponto de referência | Coordenadas aproximadas | Observação |
|---|---:|---|---|---|
| Abdicação de Dom Pedro I | 1831 | Rio de Janeiro | -22.9068, -43.1729 | Cidade associada ao ato político |
| Ato Adicional | 1834 | Rio de Janeiro | -22.9068, -43.1729 | Referência à sede do governo imperial |
| Cabanagem | 1835 | Belém | -1.4558, -48.5039 | A revolta teve área de atuação mais ampla |
| Revolta dos Malês | 1835 | Salvador | -12.9777, -38.5016 | Localização urbana de referência |
| Sabinada | 1837 | Salvador | -12.9777, -38.5016 | Localização urbana de referência |
| Balaiada | 1838 | Região de Caxias, Maranhão | -4.8589, -43.3558 | Movimento com área de atuação regional |

## Critérios para publicar as províncias históricas

Cada unidade territorial deverá ter:
1. Nome histórico e variantes documentadas.
2. Vigência temporal: início e fim da validade da geometria.
3. Fonte cartográfica primária ou estudo acadêmico identificável.
4. Escala original e precisão posicional estimada.
5. Método de georreferenciamento e sistema de coordenadas.
6. Licença e condições de reutilização.
7. Registro de incertezas e divergências entre fontes.
8. Revisão independente antes de entrar na camada pública.

## Fontes e proveniência técnica

- OpenStreetMap: https://www.openstreetmap.org/copyright — base contemporânea, com atribuição ODbL.
- IBGE — Biblioteca e Mapoteca: https://biblioteca.ibge.gov.br/ — instituição de referência para pesquisa cartográfica; cada mapa histórico utilizado deverá ser catalogado individualmente.
- Biblioteca Nacional — Hemeroteca Digital: https://bndigital.bn.gov.br/hemeroteca-digital/ — fonte de imprensa histórica para contextualização, não substitui por si só a fonte geométrica de fronteiras.
- Arquivo Nacional: https://www.gov.br/arquivonacional/pt-br — pesquisa documental e descrição arquivística.

## Próximo trabalho da Etapa 1

Localizar e comparar cartas históricas do Império próximas a 1831–1840, selecionar uma fonte cartográfica adequada, registrar sua licença e avaliar o georreferenciamento. Só então produzir e validar os polígonos provinciais em GeoJSON/TopoJSON.
