## 2025-05-22 - Information Disclosure in Public API Endpoints
**Vulnerability:** API endpoints (like `/api/profile`) including a "debug" object that explicitly exposes internal database schema, field names, and results of exploratory queries.
**Learning:** Developers might leave exploratory or diagnostic code in production APIs to troubleshoot data structure issues without realizing it leaks internal architecture to all authenticated users.
**Prevention:** Always remove diagnostic "debug" objects from production API responses. Use server-side logging for troubleshooting instead of returning internal state to the client.
