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
  const selected = sheets.find(sheet => sheet?.id === selectedId) ?? sheets[0];

  if (!selected) return null;

  return (
    <section className="cartographyWorkbench" aria-labelledby="cartographyWorkbenchTitle">
      <div className="workbenchHeading">
        <div>
          <span className="workbenchKicker">MESA DE CARTOGRAFIA · 1831</span>
          <h3 id="cartographyWorkbenchTitle">Composição das quatro folhas</h3>
          <p>Selecione uma folha para examinar a prévia e abrir o arquivo em resolução maior no acervo.</p>
        </div>
        <span className="workbenchCount">04 FOLHAS</span>
      </div>

      <div className="sheetGrid" aria-label="Seleção das quatro folhas do mapa">
        {sheets.map((sheet, index) => sheet && (
          <button
            className={`sheetTile ${selectedId === sheet.id ? 'sheetTileActive' : ''}`}
            key={sheet.id}
            type="button"
            onClick={() => setSelectedId(sheet.id)}
            aria-pressed={selectedId === sheet.id}
            aria-label={`Selecionar folha ${positions[index]}`}
          >
            {sheet.imageUrl ? (
              <span
                className="sheetTileImage"
                role="img"
                aria-label={`Prévia da folha ${positions[index]}`}
                style={{ backgroundImage: `url("${sheet.imageUrl}")` }}
              />
            ) : <span className="sheetTilePlaceholder">Imagem não disponível</span>}
            <span className="sheetTileLabel">{positions[index]}</span>
          </button>
        ))}
      </div>

      <div className="selectedSheet">
        {selected.imageUrl && (
          <a className="selectedSheetPreview" href={selected.imageUrl} target="_blank" rel="noreferrer" aria-label="Abrir prévia da folha em nova aba">
            <span role="img" aria-label={selected.title} style={{ backgroundImage: `url("${selected.imageUrl}")` }} />
            <small>ABRIR PRÉVIA</small>
          </a>
        )}
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

      <p className="workbenchNotice">
        Estado do trabalho: folhas identificadas, alinhamento físico e georreferenciamento ainda pendentes.
        As prévias não são fronteiras vetoriais e não devem ser usadas como coordenadas.
      </p>
    </section>
  );
}
