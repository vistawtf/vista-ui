# FeaturesGrid

Responsive grid of feature cards with number watermarks, icons, and optional links. Uses a compound component API.

## Variants

- **2 columns**: `columns={2}`
- **3 columns** (default): `columns={3}`
- **4 columns**: `columns={4}`

## Props

### FeaturesGrid

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Section heading (lowercase) |
| `columns` | `2 \| 3 \| 4` | `3` | Grid columns on desktop |
| `className` | `string` | — | Additional CSS classes |

### FeaturesGrid.Item

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `number` | `string` | — | Watermark number |
| `icon` | `ReactNode` | — | Feature icon |
| `title` | `string` | — | Feature title |
| `description` | `string` | — | Feature description |
| `href` | `string` | — | Link destination |

## Usage

```tsx
<FeaturesGrid title="what we do" columns={3}>
  <FeaturesGrid.Item
    number="01"
    icon={<BrainIcon />}
    title="AI Orchestration"
    description="Route prompts to the right model automatically"
    href="/features/orchestration"
  />
  <FeaturesGrid.Item
    number="02"
    icon={<ShieldIcon />}
    title="Safety Layer"
    description="Built-in content filtering and PII detection"
  />
</FeaturesGrid>
```

## Design notes (for Figma)

- **Card padding**: 32px
- **Card border**: 1px `--border`, rounded 2px
- **Number watermark**: 48px font-mono, `--foreground` at 8%, top-right
- **Icon**: `--ultra-orange`, 48x48px, strokeWidth 1.5
- **Title**: 18px medium, `--foreground`
- **Description**: 14px, 1.6 line-height, `--muted`
- **Hover**: -4px translateY, border `--ultra-orange`, shadow 0 8px 24px rgba(0,0,0,0.06)
- **Responsive**: 1 col mobile → 2 col md → 3 col lg (for columns=3)
- Do: Use 3 or 6 items for 3-column layout
- Don't: Use more than 9 items (use pagination or tabs)

## Accessibility

- Wraps section in `<section>`
- Items with `href` rendered as `<a>` links
- Icon containers are decorative
