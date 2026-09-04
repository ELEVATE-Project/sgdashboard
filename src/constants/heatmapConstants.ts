export interface HeatmapThemeColor {
  background: string;
  active: string;
}

export const HEATMAP_TEXT = {
  themesTitle: 'Themes beneath the voices',
  voicesTitle: 'What we are hearing',
  themeSelectorLabel: 'Select a theme',
  voicesRaisedSuffix: 'Voices raised',
  quoteIconSrc: '/assets/icons/quote.png',
  quoteIconAlt: 'Quotation mark icon',
};

export const DEFAULT_THEME_COLORS: HeatmapThemeColor[] = [
  { background: '#9569ce', active: '#572e91' },
  { background: '#ad91bf', active: '#8f6aa8' },
  { background: '#be7666', active: '#961c00' },
  { background: '#709dd7', active: '#1177ff' },
  { background: '#dd8cb5', active: '#e03389' },
  { background: '#c2d9ad', active: '#90b36c' },
  { background: '#94d6dc', active: '#4fb5bf' },
  { background: '#9368ce', active: '#6d42ad' },
  { background: '#a98aba', active: '#8f6aa8' },
  { background: '#edc585', active: '#e3a94e' },
  { background: '#ddd3a9', active: '#c6b86e' },
  { background: '#d5b4a9', active: '#c18f80' },
  { background: '#e46c88', active: '#d94062' },
  { background: '#c77db4', active: '#ad5c9a' },
];

export const THEME_CLASS_COLORS: Record<string, HeatmapThemeColor> = {
  purple: { background: '#572E9199', active: '#572E91' },
  'light-purple': { background: '#572E9199', active: '#802B80' },
  brown: { background: '#961C0080', active: '#D94D3F' },
  'brown-light': { background: '#CA7862CC', active: '#CA7862' },
  blue: { background: '#64b5f6', active: '#64b5f6' },
  pink: { background: '#E0338A99', active: '#E0338A' },
  green: { background: '#8DC162CC', active: '#90db52cc' },
  cyan: { background: '#4dd0e1', active: '#4dd0e1' },
  orange: { background: '#FF9911CC', active: '#FF9911' },
  beige: { background: '#E2C968', active: '#f2d14c' },
  grey: { background: '#bdbdbd', active: '#bdbdbd' },
};
