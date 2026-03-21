# Vista UI — Component Library Audit
Date: 2026-03-21

## Executive Summary

**Overall Rating: 7/10 — Strong foundation, needs consolidation before it's production-ready.**

The library has 14 exported components with well-typed TypeScript interfaces, a solid compound component pattern (Navbar, Hero, Footer, FAQ, FeaturesGrid, Stats), and a coherent design token system in both CSS and JS. The main gaps: dark mode support is almost nonexistent at the component level (only Badge has `dark:` variants), several components hardcode hex values instead of using tokens, accessibility coverage is uneven (form components are great, navigation and footer are weak), and the component set is missing essential pieces (Modal, Toast, Tabs, Toggle, Tooltip) that any real app would need immediately.

---

## Design Token Compliance

### Token System

The library has a well-structured dual token system:
- **CSS custom properties** in `styles.css` (`:root` and `.dark` scopes) — colors, spacing, font stacks
- **JS token objects** in `tokens/index.ts` — mirrors CSS vars for programmatic access
- **Tailwind v4 theme bridge** via `@theme inline` — maps CSS vars to Tailwind utilities

### Component Token Usage

| Component | Uses CSS vars | Hardcoded values | Verdict |
|-----------|:------------:|:----------------:|:-------:|
| Button | ✅ All colors via `var(--*)` | `rgba(255,82,51,0.25)` for shadow | ⚠️ Near-perfect |
| Navbar | ✅ Most via `var(--*)` | None | ✅ |
| Hero | ✅ Via `var(--*)` | Inline `paddingTop: '160px'` | ⚠️ Spacing not tokenized |
| Card (Service) | ✅ Via `var(--*)` | `rgba()` for shadows | ⚠️ |
| Card (Article) | ⚠️ Mixed | `rgba(255,82,51,0.2)`, `rgba(255,82,51,0.04)` hardcoded | ⚠️ |
| Card (Pricing) | ✅ Via `var(--*)` | `rgba(255,82,51,0.12)` for shadow | ⚠️ |
| Input | ✅ Via `var(--*)` | `rgba(255,82,51,0.1)` focus ring, `red-500` error | ⚠️ |
| Select | ✅ Via `var(--*)` | Same as Input | ⚠️ |
| Textarea | ✅ Via `var(--*)` | Same as Input | ⚠️ |
| Badge | ✅ Via `var(--*)` | `rgba(255,82,51,*)` hardcoded | ⚠️ |
| SectionHeader | ✅ All via `var(--*)` | None | ✅ |
| FeaturesGrid | ✅ Via `var(--*)` | `rgba(0,0,0,0.06)` for shadow | ⚠️ |
| FAQ | ✅ Via `var(--*)` | None | ✅ |
| Footer | ❌ Hardcoded | `#111`, `#E4E2D8`, `white/[0.08]` etc. | ❌ |
| Stats | ✅ Via `var(--*)` | None | ✅ |
| Decorative | ✅ Via `var(--*)` + inline rgba | `rgba()` for divider | ⚠️ |

**Summary:** Most components use CSS variables for primary colors, but orange-alpha values (`rgba(255,82,51,*)`) are hardcoded across many components instead of using a token. Footer is the worst offender with 3 hardcoded hex values. The focus ring pattern `rgba(255,82,51,0.1)` appears in Input, Select, and Textarea but isn't a token.

---

## Component Status

| Component | Token Compliance | Props API | A11y | Dark Mode | TypeScript | Rating |
|-----------|:---------------:|:---------:|:----:|:---------:|:----------:|:------:|
| **Button** | ✅ | ✅ | ✅ | ⚠️ | ✅ | 8/10 |
| **Navbar** | ✅ | ✅ | ⚠️ | ⚠️ | ✅ | 7/10 |
| **Hero** | ⚠️ | ✅ | ⚠️ | ⚠️ | ✅ | 7/10 |
| **Card** | ⚠️ | ✅ | ⚠️ | ❌ | ✅ | 6/10 |
| **Input** | ✅ | ✅ | ✅ | ⚠️ | ✅ | 8/10 |
| **Select** | ✅ | ✅ | ⚠️ | ⚠️ | ✅ | 7/10 |
| **Textarea** | ✅ | ✅ | ✅ | ⚠️ | ✅ | 8/10 |
| **Badge** | ⚠️ | ✅ | ✅ | ✅ | ✅ | 8/10 |
| **SectionHeader** | ✅ | ✅ | ⚠️ | ⚠️ | ✅ | 7/10 |
| **FeaturesGrid** | ⚠️ | ✅ | ⚠️ | ⚠️ | ✅ | 7/10 |
| **FAQ** | ✅ | ✅ | ✅ | ⚠️ | ✅ | 8/10 |
| **Footer** | ❌ | ✅ | ⚠️ | ❌ | ✅ | 5/10 |
| **Stats** | ✅ | ✅ | ⚠️ | ⚠️ | ✅ | 7/10 |
| **Decorative** | ⚠️ | ✅ | ✅ | ⚠️ | ✅ | 7/10 |

### Detailed Component Notes

#### Button (8/10)
- **Strengths:** Clean variant system (primary/secondary/ghost), size scale (sm/md/lg), loading state with spinner, `asChild` pattern for polymorphic rendering, `forwardRef`, focus-visible styles
- **Gaps:** No `dark:` Tailwind variants. Relies entirely on CSS var resolution from `.dark` parent class. The `asChild` pattern doesn't pass all props through (only className and ref). Missing `danger`/`destructive` variant.

#### Navbar (7/10)
- **Strengths:** Compound component pattern with context. Scroll detection with rAF throttling. Mobile menu with animated dropdown. Active link underline animation.
- **Gaps:** Nav links lack `focus-visible` styles. Mobile dropdown links have no focus management (should trap focus or manage with keyboard). No `aria-current="page"` on active link. `lucide-react` is a hard dependency (Menu/X icons).

#### Hero (7/10)
- **Strengths:** Dual API (quick props or compound children). Good sub-component decomposition (Kicker, Title, Subtitle, Actions, TrustedBy).
- **Gaps:** Uses inline style for paddingTop/paddingBottom instead of a class or token. No decorative background slots (the reference site has rings/grids/plus icons). TrustedBy logos have no loading state or skeleton.

#### Card (6/10)
- **Strengths:** Discriminated union type for variants. Each variant has distinct, appropriate props. Consistent hover patterns.
- **Gaps:** Service/Article cards use `rounded-[10px]` but DESIGN.md says "No rounded corners > 3px on cards" — inconsistency. Article card category badge hardcodes `rgba()`. PricingCard has an inline CTA `<a>` that doesn't use the Button component. ArticleCard doesn't use semantic `<time>` element for dates.

#### Input (8/10)
- **Strengths:** Label/error/hint pattern. `aria-invalid`, `aria-describedby` for error and hint. `forwardRef`. Left/right icon slots.
- **Gaps:** Missing `lg` size. No `disabled` styling (the native attribute works but there's no visual disabled state). Error color uses Tailwind's `red-500` instead of a token.

#### Select (7/10)
- **Strengths:** Same label/error pattern as Input. Custom chevron SVG with proper sizing.
- **Gaps:** No `hint` prop (Input and Textarea have it, Select doesn't — inconsistent). No `disabled` visual state. No multi-select capability (expected for a library).

#### Textarea (8/10)
- **Strengths:** Resize control prop. Label/error/hint trifecta. `forwardRef`. Consistent with Input patterns.
- **Gaps:** Same missing `disabled` state. No character count feature. No auto-resize option.

#### Badge (8/10)
- **Strengths:** Only component with proper `dark:` variants. Clean variant system. Minimal and focused.
- **Gaps:** Missing `success`, `warning`, `error` variants (common need). Only two sizes.

#### FAQ (8/10)
- **Strengths:** Context-based accordion with `allowMultiple` option. `defaultOpen` support. CSS grid animation (no JS height calculation). `aria-expanded` on trigger. `role="region"` on content.
- **Gaps:** Missing `aria-controls`/`id` linking between trigger and panel. No keyboard arrow navigation between items. Register function uses mutable ref counter (works but fragile if items reorder).

#### Footer (5/10)
- **Strengths:** Good compound structure (CTA, Columns, Column, Bottom). Social icons with aria-labels.
- **Gaps:** Hardcodes `#111`, `#E4E2D8`, `white/[0.08]` throughout instead of CSS vars. Cannot be used on non-dark backgrounds without overriding everything. CTA section has hardcoded button styles instead of using Button component. Grid rails are duplicated from Decorative component. Footer links lack `focus-visible` styles.

---

## Issues Found (by priority)

### 🔴 Critical

1. **Footer hardcodes all colors** — `bg-[#111]`, `text-[#E4E2D8]`, `white/[0.08]` borders are all hardcoded. This makes theming impossible and breaks if CSS vars change. Should use `bg-[var(--background)]` etc. with the `.dark` class on the footer wrapper.

2. **Card border-radius contradicts DESIGN.md** — ServiceCard and ArticleCard use `rounded-[10px]`, but DESIGN.md explicitly says "Never use rounded corners > 3px on cards." The FeaturesGrid.Item correctly uses `rounded-[2px]`. This is a design system violation that creates visual inconsistency.

3. **Dark mode is effectively broken** — Only Badge has `dark:` variants. All other components rely on CSS var resolution from a `.dark` parent class, but the Footer bypasses this entirely with hardcoded colors. If someone wraps the page in `.dark`, Footer stays the same, Navbar background doesn't invert properly, and text colors in Card/Hero won't adapt because they use `var(--foreground)` (which works) but borders use `var(--border)` (which resolves to `#E4E2D8` in dark — a cream tone that may not work as intended on `#111`).

### 🟡 Important

4. **Missing focus-visible styles on navigation links** — Desktop nav links, footer links, and footer social icons have hover styles but no focus-visible indicators. This fails WCAG 2.4.7 (Focus Visible).

5. **PricingCard doesn't use Button component** — It renders its own inline `<a>` with duplicated button styles. If Button styling changes, PricingCard gets out of sync. Should use `<Button asChild>`.

6. **Inconsistent form component API** — Select is missing `hint` prop that Input and Textarea both have. All three are missing explicit `disabled` visual styling. This inconsistency will confuse consumers.

7. **Hero uses inline style for section padding** — `style={{ paddingTop: '160px', paddingBottom: '80px' }}` bypasses the CSS token system. Should use `vista-section` class or a custom class that references spacing tokens.

8. **#FF5233 orange text on #FAFAFA fails WCAG AA** — Contrast ratio is approximately 3.9:1 (needs 4.5:1 for normal text). Affects all "Read more →", "Learn more →" text links and any body-size orange text. Either darken the orange for text usage or ensure it's only used at large text sizes (18px+/14px bold+).

9. **Article card category badge uses hardcoded rgba** — `rgba(255,82,51,0.2)` and `rgba(255,82,51,0.04)` are copy-pasted instead of using the Badge component that already handles this exact pattern.

10. **`lucide-react` is a hard dependency in Navbar** — Imports Menu and X icons directly. Consumer projects must install lucide-react even if they want different icons. Should accept icon as props or provide SVG directly.

### 🟢 Nice to have

11. **CSS has ~200 lines of unused component classes** — `.btn-primary`, `.btn-secondary`, `.subscribe-btn`, `.service-card`, `.article-card`, `.value-card`, `.stat-value`, `.input`, `.nav-link` etc. are all defined in styles.css but no component uses them (components use Tailwind utilities inline). These are legacy from a previous approach and should be removed or explicitly documented as available CSS-only alternatives.

12. **Typography classes exist but components don't use them consistently** — `vista-text-display`, `vista-text-h1`, `vista-text-h3` etc. are defined, but FeaturesGrid title uses inline `text-[36px] md:text-[48px]`, FAQ title uses the same inline approach, and Hero.Title uses `vista-text-display`. Inconsistent.

13. **No `h2` typography token** — The system jumps from `vista-text-h1` to `vista-text-h3`. Section titles (FeaturesGrid, FAQ) need `vista-text-h2` at `clamp(2rem, 4vw, 3rem)`. It exists in `styles.css` but not consistently used.

14. **Button loading state is spinner-only** — No loading text customization. Spinner uses currentColor which works, but there's no skeleton/shimmer variant.

15. **FeaturesGrid.Item `href` wraps in `<a>` but "Learn more →" text is inside a `<span>`** — Entire card is clickable via the `<a>`, but the span text creates a visual CTA that isn't a separate interactive element. Semantically fine, but screen readers will read "Learn more →" as part of the link text which may be redundant.

16. **No utility for section-level dark backgrounds** — Components like FAQ, FeaturesGrid, and Stats all render with `bg-[var(--background)]` and `vista-section`. To use them on a dark background, consumers must manually wrap in `.dark` and override. A `dark` prop on section components would be helpful.

17. **Stats component has no responsive column control** — Hardcoded to `grid-cols-2 md:grid-cols-4`. Should accept `columns` prop like FeaturesGrid does.

---

## Missing Components

A complete UI library for building the demo pages (and real products) would need:

| Component | Priority | Rationale |
|-----------|:--------:|-----------|
| **Modal/Dialog** | 🔴 High | Essential for any interactive app. Pricing "contact sales", tool dashboard actions, etc. |
| **Toast/Notification** | 🔴 High | Form submissions, CTA actions need feedback. No notification component exists. |
| **Tabs** | 🔴 High | Pricing toggle (monthly/annual), tool dashboard sections, content organization. |
| **Toggle/Switch** | 🟡 Medium | Settings pages, dark mode toggle, pricing frequency switch. |
| **Tooltip** | 🟡 Medium | Dashboard actions, icon-only buttons, truncated text. |
| **Avatar** | 🟡 Medium | Blog author photos, team sections, dashboard user display. |
| **Dropdown Menu** | 🟡 Medium | Navigation submenus, action menus in tables, user profile menu. |
| **Table** | 🟡 Medium | The tool dashboard demo has a hand-built table. Should be a component. |
| **Skeleton/Loading** | 🟡 Medium | Article cards, stats, dashboard widgets all need loading states. |
| **Newsletter/CTABand** | 🟢 Low | The dark full-width email signup pattern (from reference site) is common enough to componentize. |
| **Breadcrumb** | 🟢 Low | Dashboard navigation, blog post pages. |
| **Pagination** | 🟢 Low | Blog listing, table navigation. |
| **Alert/Callout** | 🟢 Low | Error states, info messages, feature announcements. |
| **Divider** | 🟢 Low | Horizontal rule with label option (some of this exists in SectionHeader but not generalized). |
| **Logo/Brand** | 🟢 Low | The Navbar.Logo accepts an img src but doesn't have the SVG mark/wordmark logic from the reference site. |

---

## Recommendations

Ordered by impact and effort, for what to fix/add before rebuilding demos:

### Phase 1: Fix broken fundamentals (before anything else)
1. **Refactor Footer to use CSS variables** — Replace all hardcoded hex values with `var(--*)` references and add `.dark` class
2. **Fix Card border-radius** — Change ServiceCard/ArticleCard from `rounded-[10px]` to `rounded-[2px]` per DESIGN.md
3. **Add focus-visible styles globally** — Nav links, footer links, card links all need `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ultra-orange)]`
4. **Add `hint` prop to Select** — Parity with Input and Textarea

### Phase 2: Token consolidation
5. **Create `--orange-alpha-*` CSS variables** — `--orange-alpha-4`, `--orange-alpha-10`, `--orange-alpha-20`, `--orange-alpha-25` to replace hardcoded `rgba(255,82,51,*)` everywhere
6. **Replace Hero inline styles with CSS class** — Use `vista-section` or create `vista-hero-section`
7. **Make typography class usage consistent** — Either all section titles use `vista-text-h2` or none do
8. **Clean up unused CSS** — Remove ~200 lines of dead `.btn-primary`, `.service-card`, `.article-card` etc. from styles.css

### Phase 3: Missing essentials
9. **Build Modal component** — Trap focus, portal rendering, close on escape, overlay click
10. **Build Tabs component** — Accessible, animated, controlled/uncontrolled
11. **Build Toast component** — Position options, auto-dismiss, action buttons
12. **Add dark mode `dark` prop to section components** — FAQ, FeaturesGrid, Stats, Hero

### Phase 4: Polish
13. **Consolidate PricingCard CTA to use Button component**
14. **Remove lucide-react dependency from Navbar** — Accept icon props instead
15. **Add `disabled` visual states to all form components**
16. **Add `columns` prop to Stats component**
17. **Create a `danger` Button variant**
18. **Add ArticleCard category badge → Badge component reuse**

---

## Screenshots

| Page | Path |
|------|------|
| Index (component showcase) | `/tmp/vista-ui-index.png` |
| SaaS Landing | `/tmp/vista-ui-landing.png` |
| Pricing | `/tmp/vista-ui-pricing.png` |
| Blog | `/tmp/vista-ui-blog.png` |
| Tool Dashboard | `/tmp/vista-ui-tool.png` |

Also copied to `/root/clawd/vistawtf/vista-ui/vista-ui-*.png`

---

## Appendix: TypeScript Quality

**Zero `any` types found.** All components use proper typed interfaces. Discriminated union on Card variants is well-done. All forwardRef components have correct generic types. Type exports from index.ts are comprehensive. The only improvement would be adding JSDoc comments to complex props (like `asChild` behavior documentation on Button).
