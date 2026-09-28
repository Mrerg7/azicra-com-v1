import Link from "next/link";
import { SITE, MAILTO_INQUIRE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="relative overflow-hidden rounded-3xl border border-teal-500/20 bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950/50 p-8 md:p-10">
          <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <p className="inline-flex items-center gap-2 text-[10px] font-extrabold tracking-[0.22em] text-teal-400 uppercase">
                <span className="size-1.5 animate-pulse rounded-full bg-teal-400" />
                Domain available for acquisition
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-white sm:text-4xl">
                Acquire{" "}
                <span className="bg-gradient-to-r from-teal-300 to-emerald-200 bg-clip-text text-transparent">
                  {SITE.domain}
                </span>
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
                A rare Arizona-focused .com for Infection Control Risk Assessment
                in healthcare construction. Listed at {SITE.priceDisplay}.
                Confidential inquiries welcome.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
              <a
                href={MAILTO_INQUIRE}
                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-teal-600 px-6 text-sm font-semibold text-white transition hover:bg-teal-500 md:w-auto"
              >
                Request acquisition terms
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-teal-500/30 px-6 text-sm font-semibold text-teal-200 transition hover:border-teal-400/50 md:w-auto"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap gap-4" aria-label="Footer">
            <Link href="/insights" className="hover:text-slate-200">
              Insights
            </Link>
            <Link href="/#trust" className="hover:text-slate-200">
              Trust &amp; Transfer
            </Link>
            <Link href="/privacy" className="hover:text-slate-200">
              Privacy
            </Link>
            <Link href="/changelog" className="hover:text-slate-200">
              Changelog
            </Link>
          </nav>
          <p>
            Transactions secured via Escrow.com · © {new Date().getFullYear()}{" "}
            {SITE.domain}
          </p>
        </div>
        <p className="mt-6 max-w-4xl text-[11px] leading-relaxed text-slate-600">
          This website is for demonstration and informational purposes regarding
          the sale of the domain name {SITE.domain}. It does not constitute an
          offer of ICRA services or a guarantee of business outcomes. Market
          references are based on publicly available information and may change.
        </p>
      </div>
    </footer>
  );
}
