## 2025-05-14 - Optimized Database Queries and Indexes
**Learning:** The leaderboard API was using an N+1 query pattern (1 query to get users + 50 queries to count completions), and the profile API was fetching ALL users into memory to calculate a single user's rank. Additionally, core fields like `totalScore`, `userId`, and `createdAt` lacked database indexes.
**Action:** Used MongoDB aggregation with `$lookup` for the leaderboard to reduce roundtrips to 1, and used `countDocuments` with a comparison filter for rank calculation. Added essential indexes to the Mongoose schemas.
