## 2025-05-15 - Information Disclosure and DoS Mitigation in Profile API
**Vulnerability:** The `/api/profile` endpoint was returning a `debug` object containing internal database field names and exploratory query results. Additionally, it calculated user rank by fetching and sorting all users in memory.
**Learning:** Debugging code and exploratory queries left in production routes can leak sensitive internal schema information. In-memory sorting for ranking is a common scalability bottleneck and DoS vector.
**Prevention:** Always remove debug objects and console logs before deploying. Use database-level aggregations or `countDocuments` with filters for ranking and statistics to ensure constant-time or logarithmic-time operations regardless of dataset size.
