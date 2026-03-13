# FAQ

Accordion-style frequently asked questions section. Supports one-at-a-time or all-independent expansion.

## Variants

- **Single (default)**: Only one item open at a time
- **Multiple**: `allowMultiple={true}` — any number can be open

## Props

### FAQ

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Section heading (lowercase) |
| `allowMultiple` | `boolean` | `false` | Allow multiple items open |
| `className` | `string` | — | Additional CSS classes |

### FAQ.Item

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `question` | `string` | — | Question text |
| `answer` | `string` | — | Plain text answer |
| `children` | `ReactNode` | — | JSX answer (overrides `answer`) |
| `defaultOpen` | `boolean` | `false` | Open on mount |

## Usage

```tsx
<FAQ title="common questions">
  <FAQ.Item
    question="How does pricing work?"
    answer="We charge per request, not per seat."
  />
  <FAQ.Item question="Can I self-host?">
    <p>Yes — our core engine is <strong>open-source</strong>.</p>
    <p>Deploy with our Helm charts in your own VPC.</p>
  </FAQ.Item>
</FAQ>
```

## Design notes (for Figma)

- **Max width**: 800px, centered
- **Item border**: 1px bottom `--border`
- **Question**: 16px medium, `--foreground`
- **Answer**: 15px, 1.6 line-height, `--muted`
- **Toggle icon**: 20px + sign, rotates 45° to × when open
- **Animation**: CSS grid-template-rows 0fr → 1fr, 0.3s cubic-bezier(0.16, 1, 0.3, 1)
- **Padding**: 20px vertical per item
- Do: Keep answers concise (2-4 sentences)
- Don't: Nest FAQs inside other FAQs

## Accessibility

- Toggle is a `<button>` with `aria-expanded`
- Content area uses `role="region"`
- Keyboard: Enter/Space to toggle
- Focus management: Focus stays on button after toggle
- No ARIA required for the grid-based height animation
