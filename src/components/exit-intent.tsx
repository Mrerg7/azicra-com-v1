"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SITE } from "@/lib/site";
import { useInquiry } from "@/components/inquiry-modal";

const STORAGE_KEY = "azicra-exit-dismissed";

export function ExitIntentPopup() {
  const { openInquiry } = useInquiry();
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let armed = false;
    const arm = window.setTimeout(() => {
      armed = true;
    }, 12000);

    const onMouseOut = (e: MouseEvent) => {
      if (!armed || visible) return;
      if (e.clientY > 12) return;
      setVisible(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    };

    document.addEventListener("mouseout", onMouseOut);
    return () => {
      window.clearTimeout(arm);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-end justify-center bg-black/50 p-4 backdrop-blur-[2px] sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-title"
    >
      <div className="relative w-full max-w-md animate-in fade-in zoom-in-95 rounded-2xl border border-border bg-background p-6 shadow-2xl">
        <button
          type="button"
          className="absolute top-3 right-3 inline-flex size-11 items-center justify-center rounded-full hover:bg-muted"
          aria-label="Close"
          onClick={() => setVisible(false)}
        >
          <X className="size-5" />
        </button>

        {done ? (
          <div className="space-y-3 pr-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal-700 uppercase dark:text-teal-300">
              You&apos;re on the list
            </p>
            <h2 id="exit-title" className="font-display text-2xl tracking-tight">
              We&apos;ll send pricing &amp; transfer details
            </h2>
            <p className="text-muted-foreground">
              Prefer to talk now? Open a confidential inquiry — typical reply
              within 24 hours.
            </p>
            <Button
              className="h-12 w-full bg-teal-700 text-white hover:bg-teal-800"
              onClick={() => {
                setVisible(false);
                openInquiry("buy");
              }}
            >
              Continue to Buy Now
            </Button>
          </div>
        ) : (
          <div className="space-y-4 pr-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal-700 uppercase dark:text-teal-300">
              Before you go
            </p>
            <h2 id="exit-title" className="font-display text-2xl tracking-tight">
              Get a $500 acquisition credit on {SITE.domain}
            </h2>
            <p className="text-sm text-muted-foreground">
              Leave your email for escrow instructions and a limited credit
              toward the listed {SITE.priceDisplay} price. One-time offer for
              serious buyers.
            </p>
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  await fetch("/api/inquiry", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      email,
                      mode: "exit-credit",
                      domain: SITE.domain,
                      fullName: "Exit intent lead",
                      message: "Requested $500 acquisition credit details",
                    }),
                  });
                } catch {
                  /* noop */
                }
                setDone(true);
              }}
            >
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="h-12 flex-1 text-base"
                aria-label="Email address"
              />
              <Button
                type="submit"
                className="h-12 shrink-0 bg-teal-700 px-5 text-white hover:bg-teal-800"
              >
                Claim credit
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
