'use client';

import { useMemo, useState } from 'react';
import { cartographicSources } from '@/data/cartographicSources';

const sheetIds = [
  'martius-eschwege-east-brazil-1831',
  'martius-eschwege-east-brazil-1831-upper-right',
  'martius-eschwege-east-brazil-1831-lower-left',
  'martius-eschwege-east-brazil-1831-lower-right'
];

const positions = ['Superior esquerda', 'Superior direita', 'Inferior esquerda', 'Inferior direita'];

export default function CartographicWorkbench() {
  const sheets = useMemo(
    () => sheetIds.map(id => cartographicSources.find(source => source.id === id)).filter(Boolean),
    []
  );
  const [selectedId, setSelectedId] = useState(sheetIds[0]);
  const [view, setView] = useState<'mosaic' | 'detail'>('mosaic');
  const selected = sheets.find(sheet => sheet?.id === selectedId) ?? sheets[0];

  if (!selected || sheets.length !== 4) return null;

  return (
    <section className="cartographyWorkbench" aria-labelledby="cartographyWorkbenchTitle">
      <div className="workbenchHeading">
        <div>
          <span className="workbenchKicker">MESA DE CARTOGRAFIA · 1831</span>
          <h3 id="cartographyWorkbenchTitle">Composição das quatro folhas</h3>
          <p>Visualize a disposição original, selecione uma folha e consulte a ficha e o arquivo em alta resolução no acervo.</p>
        </div>
        <span className="workbenchCount">04 FOLHAS</span>
      </div>

      <div className="workbenchToolbar" role="group" aria-label="Modo de visualização">
        <button type="button" className={view === 'mosaic' ? 'workbenchTab workbenchTabActive' : 'workbenchTab'} onClick={() => setView('mosaic')} aria-pressed={view === 'mosaic'}>Mosaico 2 × 2</button>
        <button type="button" className={view === 'detail' ? 'workbenchTab workbenchTabActive' : 'workbenchTab'} onClick={() => setView('detail')} aria-pressed={view === 'detail'}>Inspecionar folha</button>
      </div>

      {view === 'mosaic' ? (
        <div className="sheetMosaic" aria-label="Composição de referência das quatro folhas do mapa de 1831">
          {sheets.map((sheet, index) => sheet && (
            <button
              className={`mosaicSheet ${selectedId === sheet.id ? 'mosaicSheetActive' : ''}`}
              key={sheet.id}
              type="button"
              onClick={() => { setSelectedId(sheet.id); setView('detail'); }}
              aria-pressed={selectedId === sheet.id}
              aria-label={`Inspecionar folha ${positions[index]}`}
            >
              {sheet.imageUrl ? <span className="mosaicSheetImage" style={{ backgroundImage: `url("${sheet.imageUrl}")` }} /> : <span className="sheetTilePlaceholder">Imagem não disponível</span>}
              <span className="mosaicSheetCaption"><b>{positions[index]}</b><small>1831 · IMS</small></span>
            </button>
          ))}
        </div>
      ) : (
        <div className="selectedSheet">
          <div className="selectedSheetPreviewWrap">
            {selected.imageUrl && (
              <a className="selectedSheetPreview" href={selected.imageUrl} target="_blank" rel="noreferrer" aria-label="Abrir prévia em tamanho original em nova aba">
                <span role="img" aria-label={selected.title} style={{ backgroundImage: `url("${selected.imageUrl}")` }} />
                <small>ABRIR PRÉVIA ↗</small>
              </a>
            )}
            <div className="sheetPicker" aria-label="Selecionar folha para inspeção">
              {sheets.map((sheet, index) => sheet && (
                <button key={sheet.id} type="button" onClick={() => setSelectedId(sheet.id)} className={selectedId === sheet.id ? 'sheetPickerButton sheetPickerButtonActive' : 'sheetPickerButton'} aria-pressed={selectedId === sheet.id}>
                  {positions[index]}
                </button>
              ))}
            </div>
          </div>
          <div className="selectedSheetInfo">
            <span className="selectedSheetYear">{selected.year} · {positions[sheetIds.indexOf(selected.id)]}</span>
            <h4>{selected.title}</h4>
            <p>{selected.coverage}</p>
            <dl>
              <div><dt>Escala</dt><dd>{selected.scale ?? 'Não informada no registro'}</dd></div>
              <div><dt>Dimensões e técnica</dt><dd>{selected.format}</dd></div>
              <div><dt>Direitos</dt><dd>{selected.rights}</dd></div>
            </dl>
            <div className="selectedSheetActions">
              <a href={selected.url} target="_blank" rel="noreferrer">Ficha do acervo ↗</a>
              {selected.downloadUrl && <a href={selected.downloadUrl} target="_blank" rel="noreferrer">Baixar arquivo do acervo ↗</a>}
              {selected.highResolutionUrl && <a href={selected.highResolutionUrl} target="_blank" rel="noreferrer">Abrir imagem em alta resolução ↗</a>}
            </div>
          </div>
        </div>
      )}

      <div className="workbenchLegend">
        <span><i className="legendSheetDot" /> Folha selecionada</span>
        <span>As miniaturas preservam a proporção; não representam alinhamento geográfico calculado.</span>
      </div>
      <div className="controlPointPanel">
        <div className="controlPointPanelHead">
          <div><span className="workbenchKicker">PRÓXIMO PROCESSO TÉCNICO</span><h4>Pontos de controle geográficos</h4></div>
          <span className="controlPointCount">0 PONTOS VALIDOS</span>
        </div>
        <p>O registro técnico já está preparado. Cada ponto deverá ligar um detalhe identificável da carta a uma coordenada moderna documentada.</p>
        <ol className="controlPointSteps">
          <li><b>Identificar</b><span>Confluências, igrejas, núcleos urbanos ou marcos reconhecíveis.</span></li>
          <li><b>Registrar</b><span>Pixel na imagem original, coordenada, fonte e método de identificação.</span></li>
          <li><b>Revisar</b><span>Conferir a correspondência e anotar a incerteza antes de usar o ponto.</span></li>
        </ol>
        <small>Nenhum ponto foi inventado. A coleta começa após acesso às imagens originais em resolução suficiente.</small>
        <div className="controlPointMethod"><b>Motor de georreferenciamento preparado</b><span>Ajuste afim por mínimos quadrados · resíduos por ponto · RMS interno · rejeição de pontos colineares. O RMS não substitui validação independente. Também foi preparado o teste leave-one-out (mínimo de 5 pontos) e a exportação GeoJSON de polígonos traçados manualmente, bloqueada quando o erro independente ultrapassa o limite documentado.</span></div>
      </div>
      <p className="workbenchNotice">
        Conferência catalográfica: as fichas IMS 89321–89324 descrevem quatro folhas de uma carta datada de 1831. Ressalva crítica: a inspeção automatizada do arquivo grande associado à folha 89321 leu uma data impressa possivelmente de 1834 e créditos parcialmente diferentes. Essa leitura ainda não foi confirmada por revisão humana nem esclarecida pelo IMS; por isso, a edição/representação não está materialmente validada. Grade, escala, encaixe e pontos de controle continuam pendentes. Nenhum ponto foi cadastrado e nenhum limite provincial foi georreferenciado.
      </p>
    </section>
  );
}
