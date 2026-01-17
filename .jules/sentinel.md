## 2024-05-22 - Insecure `NEXT_PUBLIC_` Prefix for Admin Credentials in Documentation
**Vulnerability:** The `README.md` file instructed developers to use `NEXT_PUBLIC_` prefixes for `ADMIN_EMAIL` and `ADMIN_PASSWORD` environment variables.
**Learning:** This exposed sensitive credentials to the client-side, making them publicly accessible through browser developer tools. The vulnerability was not in the application code but in the setup documentation, creating a "footgun" for new developers.
**Prevention:** All sensitive credentials and secrets must be stored in server-side-only environment variables (without the `NEXT_PUBLIC_` prefix). Documentation must be audited for security best practices just like application code.
