## 2025-05-15 - [Optimizing Leaderboard with Aggregation]
**Learning:** Sequential database queries (N+1 problem) in API routes significantly degrade performance as data scales. Using MongoDB's aggregation pipeline with `$lookup` and `$size` can collapse dozens of database roundtrips into a single efficient query.
**Action:** Always audit map loops containing database calls in API routes and replace them with aggregation pipelines or `Promise.all` where appropriate.
