import Link from "next/link";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="font-display text-7xl tracking-tight sm:text-8xl">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist. The domain you want
        does — {SITE.domain} is available at {SITE.priceDisplay}.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center rounded-xl bg-teal-700 px-6 text-sm font-semibold text-white hover:bg-teal-800"
      >
        Return to {SITE.domain}
      </Link>
    </div>
  );
}
