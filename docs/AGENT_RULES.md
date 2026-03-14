# Agent Rules — vista-ui Component Library

> Read this before working on any component or demo task.

---

## Core principle: demo changes must improve the library

The demo (`examples/demo/`) exists to test the library. When Isaac reports a visual bug or requests a change in the demo, ask:

**"Is this a library problem or a demo problem?"**

- **Library problem** → fix the component in `src/components/`, rebuild, reinstall in demo, verify
- **Demo problem** → fix only the demo page, but document why it's demo-specific

Never patch only the demo and call it done. If the library has the same issue, fix the library.

---

## How to handle a visual bug report

1. Reproduce it — open the demo and confirm what's wrong
2. Trace the root cause — is it in the component source, CSS, or how the demo uses the component?
3. Fix the right layer:
   - Component logic → `src/components/[Name]/[Name].tsx`
   - Global styles → `src/styles.css`
   - Demo usage → `examples/demo/app/...`
4. If it's a library fix: rebuild → reinstall in demo → restart server → screenshot → verify
5. Document the learning in `docs/LESSONS_LEARNED.md` if it's a pattern others should know

---

## Build workflow (mandatory after any library change)

```bash
# 1. Build the library
cd /root/clawd/vistawtf/vista-ui
npm run build

# 2. Reinstall in demo
cd examples/demo
npm install --prefer-offline

# 3. Restart dev server
pkill -f "next"
node_modules/.bin/next dev --port 3000 > /tmp/demo-dev.log 2>&1 &
sleep 10 && curl -s http://localhost:3000 > /dev/null && echo "UP"
```

Skipping step 2 means the demo still uses the old dist.

---

## Spacing and layout in library components

Tailwind v4 does NOT scan `node_modules/@vistawtf/ui/dist/` in consumer apps by default. Tailwind utility classes for spacing (`pt-[XXpx]`, `gap-8`, etc.) written inside library components will silently produce no output in consumer apps unless the consumer adds an `@source` directive.

**For layout-critical spacing (padding, margin, min-height), use inline styles or CSS classes defined in `src/styles.css` — not Tailwind utilities.**

```tsx
// ❌ Breaks silently in consumer apps
<div className="pt-[160px]">

// ✅ Always works
<div style={{ paddingTop: '160px' }}>

// ✅ Also works if defined in styles.css
<div className="vista-hero-content">
```

Tailwind utilities are fine for: colors, borders, hover states, transitions, decorative properties.

---

## CSS tokens — no hardcoded values

All colors must use CSS custom properties:

```
var(--ultra-orange)   → brand orange
var(--background)     → page background
var(--foreground)     → primary text
var(--surface)        → card/panel background
var(--border)         → default border
var(--muted)          → secondary text
```

Exception: `var(--ultra-orange)` with Tailwind `/20` opacity modifier doesn't work in border declarations. Use `rgba(255, 82, 51, 0.2)` explicitly.

---

## Git rules

Always verify the remote before pushing:

```bash
git remote -v  # confirm it points to vistawtf/vista-ui
```

Always commit as enti-bot:

```bash
git -c user.name="enti-bot" -c user.email="enti-bot@users.noreply.github.com" commit -m "..."
```

---

## When to update LESSONS_LEARNED.md

After fixing a bug that:
- Was caused by a non-obvious technical constraint (e.g. Tailwind v4 scan behavior)
- Could affect future agents working on this repo
- Reveals a pattern in how the library should be built

Add a section to `docs/LESSONS_LEARNED.md` with: what happened, root cause, correct fix, rule going forward.
