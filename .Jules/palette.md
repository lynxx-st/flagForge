## 2024-05-24 - Accessible Icon-Only Buttons
**Learning:** Icon-only buttons are a common source of accessibility issues. Without a text label, screen reader users have no way of knowing the button's function.
**Action:** Always add a descriptive `aria-label` to any button that does not contain descriptive text. This provides a clear, accessible name for the button that screen readers can announce.

## 2025-05-15 - Enhancing Chat Micro-Interactions
**Learning:** For interactive components like chat widgets, providing immediate feedback during asynchronous operations (like "thinking" or sending) significantly improves perceived performance. Additionally, auto-focusing the input field when the component is opened reduces user friction and clarifies the next action.
**Action:** Implement loading spinners on action buttons and use `useEffect` with `useRef` to auto-focus primary inputs when modal/drawer-like components are opened. Always ensure icon-only buttons have ARIA labels even when they have tooltips or placeholders.
