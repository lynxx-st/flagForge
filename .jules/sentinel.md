## 2024-07-22 - Critical Vulnerability: Hardcoded Secrets in Documentation

**Vulnerability:** The `README.md` file instructed developers to use `NEXT_PUBLIC_` prefixes for server-side secrets (`ADMIN_PASSWORD` and `ADMIN_EMAIL`). In a Next.js application, any variable prefixed with `NEXT_PUBLIC_` is embedded into the client-side JavaScript bundle, making it publicly accessible. This would expose sensitive credentials to anyone inspecting the application's source code.

**Learning:** Documentation, especially `.env` setup instructions, can be a source of critical security vulnerabilities. The presence of `NEXT_PUBLIC_` on a server-side secret is a major red flag. In this case, the application's actual implementation did not use these variables, which was a fortunate discrepancy. The code relied on a more secure role-based access control (RBAC) mechanism managed through the database and NextAuth session tokens.

**Prevention:**
1.  **Stricter `grep` Checks in CI/CD:** Implement automated checks that scan for `NEXT_PUBLIC_` prefixes on common secret key names (e.g., `PASSWORD`, `SECRET`, `KEY`, `TOKEN`) in environment variable files and documentation.
2.  **Secret Scanning:** Use tools like `git-secrets` or GitHub's secret scanning to detect secrets in the codebase, including in markdown files.
3.  **Developer Training:** Explicitly educate developers that `NEXT_PUBLIC_` means "publicly visible" and should never be used for secrets. All environment variable usage should be reviewed for this specific anti-pattern during code reviews.
4.  **Least Privilege for Environment Variables:** Only expose variables to the client that are absolutely necessary for the client-side application to function. All other variables should be kept on the server.