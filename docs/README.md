# @vistawtf/ui

Production-ready React components built on the Vista design system. Tailwind CSS 4, TypeScript strict, tree-shakeable.

## Installation

```bash
npm install @vistawtf/ui
```

### Peer Dependencies

```bash
npm install react react-dom
# React >=18 required
```

### Set Up Styles

Import the Vista CSS in your app's global stylesheet:

```css
@import "tailwindcss";
@import "@vistawtf/ui/styles.css";
```

This provides all CSS custom properties (colors, spacing, typography) and component styles.

### Set Up Fonts

See [FONTS.md](./FONTS.md) for instructions on configuring Geist Sans + Geist Mono.

## Usage

```tsx
import { Button, Card, Hero, Navbar } from '@vistawtf/ui';

export default function Page() {
  return (
    <div>
      <Navbar sticky>
        <Navbar.Logo src="/logo.svg" alt="Acme" />
        <Navbar.Links items={[{ label: 'Home', href: '/' }]} />
        <Navbar.CTA href="/signup">Sign Up</Navbar.CTA>
        <Navbar.MobileMenu />
      </Navbar>

      <Hero
        kicker="Welcome"
        title="Build something useful"
        subtitle="Production-ready components for your next project"
        ctaText="Get Started"
        ctaHref="#"
      />
    </div>
  );
}
```

## Available Components

| Component | Description |
|-----------|-------------|
| [Button](./components/Button.md) | Primary, secondary, ghost variants with loading state |
| [Navbar](./components/Navbar.md) | Scroll-aware nav with mobile menu |
| [Hero](./components/Hero.md) | Hero section with quick + compound API |
| [Card](./components/Card.md) | Service, article, value, pricing variants |
| [Input](./components/Input.md) | Text input with label, error, icons |
| [Select](./components/Select.md) | Dropdown select with label, error |
| [Textarea](./components/Textarea.md) | Multi-line input with label, error |
| [Badge](./components/Badge.md) | Status badges and labels |
| [SectionHeader](./components/SectionHeader.md) | Numbered section labels |
| [FeaturesGrid](./components/FeaturesGrid.md) | Feature cards in a responsive grid |
| [FAQ](./components/FAQ.md) | Accordion FAQ section |
| [Footer](./components/Footer.md) | Site footer with CTA and columns |
| [Stats](./components/Stats.md) | Stat counters in a grid |
| [GridLines / SectionDivider](./components/Decorative.md) | Decorative layout elements |

## Design Tokens

Access design tokens programmatically:

```tsx
import { colors, spacing, radii, transitions, typography } from '@vistawtf/ui';

// CSS variable references
colors.ultraOrange // 'var(--ultra-orange)'
colors.background  // 'var(--background)'
spacing[8]         // '32px'
```

## Utilities

```tsx
import { cn } from '@vistawtf/ui';

// Combines clsx + tailwind-merge
cn('px-4 py-2', isActive && 'bg-blue-500', 'px-6')
// → 'py-2 bg-blue-500 px-6'
```

## Dark Mode

Add the `dark` class to your `<html>` or `<body>` element. All tokens and components respond automatically.

```html
<html class="dark">
```

## Browser Support

All modern browsers (Chrome, Firefox, Safari, Edge). No IE11 support.
