## 2024-07-25 - Provide Immediate Feedback for Invalid User Actions

**Learning:** When a user action cannot be completed (e.g., submitting a form), the system must provide immediate, clear, and actionable feedback. Silently blocking an action, even with client-side validation, creates a confusing and frustrating user experience. Users are left wondering if the system is broken or if they did something wrong.

**Action:** In any form or user input flow, always connect client-side validation logic directly to the UI. If a check fails, display a descriptive, temporary message that explains *why* the action was blocked and what the user should do next. This transforms a moment of friction into a moment of guidance, improving user confidence and flow.

## 2024-07-26 - Implement Safe Affordances for Costly Actions

**Learning:** Actions that have irreversible or costly consequences (such as point deductions in a CTF platform) should always have a confirmation step. This prevents accidental triggers and ensures the user is fully aware of the outcome before proceeding.

**Action:** For any action that deducts points, deletes data, or triggers a significant state change, implement a two-step confirmation flow. Use clear, descriptive button labels like "Confirm" and "Cancel" and provide a brief warning about the consequences.
