## 2024-05-24 - Accessible Icon-Only Buttons
**Learning:** Icon-only buttons are a common source of accessibility issues. Without a text label, screen reader users have no way of knowing the button's function.
**Action:** Always add a descriptive `aria-label` to any button that does not contain descriptive text. This provides a clear, accessible name for the button that screen readers can announce.

## 2025-02-14 - Semantic Heading Hierarchy in Lists
**Learning:** Using `h1` tags within a list of components (like cards) creates multiple top-level headings, which breaks the document structure for screen readers and search engines.
**Action:** Use lower-level headings (like `h3`) for list items to maintain a logical hierarchy under the page's main `h1`.
