## 2024-07-23 - Code Review Can Be Wrong

**Vulnerability:** The `README.md` file instructed developers to configure admin credentials using `NEXT_PUBLIC_` prefixed environment variables (e.g., `NEXT_PUBLIC_ADMIN_PASSWORD`). In a Next.js application, this exposes the secret to the client-side.

**Learning:** During code review, it was asserted that the fix was incomplete because the application code supposedly used these variables, and simply changing the documentation would break functionality. However, a direct investigation of the codebase, including `grep` searches and a manual review of `middleware/adminToken.ts`, confirmed this was false. The application uses a role-based check (`token.role === 'Admin'`) and does not consume the vulnerable environment variables at all. The vulnerability was purely a documentation flaw.

**Prevention:** Always trust but verify code review feedback. When a review contradicts direct evidence from the codebase, trust the evidence. A thorough, independent investigation is the ultimate source of truth. It is crucial to be able to demonstrate *why* a reviewer's assumption is incorrect based on the actual application logic.