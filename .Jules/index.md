## 2026-02-02 - Root Layout Canonical Anti-pattern
**Learning:** Hardcoding a canonical URL in the root layout (`app/layout.tsx`) in Next.js causes all pages to be treated as duplicates of the homepage by search engines, severely impacting SEO.
**Action:** Remove hardcoded canonicals from root layouts and implement them in specific page or route group layouts instead.

## 2026-02-02 - Metadata for Client Components
**Learning:** In Next.js App Router, "use client" pages cannot export metadata. This often leads to missing SEO tags for major site sections if not handled in a parent `layout.tsx`.
**Action:** Use nested `layout.tsx` (server components) to define static or dynamic metadata for routes where the `page.tsx` is a client component.
