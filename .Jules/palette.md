## 2024-05-24 - Accessible Icon-Only Buttons
**Learning:** Icon-only buttons are a common source of accessibility issues. Without a text label, screen reader users have no way of knowing the button's function.
**Action:** Always add a descriptive `aria-label` to any button that does not contain descriptive text. This provides a clear, accessible name for the button that screen readers can announce.

## 2025-05-15 - Global Escape Listener Safety
**Learning:** When attaching global keyboard event listeners (e.g., for 'Escape' key), checking if (e.defaultPrevented) returns prevents intercepting events already handled by more specific interactive UI components like dropdowns, modals, or tooltips.
**Action:** Always include if (e.defaultPrevented) return; in global keydown listeners to respect event bubbling and prevent unexpected UI behavior.
