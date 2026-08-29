## 2026-01-31 - [Information Disclosure & Timing Attack hardening]
**Vulnerability:** API endpoints were leaking sensitive challenge data (hints and admin emails) and were susceptible to timing attacks on flag validation.
**Learning:** Using exclusive selection (e.g., `.select("-flag")`) in Mongoose queries is dangerous because new sensitive fields added to the schema are included by default. Traditional string comparison (`===`) for flag validation is vulnerable to timing attacks, and `timingSafeEqual` requires careful handling for strings of different lengths.
**Prevention:** Prefer inclusive selection in API responses or ensure all sensitive fields are explicitly excluded. Use HMAC-SHA256 to normalize flag lengths before constant-time comparison to reliably prevent timing attacks.
