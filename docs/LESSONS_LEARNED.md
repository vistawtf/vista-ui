# Lessons Learned — Vista UI Build & Fix Process

> Written after Phase 1 build + multiple fix rounds. Read this before starting Phase 2 or any future component work.

---

## 1. Tailwind v4 doesn't scan node_modules by default

**The #1 root cause of most visual bugs in this project.**

When a consuming Next.js app uses `@vistawtf/ui`, Tailwind v4 auto-detection only scans local files (`app/**`, `src/**`). It never sees the utility classes inside `node_modules/@vistawtf/ui/dist/`.

**Fix:** Add this to the consuming app's `globals.css`:

```css
@source "../node_modules/@vistawtf/ui/dist";
```

This single line fixes:
- Footer dark background not rendering
- Footer 4-column grid not rendering
- Card borders not rendering
- Any component whose Tailwind classes live in the library dist

**Rule:** Any new consuming project must add this `@source` directive or no library styles will work.

---

## 2. Dev mode doesn't pick up library changes without reinstall

When you edit `src/` in vista-ui and rebuild with `npm run build`, the Next.js dev server in `examples/demo` does NOT hot-reload those changes automatically — even though it watches `node_modules`.

**Required workflow after any library change:**

```bash
# 1. Build the library
cd /root/clawd/vistawtf/vista-ui
npm run build

# 2. Reinstall in the demo (forces symlink refresh)
cd examples/demo
npm install

# 3. Restart dev server (kill + start fresh)
pkill -f "next"
node_modules/.bin/next dev --port 3000 &
```

Skipping step 2 means old dist files are still in use.

---

## 3. Navbar fixed positioning requires explicit hero padding-top

The Navbar uses `position: fixed` — it sits on top of all content. The Hero section needs enough `padding-top` to push content below the navbar height.

**Landing2 reference behavior:** Navbar always has a solid background (not transparent). It does NOT start transparent and fade in — it's `bg-[#FFFFFF]` from the very first pixel.

**Wrong:** Starting navbar transparent and adding background on scroll — this causes hero content to appear behind the navbar on first load.

**Correct:** Always solid background, just adjust border/shadow on scroll.

**Hero padding-top guidance:**
- Navbar height: `h-14` = 56px
- Minimum visible padding: navbar height + ~80px breathing room = ~136px minimum
- Use `pt-[160px] md:pt-[180px]` as safe default

**Unresolved:** Even with `pt-[160px]`, the hero kicker was still being cut off in screenshots. Root cause unclear — may be a viewport height / mobile browser chrome issue or a CSS specificity conflict. Needs fresh investigation in Phase 2.

---

## 4. Never guess styles — read the source first

Every round of fixes that failed started with agents guessing at styles instead of reading `landing2/src/app/globals.css` first.

**Process that works:**
1. `cat /root/clawd/vistawtf/landing2/src/app/globals.css` — read every line
2. `cat /root/clawd/vistawtf/landing2/src/components/[Component].tsx` — read the exact structure
3. Replicate values exactly — no creative interpretation

**What not to do:**
- Assume color values without checking
- Add `dark:` Tailwind classes when landing2 uses CSS variables
- Use `/20` opacity modifiers on CSS custom properties (Tailwind v4 doesn't support this on CSS vars in border declarations — use explicit `rgba()` instead)

---

## 5. Tailwind v4 opacity syntax with CSS custom properties

**Broken:**
```tsx
className="border border-[var(--ultra-orange)]/20"
```

**Working:**
```tsx
className="border border-[rgba(255,82,51,0.2)]"
```

The `/20` opacity modifier doesn't work when the base value is a CSS custom property in certain properties (especially `border`). Use explicit `rgba()` with hardcoded values for borders and backgrounds that need opacity on brand colors.

---

## 6. Footer structure (replicate landing2 exactly)

The Footer must use `bg-[#111]` hardcoded — not a CSS variable — because it's always dark regardless of light/dark mode.

Key CSS that makes the Footer 4-column grid work:
```tsx
className="grid grid-cols-1 md:[grid-template-columns:repeat(4,minmax(0,1fr))]"
```

The `md:[grid-template-columns:...]` arbitrary value syntax is valid in Tailwind v4 but only generates if Tailwind scans the file containing it. If the Footer is in `node_modules`, see lesson #1.

---

## 7. Component API: prop-driven + compound dual pattern

Every complex component exposes two APIs:

**Quick (prop-driven)** — for AI vibe coding:
```tsx
<Hero title="..." subtitle="..." ctaText="..." />
```

**Full (compound)** — for custom layouts:
```tsx
<Hero>
  <Hero.Kicker>...</Hero.Kicker>
  <Hero.Title>...</Hero.Title>
</Hero>
```

When the quick API is used (no children), the component renders defaults. When children are provided, it renders children. This is the `hasChildren` pattern using `React.Children.count(children) > 0`.

---

## 8. SectionHeader missing divider line

The `SectionHeader` component was missing the horizontal `flex-1 h-px bg-[var(--border)]` divider line between the number and the label. This is a key visual element in landing2.

Correct structure:
```tsx
<div className="flex items-center gap-4">
  {number && <span className="vista-text-label text-[var(--muted)] font-mono">{number}</span>}
  <div className="flex-1 h-px bg-[var(--border)]" />
  <span className="vista-text-label text-[var(--muted)]">{label}</span>
</div>
```

---

## 9. Open issues for Phase 2

- [ ] **Hero padding-top** — kicker still cut off even at 160px. Investigate if it's a mobile browser issue, CSS specificity conflict, or the `vista-container` class overriding padding
- [ ] **Navbar transparent mode** — if a future design needs transparent-on-load navbar (e.g. over a dark hero image), needs a prop: `<Navbar initialTransparent={true}>`
- [ ] **Demo app auto-reload** — consider using `npm link` or a workspace setup so library changes reflect instantly without reinstall
- [ ] **Storybook or visual regression** — manual screenshot review is slow; consider adding a simple visual test page per component
- [ ] **Dark mode** — CSS variables are set up for it but no toggle exists in the demo; needs a theme toggle component

---

## 10. Build & deploy checklist

Before pushing any library changes:

```bash
# In vista-ui root:
npm run build          # must succeed with 0 errors
tsc --noEmit          # TypeScript check (covered by tsup)

# In examples/demo:
npm install            # reinstall to pick up new dist
npm run build          # must succeed with 0 warnings about missing classes
```

Before sharing ngrok:
```bash
# Kill old server, reinstall, restart fresh
pkill -f "next"
cd examples/demo && npm install && node_modules/.bin/next dev --port 3000 &
sleep 8 && curl -s http://localhost:3000 > /dev/null && echo "UP"
```
