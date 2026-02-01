## 2025-05-15 - Timing Attack in Flag Validation
**Vulnerability:** Flags were compared using standard string equality (`===`), which is vulnerable to timing attacks.
**Learning:** In a CTF platform, flag validation is a critical security point. Even though the impact might be lower than password leakage, it's a fundamental security flaw for this specific domain. Standard string comparison returns early, leaking information about the correctness of characters.
**Prevention:** Always use timing-safe comparison (like `crypto.timingSafeEqual`) for secrets, flags, or any data where response time could leak information. Hashing inputs with a fixed-length algorithm (like SHA-256) first is necessary because `timingSafeEqual` requires buffers of equal length.
