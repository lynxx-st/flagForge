## 2024-07-16 - Over-fetching on Critical Pages

**Learning:** I discovered a significant performance anti-pattern in `app/(main)/home/page.tsx`. The `fetchLatestRoom` function was fetching 400 problems from the `/api/problems` endpoint, but only ever used the first one. This created unnecessary load on the server, increased network latency, and slowed down client-side rendering.

**Action:** When inspecting components, especially those on critical paths like the homepage, I must always verify that API calls are fetching only the data that is strictly necessary. A `limit` parameter in an API call is a major code smell if the component isn't rendering a list of that size. I will apply this scrutiny to all data-fetching components going forward.