## 2025-05-14 - [Aggregation for N+1 problems]
**Learning:** In Next.js API routes with Mongoose, fetching related counts for a list of items (e.g., completed rooms for users in a leaderboard) can lead to a significant N+1 query problem. Using MongoDB aggregation (`$match` with `$in`, followed by `$group`) allows fetching all necessary counts in a single additional query, drastically reducing roundtrips.
**Action:** Always check for loops containing database queries and replace them with batch queries or aggregation pipelines.

## 2025-05-14 - [Parallelizing independent queries]
**Learning:** Sequential `await` calls for independent database queries (like fetching a paginated list and its total count) unnecessarily inflate response time. Using `Promise.all` allows these I/O-bound operations to run concurrently.
**Action:** Identify independent queries in API handlers and wrap them in `Promise.all`.
