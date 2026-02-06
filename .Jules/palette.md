## 2024-05-24 - Accessible Icon-Only Buttons
**Learning:** Icon-only buttons are a common source of accessibility issues. Without a text label, screen reader users have no way of knowing the button's function.
**Action:** Always add a descriptive `aria-label` to any button that does not contain descriptive text. This provides a clear, accessible name for the button that screen readers can announce.

## 2026-02-06 - Enhanced Floating Widget Interactivity
**Learning:** For interactive floating widgets like chat bots, basic accessibility (ARIA labels) is not enough. Users expect intuitive keyboard behavior (Escape to close) and smooth focus transitions (auto-focusing the primary input on open) to reduce friction.
**Action:** When creating or improving floating UI components, always implement auto-focus for the primary interaction element (with proper cleanup) and provide a global Escape key listener to dismiss the component easily.
