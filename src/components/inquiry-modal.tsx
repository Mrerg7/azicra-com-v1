"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE, MAILTO_INQUIRE } from "@/lib/site";
import { CheckCircle2 } from "lucide-react";

type InquiryMode = "buy" | "offer" | "contact";

type InquiryContextValue = {
  openInquiry: (mode?: InquiryMode) => void;
};

const InquiryContext = createContext<InquiryContextValue | null>(null);

export function useInquiry() {
  const ctx = useContext(InquiryContext);
  if (!ctx) throw new Error("useInquiry must be used within InquiryProvider");
  return ctx;
}

const titles: Record<InquiryMode, { title: string; subtitle: string }> = {
  buy: {
    title: `Buy ${SITE.domain}`,
    subtitle: `Listed at ${SITE.priceDisplay} · Escrow.com protected`,
  },
  offer: {
    title: `Make an Offer — ${SITE.domain}`,
    subtitle: "Share your best offer. Confidential response within 24 hours.",
  },
  contact: {
    title: "Contact Domain Agent",
    subtitle: "Talk through use cases, transfer timing, and payment options.",
  },
};

export function InquiryProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<InquiryMode>("buy");
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  const openInquiry = useCallback((next: InquiryMode = "buy") => {
    setMode(next);
    setSubmitted(false);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openInquiry }), [openInquiry]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, mode, domain: SITE.domain }),
      });
    } catch {
      // Fallback UX still succeeds locally; buyer can email directly
    }

    setPending(false);
    setSubmitted(true);

    if (typeof window !== "undefined" && "gtag" in window) {
      // @ts-expect-error optional analytics
      window.gtag?.("event", "generate_lead", {
        currency: SITE.currency,
        value: SITE.price,
        mode,
      });
    }
  }

  const copy = titles[mode];

  return (
    <InquiryContext.Provider value={value}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg gap-0 overflow-hidden border-border/80 p-0 sm:max-w-lg">
          <DialogHeader className="bg-slate-950 px-6 py-5 text-left text-white">
            <DialogTitle className="font-display text-xl tracking-tight">
              {copy.title}
            </DialogTitle>
            <DialogDescription className="text-teal-300/90">
              {copy.subtitle}
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="space-y-4 px-6 py-10 text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300">
                <CheckCircle2 className="size-8" />
              </div>
              <h3 className="font-display text-2xl tracking-tight">
                Inquiry received
              </h3>
              <p className="mx-auto max-w-sm text-muted-foreground">
                Thank you. A member of our acquisition team will contact you
                within 24 hours. All inquiries stay confidential.
              </p>
              <Button
                className="mt-2 h-12 min-w-[12rem]"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4 px-6 py-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Morgan Ellis"
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company or Individual"
                    className="h-12 text-base"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(602) 555-0199"
                    className="h-12 text-base"
                  />
                </div>
              </div>
              {mode === "offer" && (
                <div className="space-y-2">
                  <Label htmlFor="offerAmount">Your offer (USD)</Label>
                  <Input
                    id="offerAmount"
                    name="offerAmount"
                    type="number"
                    min={1000}
                    step={100}
                    placeholder="12000"
                    className="h-12 text-base"
                  />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your interest</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder={`I'm interested in acquiring ${SITE.domain} to build an Arizona-focused ICRA business...`}
                  className="min-h-24 text-base"
                />
              </div>
              <Button
                type="submit"
                disabled={pending}
                className="h-12 w-full bg-teal-700 text-base text-white hover:bg-teal-800"
              >
                {pending ? "Submitting…" : "Submit confidential inquiry"}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Prefer email?{" "}
                <a
                  href={MAILTO_INQUIRE}
                  className="font-medium text-teal-700 underline-offset-2 hover:underline dark:text-teal-300"
                >
                  {SITE.email}
                </a>
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </InquiryContext.Provider>
  );
}
