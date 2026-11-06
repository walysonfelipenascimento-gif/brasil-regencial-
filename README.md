# Brasil Regencial

**Um território, muitas histórias.**

Aplicação independente para explorar o Brasil durante o Período Regencial (1831–1840).

## Estado desta entrega

Primeiro pacote de produção do frontend: identidade visual inicial, navegação interativa, página principal, protótipo de atlas com filtros/camadas e linha do tempo inicial.

Ainda NÃO estão implementados:
- Cartografia provincial georreferenciada e validada.
- Motor de mapa MapLibre e visualização Cesium 3D.
- Banco de dados e autenticação.
- Museu com objetos digitais reais.
- Filme cinematográfico final de cinco minutos.
- Streaming HLS e armazenamento audiovisual.

A interface não apresenta mapas ilustrativos como fronteiras históricas verificadas.

## Requisitos

- Node.js 20.9 ou superior
- npm

## Executar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Arquitetura inicial

- Next.js + React + TypeScript
- CSS próprio para identidade visual
- Dados cronológicos iniciais locais
- Sem dependência do Supabase
- Sem credenciais ou recursos da Nexora

## Próximas entregas técnicas

1. Validar build e testes automatizados.
2. Adicionar MapLibre e ingestão de dados cartográficos com proveniência.
3. Criar esquema PostGIS independente somente se necessário e aprovado.
4. Implementar catálogo histórico e registro de fontes.
5. Produzir o filme em pipeline audiovisual separado.
6. Configurar hospedagem independente.

## Integridade histórica

Os textos iniciais são introdutórios e precisam de revisão historiográfica e fontes bibliográficas antes da publicação definitiva. O mapa atual é uma área de interface, não uma representação cartográfica do Brasil de 1831–1840.