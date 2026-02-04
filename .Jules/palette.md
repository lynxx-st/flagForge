## 2024-05-24 - Accessible Icon-Only Buttons
**Learning:** Icon-only buttons are a common source of accessibility issues. Without a text label, screen reader users have no way of knowing the button's function.
**Action:** Always add a descriptive `aria-label` to any button that does not contain descriptive text. This provides a clear, accessible name for the button that screen readers can announce.

## 2025-05-15 - Enhanced Submission Feedback & Accessibility
**Learning:** Proper semantic labeling and real-time loading feedback significantly improve the "feel" and accessibility of core interactions like flag submission.
**Action:** Always link labels to inputs using `htmlFor`/`id`, use `aria-invalid` for error states, and provide inline loading spinners in action buttons.
