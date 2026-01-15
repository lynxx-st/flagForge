## 2024-07-22 - High-Contrast Focus Rings for Accessibility
**Learning:** A low-contrast focus ring offset, especially one that blends with the component's background color, can make keyboard navigation nearly impossible for users with visual impairments. Using a high-contrast offset color, such as the main background color, creates a "cutout" effect that ensures the focus state is always clearly visible.
**Action:** When implementing focus styles, always test against the component's background to ensure high contrast and clear visibility, especially in error states or on colored backgrounds.

## 2024-07-22 - Atomic Commits and Unintended Files
**Learning:** Running dependency installation commands can unintentionally create or modify project-level files like `pnpm-lock.yaml`. Including these files in a commit for a small, unrelated change is a critical error that makes the change un-mergeable. Commits must be atomic and focused on a single logical change.
**Action:** After running any dependency management commands, always check the git status to ensure no unintended files have been added or modified. Only stage files that are directly related to the task at hand.