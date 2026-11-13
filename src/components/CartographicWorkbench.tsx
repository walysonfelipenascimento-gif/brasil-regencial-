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
              {selected.downloadUrl && <a href={selected.downloadUrl} target="_blank" rel="noreferrer">Baixar versão grande ↗</a>}
            </div>
          </div>
        </div>
      )}

      <div className="workbenchLegend">
        <span><i className="legendSheetDot" /> Folha selecionada</span>
        <span>As miniaturas preservam a proporção; não representam alinhamento geográfico calculado.</span>
      </div>
      <p className="workbenchNotice">
        Estado do trabalho: quatro folhas catalogadas e exibidas em sua disposição de referência.
        O encaixe físico, a escala e o georreferenciamento ainda precisam ser medidos com os arquivos grandes.
        Nenhum limite provincial é inferido a partir destas prévias.
      </p>
    </section>
  );
}
