## 2025-05-14 - Timing-Safe Flag Comparison
**Vulnerability:** String comparison (`===`) for challenge flags was vulnerable to timing attacks.
**Learning:** In CTF applications, flags are sensitive secrets. Standard string comparison leaks information about the correct flag character-by-character.
**Prevention:** Use `crypto.timingSafeEqual` for all secret comparisons. If the strings have different or unknown lengths, hash them first (e.g., with SHA-256) to produce fixed-length buffers for the comparison.
