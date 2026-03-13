# Button

The primary interactive element. Supports three visual variants, three sizes, loading states, icons, and the `asChild` pattern for composing with links.

## Variants

- **primary**: Solid orange background (`--ultra-orange`), white text. Use for the main action on a page.
- **secondary**: Transparent with a border (`--border`). Use for secondary actions alongside a primary button.
- **ghost**: No border, no background. Use for tertiary actions, toolbar buttons, or inline links styled as buttons.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Disable interaction |
| `loading` | `boolean` | `false` | Show spinner, disable interaction |
| `icon` | `ReactNode` | — | Left icon slot |
| `iconRight` | `ReactNode` | — | Right icon slot |
| `asChild` | `boolean` | `false` | Render as child element (for Link wrapping) |
| `className` | `string` | — | Additional CSS classes |

Also accepts all standard `<button>` HTML attributes.

## Usage

```tsx
// Minimal
<Button>Subscribe</Button>

// Full
<Button
  variant="primary"
  size="lg"
  loading={isSubmitting}
  icon={<PlusIcon />}
  onClick={handleClick}
>
  Create Agent
</Button>

// As link wrapper
<Button variant="secondary" asChild>
  <a href="/docs">Read the docs →</a>
</Button>
```

## Design notes (for Figma)

- **Colors**: Primary uses `--ultra-orange` (#FF5233), hover `--medium-orange` (#FF7043)
- **Border radius**: 3px on all sizes
- **Padding**: sm=16/8, md=24/10, lg=32/14 (px/py)
- **Font**: 500 weight, tracking 0.02em
- **Hover (primary)**: translateY(-1px), box-shadow 0 4px 12px rgba(255,82,51,0.25)
- **Hover (secondary)**: bg `--surface-hover`, border `--border-hover`
- **Transition**: all 0.2s cubic-bezier(0.16, 1, 0.3, 1)
- **Loading spinner**: 2px border, currentColor, 0.6s rotation
- Do: Use primary for one main CTA per section
- Do: Use secondary for actions paired with a primary button
- Don't: Use multiple primary buttons in the same section
- Don't: Put loading state on ghost buttons

## Accessibility

- Uses `<button>` element with native semantics
- `disabled` attribute applied when `loading` or `disabled`
- Spinner is `aria-hidden="true"`
- Focus ring: 2px outline with `--ultra-orange`, 2px offset
- Keyboard: Enter/Space to activate
- `forwardRef` for ref access
