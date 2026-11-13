# Contrato de dados — fronteiras provinciais históricas

## Objetivo

Este contrato define o que o atlas aceita como geometria provincial do intervalo 1831–1840. Ele não contém nem inventa fronteiras. A coleção inicial em `src/data/historicalBoundaries.ts` permanece vazia até que cartas históricas identificáveis sejam localizadas, catalogadas e georreferenciadas.

## Requisitos de cada feição

- Identificador e denominação histórica da unidade.
- Intervalo de validade explícito (início inclusivo e fim exclusivo).
- Identificador e URL da fonte primária/cartográfica.
- Data da carta e escala, quando disponíveis.
- Método de georreferenciamento e quantidade de pontos de controle.
- Erro RMS, quando calculável, e nota de incerteza.
- Grau de confiança e revisão especializada registrada.

## Regras editoriais e cartográficas

1. Não converter limites estaduais atuais em limites provinciais oitocentistas.
2. Não usar uma única carta como se representasse automaticamente todos os anos de 1831 a 1840.
3. Mudanças e divergências entre cartas devem gerar versões temporais distintas.
4. A geometria não deve ser publicada se a fonte, a data ou o método não puderem ser rastreados.
5. Uma feição de baixa confiança exige explicação visível da incerteza.
6. A coleção vazia é um estado válido e preferível a uma reconstrução sem evidência.

## Situação em 6 de novembro de 2026

- Inventário administrativo preliminar: 18 unidades.
- Cartas específicas catalogadas com referência permanente: nenhuma confirmada neste repositório.
- Geometrias provinciais validadas: nenhuma.
- Coleção GeoJSON: vazia intencionalmente.
- Próximo bloqueio real: localizar e fichar cartas históricas, comparar datas/versões e somente então georreferenciar.


## Registro de pontos de controle para georreferenciamento

Criado `src/data/cartographicControlPoints.ts` com tipo explícito e validador defensivo para pontos de controle. Cada registro exige identificação da folha e da fonte, descrição do detalhe reconhecido, pixel na imagem original, coordenadas WGS84/EPSG:4326, fonte da coordenada, método de identificação, confiança e revisores. Incerteza métrica é opcional quando ainda não mensurável; pontos de baixa confiança exigem nota explicativa.

A coleção `cartographicControlPoints` permanece vazia. O validador verifica formato e faixas de coordenadas, mas não prova que o ponto foi identificado corretamente nem calcula erro de transformação. A coleta real depende dos arquivos grandes do IMS e de conferência independente.


## Ajuste afim e controle de qualidade

A função `calculateAffineFit` implementa ajuste afim por mínimos quadrados, convertendo longitude/latitude para um plano local em metros centrado na média dos pontos. O resultado inclui coeficientes, resíduos por ponto, RMS interno e maior resíduo.

- Exige pelo menos quatro pontos revisados, com confiança alta ou média.
- Rejeita identificadores duplicados e configurações colineares/mal condicionadas.
- O RMS calculado é erro interno do ajuste, não uma medida independente de precisão geográfica.
- O plano local equiretangular é uma aproximação adequada apenas para áreas regionais; cartas extensas ou projeções históricas exigem tratamento cartográfico específico.
- O ajuste afim não corrige deformações locais do papel, digitalização ou projeção desconhecida.
- Nenhum limiar universal de RMS foi definido: aceitação depende da escala, resolução, distribuição espacial dos pontos e finalidade da camada.
- A coleção segue vazia enquanto as imagens originais e as coordenadas de referência não puderem ser verificadas.


## Validação independente (leave-one-out)

A função `validateAffineIndependently` implementa validação cruzada leave-one-out. Em cada rodada, um ponto é retirado, a transformação é recalculada com os demais e a coordenada prevista para o ponto excluído é comparada à coordenada de referência. O relatório inclui erro médio e máximo por ponto.

São exigidos pelo menos cinco pontos revisados para manter quatro no ajuste de cada rodada. Esta validação é mais informativa que o RMS interno, mas ainda depende da qualidade das coordenadas de referência, da distribuição dos pontos e da adequação do modelo afim. Não substitui pontos de verificação externos independentes nem revisão cartográfica.


## Conversão de traçado em GeoJSON

A função `createGeoreferencedPolygon` converte anéis digitalizados em pixels para coordenadas WGS84 usando o ajuste afim e produz uma feição GeoJSON com metadados de fonte, folha, quantidade de pontos, RMS interno e erros leave-one-out.

Condições de segurança cartográfica:
- Os vértices precisam ser traçados manualmente a partir da carta; a função não adivinha nem gera limites.
- Todos os pontos de controle devem pertencer à mesma fonte e à mesma folha.
- Os anéis devem conter ao menos quatro vértices e estar fechados.
- O responsável precisa informar um limite máximo de erro independente, positivo e justificado pela escala e finalidade.
- A exportação é bloqueada se a validação leave-one-out exceder esse limite.
- A confiança é classificada como alta ou média apenas segundo a relação entre o erro independente e o limite definido; revisão histórica e topológica continuam obrigatórias.

A função exporta apenas um Polygon por chamada. Para feições multipartes, cada parte deve ser processada e revisada separadamente antes de compor um MultiPolygon. A saída ainda não é automaticamente publicada no atlas: deve passar pelo contrato de fronteiras históricas, revisão temporal, conferência de topologia e aprovação editorial.


## Validação estrutural e topológica automatizada

A validação de fronteiras agora verifica, além da estrutura GeoJSON e das faixas WGS84:

- fechamento dos anéis e ao menos três vértices distintos;
- área diferente de zero;
- auto-interseções entre segmentos não adjacentes;
- contenção dos anéis internos no anel externo;
- cruzamentos e sobreposições entre anéis internos.

Essas verificações são triagem computacional, não certificação cartográfica. A implementação usa testes geométricos planares sobre longitude/latitude e deve ser tratada com cautela em geometrias que cruzem a antimeridiana ou áreas muito extensas. A validação de sobreposição entre partes diferentes de um MultiPolygon e a conferência de fronteiras com cartas originais continuam dependentes de revisão especializada.

A publicação exige pelo menos cinco pontos de controle, compatíveis com a validação independente leave-one-out. O intervalo temporal segue a convenção início inclusivo/fim exclusivo; a seleção anual inclui apenas feições cujo intervalo intersecta o ano consultado.
