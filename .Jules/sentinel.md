## 2025-05-23 - Timing Attack Mitigation in Flag Validation
**Vulnerability:** Flags were compared using simple string equality (`===`), which is vulnerable to timing attacks that can reveal how many characters of a flag are correct.
**Learning:** Standard string comparison in many JavaScript engines returns early as soon as a mismatch is found, leaking information about the matching prefix length.
**Prevention:** Use `crypto.timingSafeEqual` for sensitive comparisons. Since it requires equal-length buffers, hash both inputs (e.g., using SHA-256) before comparison to securely handle variable-length secrets without leaking length or character info.
