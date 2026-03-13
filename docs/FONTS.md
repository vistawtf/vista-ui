# Font Setup — Geist Sans + Geist Mono

Vista UI uses [Geist](https://vercel.com/font) as its font family. Here's how to set it up in your project.

## Next.js (Recommended)

```bash
npm install geist
```

In your root layout:

```tsx
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export default function RootLayout({ children }) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

## Plain HTML / Vite / Other Frameworks

Install the `geist` npm package and import the CSS:

```tsx
import 'geist/font/sans.css';
import 'geist/font/mono.css';
```

Then set the CSS variables on your root element:

```css
:root {
  --font-geist-sans: 'Geist Sans', system-ui, sans-serif;
  --font-geist-mono: 'Geist Mono', 'SF Mono', Monaco, monospace;
}
```

## Without Geist

If you prefer not to install Geist, the design system falls back to the system font stack:

```
system-ui, -apple-system, sans-serif
```

Components will still work — they just won't have the exact Vista typographic feel.

## Font Weights Used

| Weight | Usage |
|--------|-------|
| 400 (Regular) | Body text, descriptions |
| 500 (Medium) | Headings, labels, buttons |
| 600 (Semibold) | Category badges, kickers |

## Mono Font

Geist Mono is used for:
- Code snippets
- Stat numbers (`tabular-nums`)
- Labels and kickers in some contexts
- Navigation CTA text
