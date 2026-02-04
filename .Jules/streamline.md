## 2026-02-04 - Enhance Flag Submission UX
**Learning:** For asynchronous interactions like flag submission, providing immediate visual feedback by switching action icons to a loading spinner (e.g., `Loader2`) and disabling input fields prevents layout shift and duplicate submissions. Additionally, pairing a transient toast with a local error message near the focus area improves comprehension.
**Action:** Always link labels to inputs using `htmlFor` and `id`, and use `aria-invalid` for error states. Synchronize the clearing of local error messages and state flags when using timeouts.
