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
