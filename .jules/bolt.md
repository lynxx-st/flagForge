## 2025-05-15 - Scalable Rank Calculation
**Learning:** Calculating user rank by fetching all users, sorting them in memory, and finding an index is an O(N) operation that consumes excessive memory and CPU on the server. Using `Model.countDocuments({ totalScore: { $gt: score } }) + 1` with a descending index on `totalScore` reduces this to an O(log N) database operation with minimal data transfer.
**Action:** Always prefer database-level count/aggregation for rankings and statistics instead of fetching all records to process them in application logic.

## 2025-05-15 - Avoiding Lockfile Noise
**Learning:** Running `pnpm install` in an environment with mismatched dependency versions (e.g., Next.js 16 vs TypeScript 5) can generate a massive `pnpm-lock.yaml` file that is unrelated to the task and creates PR noise.
**Action:** Exclude `pnpm-lock.yaml` from PRs unless specifically task-related, and always verify file changes before submission.
