# azicra.com — Premium Domain Sales Site

Optimized landing experience for selling **azicra.com**, the Arizona ICRA (Infection Control Risk Assessment) brand domain for healthcare construction.

## Stack

- Next.js (App Router) static export + TypeScript
- Tailwind CSS v4 + shadcn/ui
- **Cloudflare Workers (Free plan)** via Wrangler static assets
- next-themes (dark / light mode)
- Schema.org JSON-LD, sitemap.xml, robots.txt
- Security headers via Cloudflare `_headers`

## Cloudflare Free plan design

| Traffic | How it runs | Free plan impact |
| --- | --- | --- |
| Pages, CSS, JS, images | Workers **Static Assets** | Free & unlimited |
| `POST /api/inquiry` | Lightweight Worker | Counts toward 100k req/day |

The Worker is only invoked for `/api/*` (`run_worker_first`). HTML page views do not burn Worker CPU quota.

No paid products required: no Workers Paid, D1, KV, R2, or Durable Objects.

## Features

- Above-the-fold domain + **$14,997** price + Buy Now / Make Offer / Contact Agent
- Trust signals (Escrow.com, clean title, SSL-ready)
- Urgency / social proof (viewing counter, response window)
- Exit-intent email capture with acquisition credit offer
- Insights blog for SEO / domain authority content
- Mobile-first layout, 16px base type, 48px+ tap targets
- Inquiry API with free-plan logging (extend with Email Workers later if needed)

## Local development

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Build & preview (Cloudflare Worker locally)

```bash
npm run build          # writes static site to ./out
npm run preview        # wrangler dev on :43123
```

## Deploy (Free Workers)

Requires Wrangler login on an account that owns the `azicra.com` zone (or omit custom domain routes for `*.workers.dev` only).

```bash
npx wrangler login
npm run deploy
```

Custom domains `azicra.com` and `www.azicra.com` are declared in `wrangler.toml`. After first deploy, confirm them in the Cloudflare dashboard if prompted.

## Environment

No secrets required for the free-plan demo. Inquiries `POST` to `/api/inquiry` and log in the Worker. Optional analytics: load GA4 and the inquiry modal fires `generate_lead` when `window.gtag` exists.

## SEO checklist

- Title format: `azicra.com | Premium Domain for Sale | azicra`
- Canonical tags via Next.js metadata
- Product + Organization + WebSite structured data
- `/sitemap.xml` and `/robots.txt`
- Submit sitemap to Google Search Console after deploy: `https://azicra.com/sitemap.xml`

## Contact

Acquisition inquiries: **sales@desertrich.com**
