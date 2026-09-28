# Changelog

## [FEAT]: Cloudflare Workers free-plan deploy — 2026-09-28

- Switched to Next.js `output: "export"` so pages ship as Workers Static Assets (free & unlimited).
- Added Wrangler Worker that only handles `/api/inquiry` via `run_worker_first` (protects free 100k/day Worker quota).
- Restored `azicra.com` / `www.azicra.com` custom domain routes; security headers via `public/_headers`.
- No Workers Paid, D1, KV, R2, or other billable bindings.

## [FEAT]: Optimization improvements — 2026-09-28

- Rebuilt azicra.com as a Next.js App Router sales site focused on conversion and Core Web Vitals.
- Added listed price above the fold with Buy Now, Make Offer, and Contact Agent CTAs.
- Implemented Schema.org graph (Product, Organization, WebSite, WebPage), sitemap, robots, and canonical metadata.
- Added security response headers suitable for HTTPS production.
- Shipped dark/light mode, exit-intent capture, viewer urgency bar, testimonials, and Escrow trust copy.
- Published Insights content cluster for domain valuation and Arizona ICRA demand.
- Documented deployment / Search Console sitemap submission in README.
