# Stats

Stat counter grid for displaying key metrics. Compound component API.

## Variants

No visual variants.

## Props

### Stats

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Additional CSS classes |

### Stats.Item

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Stat number/value |
| `label` | `string` | — | Description below value |

## Usage

```tsx
<Stats>
  <Stats.Item value="10k+" label="Active developers" />
  <Stats.Item value="99.9%" label="Uptime SLA" />
  <Stats.Item value="<50ms" label="Median latency" />
  <Stats.Item value="$2M" label="Revenue tracked" />
</Stats>
```

## Design notes (for Figma)

- **Grid**: 2 cols mobile, 4 cols md+, gap 32-48px
- **Value**: clamp(2rem, 4.5vw, 3.25rem), weight 500, leading 1.1, tracking -0.03em
- **Value font feature**: `tabular-nums` for aligned numbers
- **Label**: 14px, `--muted`, mt-8px
- **Section**: Standard `vista-section` padding
- Do: Use 4 items for a balanced layout
- Don't: Display more than 6 stats (loses impact)

## Accessibility

- No special ARIA needed
- Text content is readable by screen readers
- Use `aria-live` if values update dynamically
