## 2025-05-15 - Timing-Safe Flag Comparison
**Vulnerability:** Flag validation using standard string comparison (`===`) is susceptible to timing attacks, potentially leaking parts of the flag.
**Learning:** Standard string comparisons return early upon the first mismatch, creating a measurable time difference. CTF flags of variable lengths must be hashed before using `crypto.timingSafeEqual` because the latter requires buffers of identical length.
**Prevention:** Always use a "hash-then-compare" pattern for sensitive string comparisons where lengths may vary.
