export const iconNames = [
  'database',
  'zap',
  'code-2',
  'file-spreadsheet',
  'check-circle-2',
  'search',
  'upload-cloud',
  'code',
  'building-2',
  'server',
  'workflow',
  'shield-check',
  'arrow-right',
  'check',
] as const;

export type IconName = (typeof iconNames)[number];
