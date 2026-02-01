## 2025-05-15 - Flag Validation Timing Attack
**Vulnerability:** Flag validation using standard string comparison (`===`) was vulnerable to timing attacks, potentially allowing an attacker to guess the flag character by character.
**Learning:** In challenge-based platforms like CTFs, any secret comparison must be constant-time. Standard equality operators in most languages (including JavaScript) bail out early on the first mismatch, leading to measurable timing differences.
**Prevention:** Always use constant-time comparison functions like `crypto.timingSafeEqual`. To handle variable-length inputs securely, hash both inputs to a fixed-length digest (e.g., using SHA-256) before performing the comparison.
