## 2025-05-15 - Timing Attack Protection and Info Disclosure Prevention
**Vulnerability:** Flag validation using standard `===` comparison and Profile API leaking internal database structure via a `debug` object.
**Learning:** Standard string comparison in Node.js is not constant-time, allowing for timing attacks to potentially leak flag content byte-by-byte. Additionally, developer-left debug objects in production APIs pose a significant information disclosure risk.
**Prevention:** Always use `crypto.timingSafeEqual` for sensitive string comparisons (like flags or tokens). To handle variable-length strings, hash them first with SHA-256 to ensure equal-length buffers. Remove all debug-related code and objects before deploying API endpoints to production.
