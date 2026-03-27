## 2024-05-24 - Accessible Icon-Only Buttons
**Learning:** Icon-only buttons are a common source of accessibility issues. Without a text label, screen reader users have no way of knowing the button's function.
**Action:** Always add a descriptive `aria-label` to any button that does not contain descriptive text. This provides a clear, accessible name for the button that screen readers can announce.

## 2025-05-14 - Semantic Heading Hierarchy in Lists
**Learning:** Using multiple `h1` tags in a list of components (like cards) is a significant accessibility anti-pattern. Screen readers rely on a logical heading hierarchy to navigate the page, and multiple top-level headings can be confusing and break the document outline.
**Action:** Always use lower-level headings (like `h3` or `h4`) for items within a list or grid, and reserve `h1` for the main page title. Ensure visual styling is decoupled from the heading level by using Tailwind utility classes.
