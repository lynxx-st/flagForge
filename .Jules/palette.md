## 2024-05-24 - Accessible Icon-Only Buttons
**Learning:** Icon-only buttons are a common source of accessibility issues. Without a text label, screen reader users have no way of knowing the button's function.
**Action:** Always add a descriptive `aria-label` to any button that does not contain descriptive text. This provides a clear, accessible name for the button that screen readers can announce.

## 2026-02-05 - Enhanced Interactive Widgets
**Learning:** Interactive widgets like chat drawers or floating modals significantly benefit from auto-focus and keyboard shortcuts. Without auto-focus, users face unnecessary friction when trying to interact (e.g., typing a message). Without an Escape key listener, closing the widget can be difficult for keyboard-only users.
**Action:** When implementing interactive overlays (like `FloatingChat`), always use `useRef` and `useEffect` to focus the primary input on open, and register a global 'keydown' listener for the 'Escape' key to ensure easy closure and accessibility.
