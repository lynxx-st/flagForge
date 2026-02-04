## 2025-05-15 - Profile API Information Leakage and Resource Exhaustion
**Vulnerability:** The `/api/profile` endpoint leaked internal database schema through a `debug` object in the response and performed an O(N) in-memory sort/find to calculate user rank, leading to potential Information Leakage and Denial of Service (DoS) as the user base grows.
**Learning:** Debug objects left in production APIs are a common source of information leakage. In-memory processing of entire database collections for simple stats (like rank) is a major scalability bottleneck.
**Prevention:** Always use efficient database-level aggregations or `countDocuments` for statistics and ensure all debug code is removed or gated behind admin-only checks before deployment.
