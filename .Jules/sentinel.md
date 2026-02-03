## 2025-05-15 - [Information Disclosure in Profile API]
**Vulnerability:** The `/api/profile` endpoint was leaking internal database structure, test query results, and available fields via a `debug` object.
**Learning:** Legacy debug code often remains in production-ready routes if not explicitly audited. This information can be used by attackers to map out the database schema and identify potential injection points.
**Prevention:** Always remove debug objects and internal exploration logic before moving code to production. Use environment-specific logging instead of returning debug data in API responses.

## 2025-05-15 - [Timing Attack on Flag Validation]
**Vulnerability:** Flags were being compared using standard string equality (`===`), which is susceptible to timing attacks.
**Learning:** In a CTF context, timing side-channels can be exploited to guess the flag character by character based on how long the comparison takes.
**Prevention:** Always use constant-time comparison for secrets or flags. Hashing both inputs with SHA-256 before using `crypto.timingSafeEqual` ensures that even variable-length inputs are handled securely without leaking timing information.
