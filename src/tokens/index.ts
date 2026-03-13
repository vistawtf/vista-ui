/**
 * Vista Design Tokens
 *
 * These mirror the CSS custom properties in styles.css.
 * Use them for programmatic access to the design system values.
 */

export const colors = {
  background: 'var(--background)',
  foreground: 'var(--foreground)',
  surface: 'var(--surface)',
  surfaceHover: 'var(--surface-hover)',
  border: 'var(--border)',
  borderHover: 'var(--border-hover)',
  muted: 'var(--muted)',
  mutedLight: 'var(--muted-light)',

  // Brand
  ultraOrange: 'var(--ultra-orange)',
  mediumOrange: 'var(--medium-orange)',
  lightOrange: 'var(--light-orange)',
  ultraBlue: 'var(--ultra-blue)',
  mediumBlue: 'var(--medium-blue)',
  lightBlue: 'var(--light-blue)',
  ultraPurple: 'var(--ultra-purple)',
  mediumPurple: 'var(--medium-purple)',
  lightPurple: 'var(--light-purple)',
  mediumLime: 'var(--medium-lime)',
  lightLime: 'var(--light-lime)',
} as const;

export const colorValues = {
  ultraOrange: '#FF5233',
  mediumOrange: '#FF7043',
  lightOrange: '#FF8A65',
  ultraBlue: '#2962FF',
  mediumBlue: '#448AFF',
  lightBlue: '#90CAF9',
  ultraPurple: '#BA68C8',
  mediumPurple: '#EA80FC',
  lightPurple: '#CE93D8',
  mediumLime: '#B2FF59',
  lightLime: '#C5E1A5',
} as const;

export const spacing = {
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
} as const;

export const radii = {
  button: '3px',
  card: '10px',
  input: '4px',
  badge: '4px',
} as const;

export const transitions = {
  default: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
  slow: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
  fast: 'all 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
  easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
} as const;

export const typography = {
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
