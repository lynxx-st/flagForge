## 2026-02-01 - Optimizing Search and API Performance

**Learning:** Client-side filtering of large datasets is a significant performance bottleneck. In this codebase, the search functionality was fetching ALL problems (potentially thousands) from the API and filtering them in the browser. Moving search to the server-side using MongoDB regex/text search drastically reduces network payload and client-side CPU usage.

**Action:** Always check if list filtering is happening on the client or server. If client-side, refactor to server-side search. Also, use `Promise.all` to parallelize independent database queries in API routes to reduce response latency.
