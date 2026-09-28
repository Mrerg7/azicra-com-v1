# azicra.com — Premium Domain Sales Site

Optimized landing experience for selling **azicra.com**, the Arizona ICRA (Infection Control Risk Assessment) brand domain for healthcare construction.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 + shadcn/ui
- next-themes (dark / light mode)
- Schema.org JSON-LD, sitemap.xml, robots.txt
- Security headers (HSTS, X-Frame-Options, nosniff, Referrer-Policy)

## Features

- Above-the-fold domain + **$14,997** price + Buy Now / Make Offer / Contact Agent
- Trust signals (Escrow.com, clean title, SSL-ready)
- Urgency / social proof (viewing counter, response window)
- Exit-intent email capture with acquisition credit offer
- Insights blog for SEO / domain authority content
- Mobile-first layout, 16px base type, 48px+ tap targets
- Inquiry API with local mock logging (wire to CRM in production)

## Local development

```bash
npm install
npm run dev -- --hostname 127.0.0.1 --port 43123
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Production build

```bash
npm run build
npm run start -- --hostname 127.0.0.1 --port 43123
```

## Environment

No secrets required for local demo. Inquiries POST to `/api/inquiry` and log server-side. Connect email/CRM/webhook there for production.

Optional analytics: load GA4 (or similar) and the inquiry modal will fire a `generate_lead` event when `window.gtag` exists.

## SEO checklist

- Title format: `azicra.com | Premium Domain for Sale | azicra`
- Canonical tags via Next.js metadata
- Product + Organization + WebSite structured data
- `/sitemap.xml` and `/robots.txt`
- Submit sitemap to Google Search Console after deploy: `https://azicra.com/sitemap.xml`

## Contact

Acquisition inquiries: **sales@desertrich.com**
