# Badge

Inline status labels and category tags.

## Variants

- **default**: Neutral background (`--surface-hover`), foreground text, subtle border
- **accent**: Orange tinted background (`--ultra-orange` at 10%), orange text
- **outline**: Transparent background, foreground text, border only

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'accent' \| 'outline'` | `'default'` | Visual style |
| `size` | `'sm' \| 'md'` | `'md'` | Badge size |
| `className` | `string` | — | Additional CSS classes |
| `children` | `ReactNode` | — | Badge content |

## Usage

```tsx
<Badge>Draft</Badge>
<Badge variant="accent">Active</Badge>
<Badge variant="outline" size="sm">Paused</Badge>
```

## Design notes (for Figma)

- **Border radius**: 4px
- **Font**: Medium weight, tracking 0.02em
- **Size sm**: px-8px, py-2px, 10px font
- **Size md**: px-10px, py-3px, 12px font
- **Default**: bg `--surface-hover`, border `--border`, text `--foreground`
- **Accent**: bg `--ultra-orange`/10, border `--ultra-orange`/20, text `--ultra-orange`
- **Outline**: bg transparent, border `--border`, text `--foreground`
- Do: Use accent for positive/active states
- Don't: Use badges for long text — keep to 1-2 words

## Accessibility

- Rendered as `<span>` (inline, no role needed)
- Content should be meaningful text (no icon-only badges without `aria-label`)
