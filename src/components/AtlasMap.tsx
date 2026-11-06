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

    events
      .filter(event => event.year <= year && layers.includes(event.category))
      .forEach(event => {
        const element = document.createElement('button');
        element.type = 'button';
        element.className = 'atlasMarker';
        element.setAttribute('aria-label', 'Abrir acontecimento: ' + event.title);
        element.innerHTML = '<span></span>';

        const description = event.text
          ? '<p class="eventPopupText">' + escapeHtml(event.text) + '</p>'
          : '';
        const popupContent =
          '<div class="eventPopup">' +
            '<small class="eventPopupMeta">' + escapeHtml(event.endYear ? event.year + '–' + event.endYear : String(event.year)) +
              ' · ' + escapeHtml(event.category) + '</small>' +
            '<strong class="eventPopupTitle">' + escapeHtml(event.title) + '</strong>' +
            '<p class="eventPopupPlace">' + escapeHtml(event.place) + '</p>' +
            description +
            '<small class="eventPopupNote">Localização aproximada de referência; não indica extensão territorial.</small>' +
          '</div>';

        const popup = new maplibregl.Popup({ offset: 18, closeButton: true, maxWidth: '310px' })
          .setHTML(popupContent);

        markers.current.push(
          new maplibregl.Marker({ element, anchor: 'center' })
            .setLngLat(event.coordinates)
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
