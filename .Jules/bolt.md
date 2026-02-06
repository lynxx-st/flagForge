## 2025-02-13 - Leaderboard N+1 Query Optimization
**Learning:** The leaderboard API was performing 51 database queries (1 to fetch users + 50 to count documents) per request. This N+1 pattern is a significant bottleneck that can be solved with a single MongoDB aggregation using `$lookup`. Additionally, performing the count within a `$lookup` sub-pipeline is more memory-efficient than fetching full documents into a `$size` array.
**Action:** Always check for N+1 patterns in API routes that iterate over a list of items and perform additional queries. Prefer MongoDB aggregation for joins and counts.

## 2025-02-13 - Missing Schema Indexes
**Learning:** Critical performance indexes (like sorting fields or join keys) were missing from Mongoose schemas, even though they were mentioned as "established" in some project documentation.
**Action:** Verify the existence of indexes in the schema files even if documentation suggests they exist. Add missing indexes for frequently sorted or joined fields.
