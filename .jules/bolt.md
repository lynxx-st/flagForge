## 2025-01-31 - [Search Optimization]
**Learning:** Moving search logic from client-side to server-side using Mongoose `$text` index dramatically reduces network traffic and CPU usage compared to fetching all records and filtering locally. Also, parallelizing database queries using `Promise.all` in the API route noticeably improves response times.
**Action:** Always prefer server-side search for large datasets and look for opportunities to parallelize independent database queries.
