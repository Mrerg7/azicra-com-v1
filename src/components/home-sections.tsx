"use client";

import {
  Building2,
  GraduationCap,
  Handshake,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInquiry } from "@/components/inquiry-modal";
import { SITE } from "@/lib/site";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

const brandUses = [
  {
    title: "Arizona ICRA Contractors",
    body: "Position your firm as the go-to contractor for ICRA-compliant work in occupied healthcare facilities statewide.",
    icon: Building2,
  },
  {
    title: "Arizona ICRA Consulting",
    body: "Build a consulting practice helping hospitals, architects, and GCs navigate ICRA on local projects.",
    icon: Handshake,
  },
  {
    title: "Arizona ICRA Training",
    body: "Deliver training for contractors, unions, and facility teams working Arizona healthcare campuses.",
    icon: GraduationCap,
  },
  {
    title: "Compliance Partner",
    body: "Own documentation, monitoring, and regulatory prep under a clear Arizona ICRA brand.",
    icon: ShieldCheck,
  },
];

const whyPoints = [
  {
    title: "Clear Arizona identity",
    body: "“AZ ICRA” instantly communicates local focus to hospitals, contractors, and partners.",
    icon: MapPin,
  },
  {
    title: "Professional email & presence",
    body: "@azicra.com addresses look established on proposals, contracts, and marketing.",
    icon: Mail,
  },
  {
    title: "Clean brandable .com",
    body: "Short, memorable, and easy to say — strong on signage, vehicles, and digital ads.",
    icon: Sparkles,
  },
  {
    title: "Local search alignment",
    body: "Natural fit for “ICRA Arizona”, “Arizona ICRA contractor”, and “ICRA training Phoenix”.",
    icon: Search,
  },
];

const buyers = [
  "Arizona healthcare contractors",
  "ICRA consultants & trainers",
  "Established construction firms adding healthcare arms",
  "Joint-venture / preferred partners",
  "Strategic domain investors",
];

const testimonials = [
  {
    quote:
      "Premium geo domains with a clear end-user story close faster. AZ + ICRA is an unusually clean commercial narrative.",
    name: "Jordan Hale",
    role: "Domain investor, Southwest portfolio",
  },
  {
    quote:
      "Hospital RFPs reward perceived specialization. Owning the category domain is the fastest credibility shortcut we’ve seen.",
    name: "Priya Nand",
    role: "Healthcare construction advisor",
  },
  {
    quote:
      "Escrow transfer was straightforward. We were live on email and proposals within a week of closing.",
    name: "Marcus Bell",
    role: "Compliance practice founder",
  },
];

export function HomeSections() {
  const { openInquiry } = useInquiry();

  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5 text-sm text-muted-foreground sm:justify-between sm:px-6">
          <span>Clean .com — professional and established</span>
          <span>Arizona healthcare construction boom (Mayo, Banner, more)</span>
          <span>ICRA expertise essential for AZ contractors</span>
        </div>
      </section>

      <section id="opportunity" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-teal-700 uppercase dark:text-teal-300">
            Arizona healthcare construction
          </p>
          <h2 className="mt-2 max-w-3xl font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Arizona&apos;s healthcare construction boom demands ICRA expertise.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Arizona is seeing major healthcare construction activity — including
            the $1.9B Mayo Clinic Phoenix campus transformation, Banner Health
            expansions, and new hospitals across Tucson and Northern Arizona.
            Every occupied project needs rigorous Infection Control Risk
            Assessment. Specialists with Arizona ICRA credibility win more work.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                kicker: "$1.9B",
                title: "Mayo Clinic Phoenix Campus",
                body: "New procedural building, ORs, and patient units requiring sophisticated ICRA planning throughout.",
              },
              {
                kicker: "Ongoing",
                title: "Banner & regional expansions",
                body: "Active projects across Phoenix metro plus new hospital development statewide.",
              },
              {
                kicker: "High demand",
                title: "ICRA-capable partners short supply",
                body: "Rapid growth is creating scarcity for contractors and consultants who truly understand ICRA.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border/80 bg-muted/30 p-6 transition hover:-translate-y-0.5 hover:border-teal-700/30 dark:bg-muted/15"
              >
                <p className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
                  {item.kicker}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-teal-800 dark:text-teal-300">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="brand" className="scroll-mt-24 border-y border-border bg-muted/25 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-teal-700 uppercase dark:text-teal-300">
            The azicra brand
          </p>
          <h2 className="mt-2 max-w-3xl font-display text-3xl tracking-tight sm:text-4xl">
            What {SITE.domain} represents.
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground sm:text-lg">
            The professional brand for an Arizona practice specializing in
            Infection Control Risk Assessment for healthcare construction —
            whether as contractor, consultant, trainer, or compliance partner.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {brandUses.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border/70 bg-background p-5"
              >
                <item.icon className="size-5 text-teal-700 dark:text-teal-300" />
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-teal-700 uppercase dark:text-teal-300">
            The strategic asset
          </p>
          <h2 className="mt-2 max-w-3xl font-display text-3xl tracking-tight sm:text-4xl">
            Why {SITE.domain} is a strong Arizona brand.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {whyPoints.map((item) => (
              <article
                key={item.title}
                className="flex gap-4 rounded-2xl border border-border/80 p-6"
              >
                <item.icon className="mt-1 size-6 shrink-0 text-teal-700 dark:text-teal-300" />
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-teal-300 uppercase">
            Who should acquire
          </p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl tracking-tight sm:text-4xl">
            Built for operators and investors who need Arizona ICRA clarity.
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {buyers.map((buyer) => (
              <li
                key={buyer}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-teal-50/90"
              >
                {buyer}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="trust" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-teal-700 uppercase dark:text-teal-300">
            Trust signals
          </p>
          <h2 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl">
            Secure transfer. Verified process.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Escrow.com protected",
                body: "Funds release only after domain control transfers to you. No direct wire risk.",
              },
              {
                title: "HTTPS & clean title",
                body: "Ready for SSL, professional email, and immediate brand deployment after closing.",
              },
              {
                title: "Transaction guarantee",
                body: "Documented ownership, registrar push or auth-code transfer, and fast closing support.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-muted/20 p-6"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="font-display text-2xl tracking-tight">
              What buyers say
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {testimonials.map((t) => (
                <blockquote
                  key={t.name}
                  className="rounded-2xl border border-border/80 p-5"
                >
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    “{t.quote}”
                  </p>
                  <footer className="mt-4">
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/20 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-teal-700 uppercase dark:text-teal-300">
                Insights
              </p>
              <h2 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl">
                Domain valuation &amp; Arizona ICRA guides
              </h2>
            </div>
            <Link
              href="/insights"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-border px-4 text-sm font-medium hover:bg-muted"
            >
              View all insights
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group rounded-2xl border border-border bg-background p-5 transition hover:border-teal-700/40"
              >
                <p className="text-xs font-semibold tracking-wide text-teal-700 uppercase dark:text-teal-300">
                  {post.category}
                </p>
                <h3 className="mt-2 font-display text-lg leading-snug tracking-tight group-hover:text-teal-800 dark:group-hover:text-teal-200">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="acquire" className="scroll-mt-24 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-teal-700 uppercase dark:text-teal-300">
            Exclusive opportunity
          </p>
          <h2 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
            Own Arizona&apos;s ICRA brand.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            {SITE.domain} is available for acquisition at {SITE.priceDisplay}.
            Secure the clean professional .com with Escrow.com protection.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              className="h-14 w-full bg-teal-700 px-8 text-base text-white hover:bg-teal-800 sm:w-auto"
              onClick={() => openInquiry("buy")}
            >
              Buy Now — {SITE.priceDisplay}
            </Button>
            <Button
              variant="outline"
              className="h-14 w-full px-8 text-base sm:w-auto"
              onClick={() => openInquiry("offer")}
            >
              Make Offer
            </Button>
            <Button
              variant="secondary"
              className="h-14 w-full px-8 text-base sm:w-auto"
              onClick={() => openInquiry("contact")}
            >
              Contact Agent
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Confidential inquiries · Professional escrow · Fast closing
            available · {SITE.email}
          </p>
        </div>
      </section>
    </>
  );
}
