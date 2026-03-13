# SectionHeader

Numbered section label for organizing page content. Used above grids, tables, and content sections.

## Variants

No visual variants.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `number` | `string` | — | Section number (e.g. "01") |
| `label` | `string` | — | Section title |
| `className` | `string` | — | Additional CSS classes |

## Usage

```tsx
<SectionHeader number="01" label="Features" />
<SectionHeader label="About Us" />
```

## Design notes (for Figma)

- **Layout**: Flex row, items-center, gap 16px
- **Number**: 11px font-mono, medium weight, tracking 0.08em, `--muted-light`
- **Label**: `vista-text-label` — 11px uppercase, tracking 0.08em, `--muted`
- **Bottom margin**: clamp(32px, 5vh, 48px)
- Do: Use consistently across a page for visual rhythm
- Don't: Use without a number if other headers on the page have numbers

## Accessibility

- No special ARIA needed — decorative section labels
- Pair with heading elements (`<h2>`, `<h3>`) for proper document outline
