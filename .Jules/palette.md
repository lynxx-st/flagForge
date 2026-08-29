## 2024-05-24 - Accessible Icon-Only Buttons
**Learning:** Icon-only buttons are a common source of accessibility issues. Without a text label, screen reader users have no way of knowing the button's function.
**Action:** Always add a descriptive `aria-label` to any button that does not contain descriptive text. This provides a clear, accessible name for the button that screen readers can announce.

## 2024-05-25 - Dynamic ARIA Labels for Toggle Buttons
**Learning:** For toggle buttons (like a theme switcher), a static `aria-label` (e.g., "Toggle theme") is good, but a dynamic one is better. Announcing the *action* that will be performed (e.g., "Switch to light mode") provides clearer, more immediate context for screen reader users.
**Action:** When implementing toggle buttons, use component state to dynamically update the `aria-label` to reflect the upcoming change, not just the button's identity.
