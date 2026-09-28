"use client";

import { ArrowRight, BadgeCheck, Lock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInquiry } from "@/components/inquiry-modal";
import { SocialProofBar } from "@/components/social-proof-bar";
import { SITE } from "@/lib/site";

export function HeroSection() {
  const { openInquiry } = useInquiry();

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(15,118,110,0.35),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(15,23,42,0.55),_transparent_50%),linear-gradient(145deg,#0b3d3a_0%,#0f766e_42%,#134e4a_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.35'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:items-end md:py-20 lg:py-24">
        <div className="animate-rise">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-sm text-teal-50 backdrop-blur">
            <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
            Exclusively available · One premium listing
          </div>

          <h1 className="font-display text-5xl leading-[0.95] font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
            {SITE.domain}
          </h1>
          <p className="mt-4 max-w-xl font-display text-2xl tracking-tight text-teal-100 sm:text-3xl">
            {SITE.tagline}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-teal-50/85 sm:text-lg">
            Own the clean .com that identifies your business as Arizona&apos;s
            trusted expert in Infection Control Risk Assessment for healthcare
            construction and renovation.
          </p>

          <div className="mt-8 flex flex-wrap items-end gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-teal-200/80 uppercase">
                Buy now price
              </p>
              <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {SITE.priceDisplay}
              </p>
            </div>
            <p className="pb-1 text-sm text-teal-100/80">
              USD · includes Escrow.com transfer support
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              className="h-14 min-w-[10rem] gap-2 bg-white px-7 text-base font-semibold text-teal-900 hover:bg-teal-50"
              onClick={() => openInquiry("buy")}
            >
              Buy Now
              <ArrowRight className="size-5" />
            </Button>
            <Button
              variant="outline"
              className="h-14 min-w-[10rem] border-white/35 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white"
              onClick={() => openInquiry("offer")}
            >
              Make Offer
            </Button>
            <Button
              variant="ghost"
              className="h-14 min-w-[10rem] px-7 text-base text-teal-50 hover:bg-white/10 hover:text-white"
              onClick={() => openInquiry("contact")}
            >
              Contact Agent
            </Button>
          </div>

          <div className="mt-8">
            <SocialProofBar />
          </div>
        </div>

        <aside className="animate-rise-delayed rounded-3xl border border-white/15 bg-slate-950/35 p-6 text-white shadow-2xl backdrop-blur-md sm:p-7">
          <p className="text-xs font-semibold tracking-[0.22em] text-teal-300 uppercase">
            Domain visualization
          </p>
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-teal-950 p-5">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-rose-400/80" />
              <span className="size-2.5 rounded-full bg-amber-400/80" />
              <span className="size-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-3 truncate font-mono text-xs text-white/50">
                https://{SITE.domain}
              </span>
            </div>
            <div className="mt-8 space-y-2">
              <p className="font-display text-3xl tracking-tight">AZ ICRA</p>
              <p className="text-sm text-teal-100/80">
                Infection Control Risk Assessment · Arizona healthcare
                construction
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-white/50">TLD</p>
                <p className="mt-1 font-semibold">.com</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-white/50">Length</p>
                <p className="mt-1 font-semibold">6 letters</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-white/50">Category</p>
                <p className="mt-1 font-semibold">Geo · Healthcare</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-white/50">Status</p>
                <p className="mt-1 font-semibold text-emerald-300">In stock</p>
              </div>
            </div>
          </div>

          <ul className="mt-5 space-y-3 text-sm text-teal-50/90">
            <li className="flex items-start gap-2.5">
              <Lock className="mt-0.5 size-4 shrink-0 text-teal-300" />
              Escrow.com transaction protection
            </li>
            <li className="flex items-start gap-2.5">
              <Shield className="mt-0.5 size-4 shrink-0 text-teal-300" />
              Clean title · ready for immediate transfer
            </li>
            <li className="flex items-start gap-2.5">
              <BadgeCheck className="mt-0.5 size-4 shrink-0 text-teal-300" />
              SSL-ready brand for proposals &amp; email
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
