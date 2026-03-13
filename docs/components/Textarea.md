# Textarea

Multi-line text input with label, error, hint, and configurable resize behavior.

## Variants

No visual variants — uses the same styling as Input.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Label text |
| `error` | `string` | — | Error message |
| `hint` | `string` | — | Hint text (hidden when error) |
| `rows` | `number` | `4` | Initial visible rows |
| `resize` | `'none' \| 'vertical' \| 'both'` | `'vertical'` | Resize behavior |
| `className` | `string` | — | Wrapper CSS classes |

Also accepts all standard `<textarea>` HTML attributes.

## Usage

```tsx
<Textarea
  label="System Prompt"
  placeholder="Describe what this agent should do..."
  rows={6}
  resize="vertical"
  hint="Markdown supported. Keep it under 2000 tokens."
/>
```

## Design notes (for Figma)

- **Border radius**: 4px
- **Background**: `--surface-hover`
- **Border**: 1px solid `--border`
- **Padding**: 16px horizontal, 12px vertical
- **Font**: 15px, same as Input md
- **Focus**: Orange border + 3px ring (same as Input)
- Do: Set a sensible default `rows` for the expected content length
- Don't: Use `resize="both"` — it breaks layout predictability

## Accessibility

- `<label>` with `htmlFor`
- `aria-invalid` on error
- `aria-describedby` links to error or hint
- Error messages use `role="alert"`
- `forwardRef` for ref access
