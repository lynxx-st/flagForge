## 2026-02-06 - Information Exposure via Debug and Error Data
**Vulnerability:** The `/api/profile` endpoint leaked internal database schema details and query results via a `debug` object. Additionally, `/api/problems` leaked all challenge hints and administrative emails in public listings, and returned raw error objects in `catch` blocks.
**Learning:** Debug code left in production is a significant information leak. Public APIs should explicitly exclude sensitive fields (`select(-field)`) and return generic error messages.
**Prevention:** Use strictly defined DTOs or explicit field selection for all public-facing APIs. Ensure debug blocks are conditionally enabled or removed before production.
