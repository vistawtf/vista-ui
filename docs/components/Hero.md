# Hero

Landing page hero section. Supports both a quick props-based API and a compound component API for full control.

## Variants

- **Quick API**: Pass `kicker`, `title`, `subtitle`, `ctaText`, `ctaHref` as props
- **Compound API**: Use `<Hero.Kicker>`, `<Hero.Title>`, etc. for JSX control (e.g., styled text, custom CTA layout)

## Props

### Hero (Quick API)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `kicker` | `string` | — | Small uppercase label above title |
| `title` | `string` | — | Main heading |
| `subtitle` | `string` | — | Supporting paragraph |
| `ctaText` | `string` | — | Primary CTA button text |
| `ctaHref` | `string` | — | Primary CTA link |
| `ctaSecondaryText` | `string` | — | Secondary CTA text |
| `ctaSecondaryHref` | `string` | — | Secondary CTA link |
| `className` | `string` | — | Additional CSS classes |

### Sub-components

- `Hero.Kicker` — `{ children, className }`
- `Hero.Title` — `{ children, className }`
- `Hero.Subtitle` — `{ children, className }`
- `Hero.Actions` — `{ children, className }`
- `Hero.TrustedBy` — `{ logos: TrustedByLogo[], label?, className? }`

## Usage

```tsx
// Quick
<Hero
  kicker="AI Platform"
  title="Ship AI features faster"
  subtitle="Unified infrastructure for AI agents"
  ctaText="Get Started"
  ctaHref="/signup"
/>

// Compound
<Hero>
  <Hero.Kicker>AI Platform</Hero.Kicker>
  <Hero.Title>
    Ship AI features <u>faster</u>
  </Hero.Title>
  <Hero.Subtitle>
    Unified infrastructure for AI agents
  </Hero.Subtitle>
  <Hero.Actions>
    <Button variant="primary" size="lg">Get Started</Button>
    <Button variant="secondary" size="lg">Learn more →</Button>
  </Hero.Actions>
  <Hero.TrustedBy
    label="Trusted by"
    logos={[
      { src: '/logos/vercel.svg', alt: 'Vercel', href: 'https://vercel.com' },
    ]}
  />
</Hero>
```

## Design notes (for Figma)

- **Padding**: pt-140px, pb-90px (matching landing2 hero)
- **Max width**: Title/subtitle constrained to 640px
- **Title**: `vista-text-display` — clamp(2.5rem, 5vw, 4rem), weight 500
- **Subtitle**: 16px mobile, 20px desktop, color `--muted`
- **Kicker**: `vista-text-label` — 11px, uppercase, tracking 0.08em
- **Trusted logos**: 50% opacity, grayscale, hover to full color + lift
- **CTA gap**: 16px between buttons (flex-col on mobile, flex-row on sm+)
- Do: Use kicker to establish context before the title
- Don't: Write more than 2 lines for the subtitle

## Accessibility

- `<section>` element
- Title uses `<h1>`
- Trusted logos have `aria-label` on links
- CTA buttons inherit Button component accessibility
