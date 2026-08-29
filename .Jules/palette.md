## 2024-05-24 - Accessible Icon-Only Buttons
**Learning:** Icon-only buttons are a common source of accessibility issues. Without a text label, screen reader users have no way of knowing the button's function.
**Action:** Always add a descriptive `aria-label` to any button that does not contain descriptive text. This provides a clear, accessible name for the button that screen readers can announce.

## 2025-05-14 - Loading State Feedback & Label Accessibility
**Learning:** Users need immediate, clear feedback during asynchronous operations like flag submission. Combining a loading spinner with a text change within the button itself is highly effective. Additionally, replacing generic text with semantic labels improves both accessibility and the overall interactive experience by providing a clearer connection between instructions and inputs.
**Action:** Always provide a visual loading indicator (like a spinner) inside the primary action button for async tasks. Use semantic <label> elements linked via htmlFor/id instead of generic <p> or <span> tags for input descriptions.
