"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { useInquiry } from "@/components/inquiry-modal";
import { SITE } from "@/lib/site";

const links = [
  { href: "/#opportunity", label: "Opportunity" },
  { href: "/#why", label: "Why This Domain" },
  { href: "/#trust", label: "Trust & Transfer" },
  { href: "/insights", label: "Insights" },
  { href: "/#acquire", label: "Acquire" },
];

export function SiteHeader() {
  const { openInquiry } = useInquiry();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all ${
        scrolled
          ? "border-border/80 bg-background/90 shadow-sm backdrop-blur-md"
          : "border-transparent bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5" aria-label={SITE.domain}>
          <span className="flex size-9 items-center justify-center rounded-xl bg-teal-700 text-white shadow-inner">
            <ShieldCheck className="size-5" aria-hidden />
          </span>
          <span className="font-display text-2xl font-semibold tracking-tight">
            {SITE.brand}
            <span className="text-teal-700 dark:text-teal-400">.com</span>
          </span>
          <span className="hidden items-center gap-1 rounded-full border border-teal-700/20 bg-teal-50 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-teal-800 uppercase sm:inline-flex dark:border-teal-400/20 dark:bg-teal-950/50 dark:text-teal-200">
            Premium
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <Button
            variant="outline"
            className="hidden h-12 min-w-[7.5rem] md:inline-flex"
            onClick={() => openInquiry("offer")}
          >
            Make Offer
          </Button>
          <Button
            className="hidden h-12 bg-teal-700 px-5 text-white hover:bg-teal-800 md:inline-flex"
            onClick={() => openInquiry("buy")}
          >
            Buy Now
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex size-12 items-center justify-center rounded-lg hover:bg-muted md:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle className="font-display text-left text-xl">
                  {SITE.domain}
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-3 py-3.5 text-base font-medium hover:bg-muted"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-3">
                <Button
                  className="h-12 bg-teal-700 text-white hover:bg-teal-800"
                  onClick={() => {
                    setOpen(false);
                    openInquiry("buy");
                  }}
                >
                  Buy Now — {SITE.priceDisplay}
                </Button>
                <Button
                  variant="outline"
                  className="h-12"
                  onClick={() => {
                    setOpen(false);
                    openInquiry("offer");
                  }}
                >
                  Make Offer
                </Button>
                <Button
                  variant="secondary"
                  className="h-12"
                  onClick={() => {
                    setOpen(false);
                    openInquiry("contact");
                  }}
                >
                  Contact Agent
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
