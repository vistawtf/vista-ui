# Select

Native dropdown select with label, error state, and custom chevron. Uses the native `<select>` for maximum accessibility and mobile support.

## Variants

- **md (default)**: Standard select, 44px height
- **sm**: Compact select, 36px height

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Label text above select |
| `error` | `string` | — | Error message below select |
| `options` | `{ value: string; label: string }[]` | — | Select options |
| `placeholder` | `string` | — | Placeholder option (disabled) |
| `size` | `'sm' \| 'md'` | `'md'` | Select size |
| `className` | `string` | — | Wrapper CSS classes |

Also accepts all standard `<select>` HTML attributes.

## Usage

```tsx
<Select
  label="Model"
  placeholder="Choose a model"
  options={[
    { value: 'claude', label: 'Claude 3.5 Sonnet' },
    { value: 'gpt4', label: 'GPT-4o' },
    { value: 'gemini', label: 'Gemini Pro' },
  ]}
  error={errors.model}
/>
```

## Design notes (for Figma)

- **Border radius**: 4px
- **Background**: `--surface-hover`
- **Border**: 1px solid `--border`
- **Chevron**: 16px SVG, `--muted` color, right-aligned
- **Focus**: Same as Input (orange border + ring)
- **Native appearance**: Hidden, custom chevron overlaid
- Do: Provide a placeholder for required selects
- Don't: Use for more than ~15 options (use a searchable combobox instead)

## Accessibility

- Uses native `<select>` (keyboard, screen reader, mobile all work natively)
- `<label>` with `htmlFor`
- `aria-invalid` on error
- `aria-describedby` links to error
- `forwardRef` for ref access
