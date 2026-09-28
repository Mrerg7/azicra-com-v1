import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Optimization and product changelog for the azicra.com domain sales site.",
  alternates: { canonical: "/changelog" },
};

const entries = [
  {
    date: "2026-09-28",
    tag: "FEAT",
    title: "Cloudflare Workers free-plan deployment",
    items: [
      "Next.js static export served as Workers Static Assets (free & unlimited page views)",
      "Worker only runs for /api/inquiry via run_worker_first — protects free 100k/day quota",
      "Custom domains azicra.com + www.azicra.com restored in wrangler.toml",
      "Security headers via public/_headers (no paid products: no D1/KV/R2)",
    ],
  },
  {
    date: "2026-09-28",
    tag: "FEAT",
    title: "Comprehensive CRO + SEO optimization rebuild",
    items: [
      "Above-the-fold domain + price + Buy Now / Make Offer / Contact Agent CTAs",
      "Schema.org Product, Organization, WebSite, and WebPage structured data",
      "XML sitemap, robots.txt, canonical metadata, security headers",
      "Dark/light mode, exit-intent email capture, viewer urgency signals",
      "Insights blog for domain authority / content marketing",
      "Mobile nav, 48px+ tap targets, 16px base typography",
      "Inquiry API with local mock fallback and conversion event hook",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
      <h1 className="font-display text-4xl tracking-tight">Changelog</h1>
      <p className="mt-4 text-muted-foreground">
        Documented optimization releases for azicra.com.
      </p>
      <ol className="mt-10 space-y-8">
        {entries.map((entry) => (
          <li key={entry.date} className="rounded-2xl border border-border p-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-900 dark:bg-teal-900/40 dark:text-teal-200">
                {entry.tag}
              </span>
              <time className="text-sm text-muted-foreground">{entry.date}</time>
            </div>
            <h2 className="mt-3 font-display text-2xl tracking-tight">
              {entry.title}
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {entry.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
