## 2024-05-24 - Accessible Icon-Only Buttons
**Learning:** Icon-only buttons are a common source of accessibility issues. Without a text label, screen reader users have no way of knowing the button's function.
**Action:** Always add a descriptive `aria-label` to any button that does not contain descriptive text. This provides a clear, accessible name for the button that screen readers can announce.

## 2026-02-01 - Semantic Labels and Loading Feedback
**Learning:** Using a semantic `<label>` element with the `htmlFor` attribute correctly associated with an input's `id` significantly improves accessibility and usability by providing a clear name for screen readers and a larger clickable target. Additionally, replacing generic "loading" states with specific visual cues like a spinning icon (e.g., `Loader2`) inside the action button provides more immediate and intuitive feedback for asynchronous operations.
**Action:** Ensure all form inputs have associated `<label>` elements and provide clear, localized loading indicators within interactive elements during network requests.
