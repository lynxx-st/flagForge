## 2024-07-25 - Provide Immediate Feedback for Invalid User Actions

**Learning:** When a user action cannot be completed (e.g., submitting a form), the system must provide immediate, clear, and actionable feedback. Silently blocking an action, even with client-side validation, creates a confusing and frustrating user experience. Users are left wondering if the system is broken or if they did something wrong.

**Action:** In any form or user input flow, always connect client-side validation logic directly to the UI. If a check fails, display a descriptive, temporary message that explains *why* the action was blocked and what the user should do next. This transforms a moment of friction into a moment of guidance, improving user confidence and flow.

## 2025-05-14 - Use Safe Affordances for Irreversible Actions

**Learning:** Actions that result in an irreversible negative consequence (like point deduction in a gamified environment) should always have a "safe affordance"—a secondary confirmation step. This prevents frustration from accidental clicks and builds user trust.

**Action:** For buttons that trigger point deductions or data deletion, implement a two-step "Confirm/Cancel" flow. Clearly display the consequence (e.g., "-10 pts") on the confirmation button. Additionally, clear any stale error messages when the user starts correcting their input to maintain a responsive and non-punitive UI atmosphere.
