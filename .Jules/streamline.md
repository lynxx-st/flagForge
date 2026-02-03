## 2024-07-25 - Provide Immediate Feedback for Invalid User Actions

**Learning:** When a user action cannot be completed (e.g., submitting a form), the system must provide immediate, clear, and actionable feedback. Silently blocking an action, even with client-side validation, creates a confusing and frustrating user experience. Users are left wondering if the system is broken or if they did something wrong.

**Action:** In any form or user input flow, always connect client-side validation logic directly to the UI. If a check fails, display a descriptive, temporary message that explains *why* the action was blocked and what the user should do next. This transforms a moment of friction into a moment of guidance, improving user confidence and flow.

## 2026-02-03 - Implement Safe Affordances for Destructive Actions
**Learning:** Actions that have irreversible or "destructive" consequences (e.g., deducting points for a hint) should always include a confirmation step. This prevents accidental triggers and builds user confidence by providing a clear "point of no return".
**Action:** Before executing an action with significant consequences, toggle the UI to a confirmation state (e.g., "Confirm" and "Cancel" buttons). Keep these buttons visible but disabled during the asynchronous operation to provide continuous feedback and prevent layout shifts.
