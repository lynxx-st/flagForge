## 2024-05-24 - Accessible Icon-Only Buttons
**Learning:** Icon-only buttons are a common source of accessibility issues. Without a text label, screen reader users have no way of knowing the button's function.
**Action:** Always add a descriptive `aria-label` to any button that does not contain descriptive text. This provides a clear, accessible name for the button that screen readers can announce.

## 2025-01-24 - Semantic Labels for Form Inputs
**Learning:** Using generic text elements (like `<p>` or `<span>`) as labels for form inputs is an accessibility anti-pattern. It prevents screen readers from correctly associating the label with the input and reduces the clickable area for users.
**Action:** Always use semantic `<label>` elements with the `htmlFor` attribute properly linked to the input's `id`. This ensures the label is programmatically associated with the input, improving accessibility and usability.
