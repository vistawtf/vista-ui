# Input

Form text input with optional label, error message, hint text, and icon slots.

## Variants

- **md (default)**: Standard form input, 44px height
- **sm**: Compact input, 36px height

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Label text above input |
| `error` | `string` | — | Error message below input |
| `hint` | `string` | — | Hint text below input (hidden when error) |
| `size` | `'sm' \| 'md'` | `'md'` | Input size |
| `leftIcon` | `ReactNode` | — | Icon inside input, left side |
| `rightIcon` | `ReactNode` | — | Icon inside input, right side |
| `className` | `string` | — | Wrapper CSS classes |

Also accepts all standard `<input>` HTML attributes.

## Usage

```tsx
// Minimal
<Input placeholder="Enter your email" />

// Full
<Input
  label="Email Address"
  type="email"
  placeholder="you@company.com"
  error={errors.email}
  hint="We'll never share your email"
  leftIcon={<MailIcon />}
/>
```

## Design notes (for Figma)

- **Border radius**: 4px
- **Background**: `--surface-hover`
- **Border**: 1px solid `--border`
- **Focus border**: `--ultra-orange`
- **Focus ring**: 0 0 0 3px rgba(255,82,51,0.1)
- **Error border**: red-500
- **Error focus ring**: 0 0 0 3px rgba(239,68,68,0.1)
- **Padding**: md=16px horizontal, sm=12px horizontal
- **Font size**: md=15px, sm=13px
- **Label**: `vista-text-body-sm` font-medium
- **Error/hint**: 12px
- Do: Always use a label for form inputs
- Don't: Use leftIcon and rightIcon simultaneously with short inputs

## Accessibility

- `<label>` with `htmlFor` linked to input `id`
- `aria-invalid` set when `error` is present
- `aria-describedby` links to error or hint text
- Error messages use `role="alert"`
- `forwardRef` for ref access
