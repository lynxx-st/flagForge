## 2025-02-04 - Canonical trapping in root layouts
**Learning:** Setting a hardcoded canonical URL like `canonical: "/"` in a Next.js root layout causes all subpages to inherit that canonical, effectively telling search engines that the entire site is a duplicate of the homepage. This severely hurts indexing of dynamic content.
**Action:** Avoid setting global canonical URLs in the root layout. Instead, allow Next.js to handle them or set them dynamically in page-level metadata.

## 2025-02-04 - Sitemap exclusion of public routes
**Learning:** Excluding core public routes from `next-sitemap.config.js` while also disallowing them in `robots.txt` prevents search engines from discovering the most valuable parts of the application.
**Action:** Regularly audit `SITEMAP_EXCLUDE` to ensure it only contains truly private or redundant routes. Ensure `robots.txt` policies match the sitemap's intent.
