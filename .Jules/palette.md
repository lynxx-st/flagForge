## 2024-05-24 - Accessible Icon-Only Buttons
**Learning:** Icon-only buttons are a common source of accessibility issues. Without a text label, screen reader users have no way of knowing the button's function.
**Action:** Always add a descriptive `aria-label` to any button that does not contain descriptive text. This provides a clear, accessible name for the button that screen readers can announce.

## 2024-05-24 - Semantic Labels and Async Feedback
**Learning:** Using generic text elements like `<p>` for form labels prevents screen readers from associating them with inputs and denies users the ability to focus inputs by clicking the label. Additionally, purely visual loading indicators (like pulsing) are less clear than explicit "Submitting..." states with icons.
**Action:** Always use `<label htmlFor="...">` for form titles and ensure inputs have matching `id`s. Provide explicit text-based loading states in buttons during asynchronous operations to improve clarity and accessibility.
