# GridLines & SectionDivider

Decorative layout elements that provide visual structure.

## Components

### GridLines

Vertical rail lines at the edges of the content container (1200px max-width). Absolutely positioned, hidden on mobile.

### SectionDivider

Horizontal hairline rule between page sections.

## Props

### GridLines

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Additional CSS classes |

### SectionDivider

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `dark` | `boolean` | `false` | Use light-on-dark color |
| `className` | `string` | — | Additional CSS classes |

## Usage

```tsx
// Add grid rails to a section
<section className="relative">
  <GridLines />
  <div className="vista-container">
    {/* content */}
  </div>
</section>

// Divide sections
<HeroSection />
<SectionDivider />
<FeaturesSection />

// On dark backgrounds
<SectionDivider dark />
```

## Design notes (for Figma)

### GridLines
- **Position**: absolute, inset-0, centered at max-w 1200px
- **Lines**: 1px wide, `--foreground` at 6% opacity
- **Hidden**: Below 640px (`max-sm:opacity-0`)

### SectionDivider
- **Light mode** (`dark={false}`): 1px, rgba(0,0,0,0.06)
- **Dark mode** (`dark={true}`): 1px, rgba(255,255,255,0.06)
- **z-index**: 20 (above content, below overlays)
- Do: Use GridLines on full-width sections for the Vista editorial feel
- Don't: Stack multiple SectionDividers — one between sections is enough

## Accessibility

- Both components: `aria-hidden="true"`
- Purely decorative — no semantic meaning
