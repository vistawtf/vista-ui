/**
 * Vista Design Tokens — v2
 *
 * These mirror the CSS custom properties in styles.css.
 * Use them for programmatic access to the design system values.
 */

export const colors = {
  // Neutrals
  vistaBlack: 'var(--vista-black)',
  vistaLight: 'var(--vista-light)',
  ultraGray: 'var(--ultra-gray)',
  idleGray: 'var(--idle-gray)',
  mediumGray: 'var(--medium-gray)',
  lightGray: 'var(--light-gray)',
  background: 'var(--background)',
  cardBg: 'var(--card-bg)',

  // Primary
  ultraOrange: 'var(--ultra-orange)',
  mediumOrange: 'var(--medium-orange)',
  lightOrange: 'var(--light-orange)',

  // Secondary (badges/states only)
  ultraBlue: 'var(--ultra-blue)',
  mediumBlue: 'var(--medium-blue)',
  lightBlue: 'var(--light-blue)',
  ultraPurple: 'var(--ultra-purple)',
  mediumPurple: 'var(--medium-purple)',
  lightPurple: 'var(--light-purple)',
  mediumLime: 'var(--medium-lime)',
  lightLime: 'var(--light-lime)',

  // Text hierarchy
  textPrimary: 'var(--text-primary)',
  textSecondary: 'var(--text-secondary)',
  textMuted: 'var(--text-muted)',
  textDisabled: 'var(--text-disabled)',

  // Borders
  border: 'var(--border)',
  borderHover: 'var(--border-hover)',
} as const;

export const colorValues = {
  // Neutrals
  vistaBlack: '#111111',
  vistaLight: '#E4E2D8',
  ultraGray: '#191919',
  idleGray: '#2D2D2D',
  mediumGray: '#575757',
  lightGray: '#999999',
  background: '#FAFAFA',
  cardBg: '#F2F2F2',

  // Primary
  ultraOrange: '#FF5233',
  mediumOrange: '#FF7043',
  lightOrange: '#FF8A65',

  // Secondary
  ultraBlue: '#2962FF',
  mediumBlue: '#448AFF',
  lightBlue: '#90CAF9',
  ultraPurple: '#BA68C8',
  mediumPurple: '#EA80FC',
  lightPurple: '#CE93D8',
  mediumLime: '#B2FF59',
  lightLime: '#C5E1A5',

  // Text
  textPrimary: '#111111',
  textSecondary: '#444444',
  textMuted: '#888888',
  textDisabled: '#BBBBBB',

  // Borders
  border: 'rgba(0,0,0,0.08)',
  borderHover: 'rgba(0,0,0,0.14)',
} as const;

export const spacing = {
  1: '4px',   // --sp-1
  2: '8px',   // --sp-2
  3: '12px',  // --sp-3
  4: '16px',  // --sp-4
  5: '24px',  // --sp-5
  6: '40px',  // --sp-6
  7: '64px',  // --sp-7
  8: '96px',  // --sp-8
} as const;

export const radii = {
  button: '3px',
  card: '3px',
  input: '3px',
  badge: '3px',
} as const;

export const transitions = {
  default: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
  slow: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
  fast: 'all 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
  easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
} as const;

export const typography = {
  fontSans: 'var(--font-sans)',
  fontMono: 'var(--font-mono)',
  fontSerif: 'var(--font-serif)',

  display: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 500,
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
  },
  h1: {
    fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
  },
  h2: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 500,
    lineHeight: 1.15,
    letterSpacing: '-0.01em',
  },
  h3: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.4,
  },
  body: {
    fontSize: '1rem',
    lineHeight: 1.6,
  },
  bodyLg: {
    fontSize: '1.125rem',
    lineHeight: 1.6,
  },
  bodyMd: {
    fontSize: '0.9375rem',
    lineHeight: 1.55,
  },
  bodySm: {
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
  caption: {
    fontSize: '0.75rem',
    lineHeight: 1.4,
    letterSpacing: '0.02em',
  },
  label: {
    fontSize: '0.6875rem',
    fontWeight: 500,
    lineHeight: 1,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
  },
} as const;

export type VistaColor = keyof typeof colors;
export type VistaSpacing = keyof typeof spacing;
