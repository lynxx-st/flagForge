## 2024-05-24 - Accessible Icon-Only Buttons
**Learning:** Icon-only buttons are a common source of accessibility issues. Without a text label, screen reader users have no way of knowing the button's function.
**Action:** Always add a descriptive `aria-label` to any button that does not contain descriptive text. This provides a clear, accessible name for the button that screen readers can announce.

## 2025-05-15 - Challenge Card Semantic Hierarchy & Readability
**Learning:** Using multiple h1 tags in a list of components (like cards) breaks semantic heading hierarchy; use lower-level headings (like h3) for list items to maintain a logical document structure for assistive technologies. Additionally, maintain a minimum font size of text-sm (14px) for descriptive text to meet accessibility standards.
**Action:** Corrected components/QuestionCards.tsx to use h3 for titles, p for metadata/descriptions, and increased font size from 0.5rem to text-sm.
