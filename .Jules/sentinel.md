## 2025-05-14 - Constant-Time Flag Validation
**Vulnerability:** Flag validation using standard string comparison (`===`) is vulnerable to timing attacks, allowing an attacker to brute-force a flag by measuring response times.
**Learning:** Even in high-level frameworks like Next.js, low-level timing attacks are possible when comparing secrets.
**Prevention:** Always use `crypto.timingSafeEqual` with fixed-length buffers (like SHA-256 hashes) for secret comparisons.

## 2025-05-14 - Information Disclosure in API Lists
**Vulnerability:** API endpoints returning lists of challenges were only excluding the `flag` field, but leaking `hints` (breaking game mechanics) and `uploadedBy` (exposing admin emails).
**Learning:** Default Mongoose queries return all fields unless explicitly excluded. Over-reliance on partial exclusions (`-flag`) is risky.
**Prevention:** Explicitly list allowed fields using `.select()` or thoroughly review and exclude all sensitive fields in API responses.

## 2025-05-14 - Debug Info Leakage
**Vulnerability:** The `/api/profile` endpoint was returning a `debug` object that listed internal database field names and structure.
**Learning:** Leftover development/debug code in production APIs is a common source of information disclosure.
**Prevention:** Use environment variables to gate debug information or, preferably, remove it entirely before merging to main.
