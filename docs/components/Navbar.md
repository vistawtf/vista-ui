# Navbar

Scroll-aware navigation bar with compound component API. Shrinks padding after 50px scroll, adds backdrop blur, and includes an animated mobile menu.

## Variants

- **Sticky (default)**: Fixed to top, transitions on scroll
- **Relative**: Positioned normally in the document flow

## Props

### Navbar

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sticky` | `boolean` | `true` | Fix to top of viewport |
| `className` | `string` | — | Additional CSS classes |

### Navbar.Logo

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | — | Logo image source |
| `alt` | `string` | — | Alt text |
| `href` | `string` | `'/'` | Link destination |

### Navbar.Links

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `NavLinkItem[]` | — | `{ label, href, active? }` |

### Navbar.CTA

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | — | Link destination |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual style |

### Navbar.MobileMenu

No props needed. Renders the hamburger toggle and full-screen overlay.

## Usage

```tsx
<Navbar sticky>
  <Navbar.Logo src="/logo.svg" alt="Acme" href="/" />
  <Navbar.Links items={[
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '/pricing', active: true },
    { label: 'Blog', href: '/blog' },
  ]} />
  <Navbar.CTA href="/signup" variant="primary">
    Get Started
  </Navbar.CTA>
  <Navbar.MobileMenu />
</Navbar>
```

## Design notes (for Figma)

- **Height**: 64px default, 56px when scrolled
- **Background (scrolled)**: `--background` at 80% opacity, backdrop-blur-xl
- **Border (scrolled)**: 1px bottom, `--border` at 50% opacity
- **Transition**: all 0.5s ease
- **Link active indicator**: 1.5px underline in `--ultra-orange`, animated scaleX
- **Mobile hamburger**: Three 1.5px lines, 20px wide, animated to X on open
- **Mobile overlay**: Full-screen, `--background`, fade in 0.3s
- Do: Include MobileMenu for responsive support
- Don't: Use more than 5 nav links (gets crowded)

## Accessibility

- `<header>` landmark element
- `<nav>` for navigation links
- Hamburger: `aria-label`, `aria-expanded`
- Mobile overlay: `aria-hidden` when closed
- Links have visible focus indicators
- Escape key does not auto-close (add if needed)
