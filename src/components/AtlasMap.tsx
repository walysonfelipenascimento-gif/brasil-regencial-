'use client';

import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export type AtlasEvent = {
  year: number;
  endYear?: number;
  title: string;
  place: string;
  category: string;
  text?: string;
  coordinates: [number, number];
};

type Props = { events: AtlasEvent[]; year: number; layers: string[] };

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character] ?? character);

export default function AtlasMap({ events, year, layers }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const markers = useRef<maplibregl.Marker[]>([]);

  useEffect(() => {
    if (!host.current || map.current) return;

    const instance = new maplibregl.Map({
      container: host.current,
      center: [-52, -13],
      zoom: 3.25,
      minZoom: 2.5,
      maxZoom: 9,
      maxBounds: [[-82, -40], [-30, 15]],
      attributionControl: {},
      style: {
        version: 8,
        sources: {
          osm: {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '© OpenStreetMap contributors'
          }
        },
        layers: [{
          id: 'osm-raster',
          type: 'raster',
          source: 'osm',
          paint: {
            'raster-saturation': -0.65,
            'raster-contrast': 0.12,
            'raster-brightness-max': 0.82
          }
        }]
      }
    });

    instance.addControl(new maplibregl.NavigationControl({ showCompass: true }), 'top-right');
    map.current = instance;

    return () => {
      markers.current.forEach(marker => marker.remove());
      markers.current = [];
      instance.remove();
      map.current = null;
    };
  }, []);

  useEffect(() => {
    const instance = map.current;
    if (!instance) return;

    markers.current.forEach(marker => marker.remove());
    markers.current = [];

    const filteredEvents = events.filter(event => event.year <= year && layers.includes(event.category));
    const grouped = new Map<string, AtlasEvent[]>();
    filteredEvents.forEach(event => {
      // Agrupar apenas coordenadas idênticas; proximidade não prova que dois registros
      // pertencem à mesma localidade ou ao mesmo ponto histórico.
      const key = event.coordinates.join(',');
      const group = grouped.get(key) ?? [];
      group.push(event);
      grouped.set(key, group);
    });

    grouped.forEach(group => {
      const [longitude, latitude] = group[0].coordinates;
      const hasRevolt = group.some(event => event.category === 'Revoltas');
      const hasOngoing = group.some(event => typeof event.endYear === 'number' && event.year <= year && event.endYear >= year);
      const allPast = group.every(event => event.year < year && !(typeof event.endYear === 'number' && event.endYear >= year));
      const statusLabel = hasOngoing
        ? 'inclui movimento em curso no ano selecionado'
        : allPast
          ? 'registros anteriores ao ano selecionado'
          : 'inclui acontecimento do ano selecionado';
      const element = document.createElement('button');
      element.type = 'button';
      element.className = 'atlasMarker ' +
        (hasRevolt ? 'atlasMarker--revolt' : 'atlasMarker--politics') +
        (hasOngoing ? ' atlasMarker--ongoing' : allPast ? ' atlasMarker--past' : '') +
        (group.length > 1 ? ' atlasMarker--group' : '');
      element.setAttribute(
        'aria-label',
        'Abrir ' + group.length + ' registro(s) em ' + group[0].place + '; ' + statusLabel
      );
      element.innerHTML = group.length > 1 ? '<span>' + group.length + '</span>' : '<span></span>';

      const popupItems = group
        .slice()
        .sort((a, b) => a.year - b.year || a.title.localeCompare(b.title, 'pt-BR'))
        .map(event => {
          const isOngoing = typeof event.endYear === 'number' && event.year <= year && event.endYear >= year;
          const isPast = event.year < year && !isOngoing;
          const eventStatus = isOngoing
            ? 'Movimento em curso no ano selecionado'
            : isPast
              ? 'Registro anterior ao ano selecionado'
              : 'Acontecimento do ano selecionado';
          const description = event.text
            ? '<p class="eventPopupText">' + escapeHtml(event.text) + '</p>'
            : '';
          return '<article class="eventPopupItem">' +
            '<small class="eventPopupMeta">' + escapeHtml(event.endYear ? event.year + '–' + event.endYear : String(event.year)) +
              ' · ' + escapeHtml(event.category) + '</small>' +
            '<strong class="eventPopupTitle">' + escapeHtml(event.title) + '</strong>' +
            '<p class="eventPopupPlace">' + escapeHtml(event.place) + '</p>' +
            description +
            '<small class="eventPopupStatus">' + eventStatus + '</small>' +
            '</article>';
        }).join('<div class="eventPopupDivider"></div>');
      const popupContent =
        '<div class="eventPopup eventPopupGroup">' + popupItems +
          '<small class="eventPopupNote">Ponto aproximado de referência da localidade; não indica extensão territorial.</small>' +
        '</div>';

      const popup = new maplibregl.Popup({ offset: 18, closeButton: true, maxWidth: '330px' })
        .setHTML(popupContent);

      markers.current.push(
        new maplibregl.Marker({ element, anchor: 'center' })
          .setLngLat([longitude, latitude])
          .setPopup(popup)
          .addTo(instance)
      );
    });
  }, [events, year, layers]);

  return (
    <div className="atlasMapRoot">
      <div
        ref={host}
        className="atlasMap"
        role="region"
        aria-label="Mapa de referência do Brasil com acontecimentos históricos geolocalizados"
      />
      <div className="mapContextLabel">
        BASE CONTEMPORÂNEA DE REFERÊNCIA · EVENTOS 1831–1840
      </div>
    </div>
  );
}
