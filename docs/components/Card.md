# Card

Multi-variant card component for services, articles, values, and pricing tiers.

## Variants

- **service**: Feature/service card with number watermark, icon, title, description, and optional link
- **article**: Blog post card with optional image, category badge, date, excerpt
- **value**: Simple card with title and description (no link or image)
- **pricing**: Pricing tier with plan name, price, feature list, and CTA

## Props

### Service Card

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'service'` | — | Required discriminator |
| `number` | `string` | — | Watermark number (e.g. "01") |
| `icon` | `ReactNode` | — | Icon element |
| `title` | `string` | — | Card title |
| `description` | `string` | — | Card body text |
| `href` | `string` | — | Link destination |

### Article Card

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'article'` | — | Required discriminator |
| `image` | `string` | — | Image URL |
| `category` | `string` | — | Category badge text |
| `date` | `string` | — | Publication date |
| `title` | `string` | — | Article title |
| `excerpt` | `string` | — | Short description |
| `href` | `string` | — | Link destination |

### Value Card

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'value'` | — | Required discriminator |
| `title` | `string` | — | Card title |
| `description` | `string` | — | Card body text |

### Pricing Card

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'pricing'` | — | Required discriminator |
| `plan` | `string` | — | Plan name |
| `price` | `string` | — | Price display |
| `period` | `string` | — | Period text (e.g. "/mo") |
| `features` | `string[]` | — | Feature list |
| `ctaText` | `string` | `'Get started'` | CTA button text |
| `ctaHref` | `string` | `'#'` | CTA link |
| `highlighted` | `boolean` | `false` | Orange border + shadow |

## Usage

```tsx
<Card variant="service" number="01" icon={<BrainIcon />}
  title="AI Training" description="Custom models trained on your data" href="/services" />

<Card variant="article" category="Research" date="Mar 13"
  title="Why We Built Our Own Router" excerpt="..." href="/blog/router" />

<Card variant="pricing" plan="Pro" price="$49" period="/mo"
  highlighted features={['Unlimited agents', '50ms SLA']} ctaText="Start Pro" ctaHref="/signup" />
```

## Design notes (for Figma)

- **Border radius**: 10px (all variants)
- **Border**: 1px solid `--border`
- **Padding**: clamp(24px, 3vw, 32px)
- **Hover**: -3px translateY, border-hover, shadow
- **Transition**: 350ms cubic-bezier(0.16, 1, 0.3, 1)
- **Service number watermark**: 48px, `--foreground` at 8% opacity, font-mono
- **Article category badge**: `--ultra-orange`, 10px uppercase, rounded-4px
- **Pricing highlighted**: 1px orange border + 0 0 0 1px orange + 8px 24px orange/12 shadow
- Do: Use consistent variants within the same grid
- Don't: Mix variant types in the same row

## Accessibility

- Service/article cards wrap in `<a>` when `href` is provided
- Article uses `<article>` element
- Pricing features use `<ul>` with `<li>` items
- Check icons are `aria-hidden` (decorative)
