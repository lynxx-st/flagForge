## 2026-02-01 - Enable indexing for core public routes

**Learning:** Routes that are public but client-side rendered (e.g., using 'use client') often lack metadata if not explicitly configured with a nested layout.tsx. Additionally, hardcoding a canonical URL in the root layout is a 'crawl trap' that tells search engines every page is a duplicate of the homepage.

**Action:** Remove hardcoded global canonicals and use nested layout.tsx files to export static metadata for client components. Ensure these routes are also allowed in next-sitemap.config.js and robots.txt.
