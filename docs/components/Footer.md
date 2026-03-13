# Footer

Dark-themed site footer with CTA section, link columns, and bottom bar. Compound component API.

## Variants

No visual variants — always renders with dark (#111) background.

## Props

### Footer

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Additional CSS classes |

### Footer.CTA

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | CTA heading |
| `ctaText` | `string` | — | Primary button text |
| `ctaHref` | `string` | — | Primary button link |
| `secondaryText` | `string` | — | Secondary button text |
| `secondaryHref` | `string` | — | Secondary button link |

### Footer.Columns

Container for `Footer.Column` elements. No props besides `className`.

### Footer.Column

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Column heading |
| `links` | `FooterLink[]` | — | `{ label, href }` array |

### Footer.Bottom

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `copyright` | `string` | — | Copyright text |
| `socials` | `FooterSocial[]` | — | `{ icon, href, label }` array |

## Usage

```tsx
<Footer>
  <Footer.CTA
    title="Build something useful"
    ctaText="Get Started"
    ctaHref="/signup"
    secondaryText="Learn more"
    secondaryHref="/about"
  />
  <Footer.Columns>
    <Footer.Column title="Product" links={[
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
    ]} />
    <Footer.Column title="Company" links={[
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
    ]} />
  </Footer.Columns>
  <Footer.Bottom
    copyright="© 2026 Acme Inc"
    socials={[
      { icon: <TwitterIcon />, href: 'https://x.com/acme', label: 'Twitter' },
    ]}
  />
</Footer>
```

## Design notes (for Figma)

- **Background**: #111111
- **Text**: #E4E2D8
- **Grid rails**: 1px white/6% lines at container edges
- **CTA section**: border-b white/8%, py-40px, px-24px
- **CTA title**: 32-42px medium
- **CTA button**: `--ultra-orange` bg, 14px semibold uppercase
- **Columns**: 4-col grid (md), border between columns white/8%
- **Column title**: 12px uppercase mono, white/50
- **Links**: 14px white/70, hover `--ultra-orange`
- **Bottom**: 14px font-mono white/40
- **Social icons**: 20px, white/40 → white on hover
- Do: Include at least CTA + Bottom sections
- Don't: Use more than 4 columns (runs out of space)

## Accessibility

- `<footer>` landmark
- Links have hover/focus indicators
- Social icons have `aria-label`
- External links have `target="_blank" rel="noopener noreferrer"`
