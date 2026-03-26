import { IconName } from './icon.types';

export interface IconShape {
  tag: 'path' | 'circle' | 'ellipse' | 'rect';
  attrs: Record<string, string>;
}

export const ICON_PATHS: Record<IconName, IconShape[]> = {
  database: [
    { tag: 'ellipse', attrs: { cx: '12', cy: '5', rx: '7', ry: '3' } },
    { tag: 'path', attrs: { d: 'M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5' } },
    { tag: 'path', attrs: { d: 'M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7' } },
  ],
  zap: [{ tag: 'path', attrs: { d: 'M13 2 4 14h6l-1 8 9-12h-6l1-8Z' } }],
  'code-2': [
    { tag: 'path', attrs: { d: 'm9 18-6-6 6-6' } },
    { tag: 'path', attrs: { d: 'm15 6 6 6-6 6' } },
    { tag: 'path', attrs: { d: 'm14 4-4 16' } },
  ],
  'file-spreadsheet': [
    { tag: 'path', attrs: { d: 'M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z' } },
    { tag: 'path', attrs: { d: 'M14 3v6h6' } },
    { tag: 'path', attrs: { d: 'M8 13h8' } },
    { tag: 'path', attrs: { d: 'M8 17h8' } },
    { tag: 'path', attrs: { d: 'M8 9h1' } },
    { tag: 'path', attrs: { d: 'M12 9h1' } },
    { tag: 'path', attrs: { d: 'M16 9h1' } },
  ],
  'check-circle-2': [
    { tag: 'circle', attrs: { cx: '12', cy: '12', r: '10' } },
    { tag: 'path', attrs: { d: 'm9 12 2 2 4-4' } },
  ],
  search: [
    { tag: 'circle', attrs: { cx: '11', cy: '11', r: '7' } },
    { tag: 'path', attrs: { d: 'm21 21-4.35-4.35' } },
  ],
  'upload-cloud': [
    { tag: 'path', attrs: { d: 'M12 13v8' } },
    { tag: 'path', attrs: { d: 'm8 17 4-4 4 4' } },
    { tag: 'path', attrs: { d: 'M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25' } },
  ],
  code: [
    { tag: 'path', attrs: { d: 'm16 18 6-6-6-6' } },
    { tag: 'path', attrs: { d: 'm8 6-6 6 6 6' } },
  ],
  'building-2': [
    { tag: 'path', attrs: { d: 'M6 22V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v18' } },
    { tag: 'path', attrs: { d: 'M2 22h20' } },
    { tag: 'path', attrs: { d: 'M10 6h4' } },
    { tag: 'path', attrs: { d: 'M10 10h4' } },
    { tag: 'path', attrs: { d: 'M10 14h4' } },
    { tag: 'path', attrs: { d: 'M10 18h4' } },
  ],
  server: [
    { tag: 'rect', attrs: { x: '3', y: '4', width: '18', height: '6', rx: '2' } },
    { tag: 'rect', attrs: { x: '3', y: '14', width: '18', height: '6', rx: '2' } },
    { tag: 'path', attrs: { d: 'M7 7h.01' } },
    { tag: 'path', attrs: { d: 'M7 17h.01' } },
  ],
  workflow: [
    { tag: 'rect', attrs: { x: '3', y: '9', width: '6', height: '6', rx: '1' } },
    { tag: 'rect', attrs: { x: '15', y: '9', width: '6', height: '6', rx: '1' } },
    { tag: 'path', attrs: { d: 'M6 9V3' } },
    { tag: 'path', attrs: { d: 'M18 21v-6' } },
    { tag: 'path', attrs: { d: 'M18 9V3' } },
    { tag: 'path', attrs: { d: 'M6 21v-6' } },
  ],
  'shield-check': [
    { tag: 'path', attrs: { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10' } },
    { tag: 'path', attrs: { d: 'm9 12 2 2 4-4' } },
  ],
  'arrow-right': [
    { tag: 'path', attrs: { d: 'M5 12h14' } },
    { tag: 'path', attrs: { d: 'm13 5 7 7-7 7' } },
  ],
  check: [{ tag: 'path', attrs: { d: 'm5 12 5 5L20 7' } }],
};
