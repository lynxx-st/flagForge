# Sentinel's Journal - CRITICAL LEARNINGS ONLY
## 2024-08-01 - README.md Exposes Server-Side Secrets via NEXT_PUBLIC_ Prefix

**Vulnerability:** The project's `README.md` file incorrectly instructed developers to prefix sensitive environment variables (`ADMIN_EMAIL`, `ADMIN_PASSWORD`) with `NEXT_PUBLIC_`.

**Learning:** In Next.js, any environment variable prefixed with `NEXT_PUBLIC_` is inlined into the client-side JavaScript bundle at build time. This makes the variable publicly accessible, completely exposing its value. This misconfiguration, often called a "footgun," creates a severe security risk by guiding developers to leak secrets.

**Prevention:** All project documentation must explicitly distinguish between client-side (safe) and server-side (secret) environment variables. A clear warning should be added to the `.env` section of the `README.md` to prevent developers from using the `NEXT_PUBLIC_` prefix for any variable that is not explicitly intended to be public.
