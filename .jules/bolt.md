## 2024-07-25 - Client-Side Search Bottleneck
**Learning:** The problems page (`app/(main)/problems/page.tsx`) implements search by fetching all records from the `/api/problems` endpoint and filtering them on the client. This is a major performance anti-pattern that scales poorly and causes significant frontend load.
**Action:** Prioritize moving search logic to the backend. The API endpoint should be extended to accept a search query parameter, allowing the database to perform the filtering efficiently. This will be my immediate optimization task.
