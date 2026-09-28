import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Insights — Domain Valuation & Arizona ICRA",
  description:
    "Guides on premium domain valuation, Escrow transfers, and Arizona healthcare construction ICRA market trends.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
      <p className="text-xs font-semibold tracking-[0.22em] text-teal-700 uppercase dark:text-teal-300">
        Content marketing
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
        Insights for domain buyers &amp; ICRA operators
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground sm:text-lg">
        Weekly resources on premium domain investing, Escrow best practices, and
        Arizona healthcare construction demand — built to support search
        authority for azicra.com.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-border bg-muted/20 p-6 transition hover:border-teal-700/35"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="font-semibold tracking-wide text-teal-700 uppercase dark:text-teal-300">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>{post.readMinutes} min read</span>
            </div>
            <h2 className="mt-3 font-display text-2xl tracking-tight">
              <Link
                href={`/insights/${post.slug}`}
                className="hover:text-teal-800 dark:hover:text-teal-200"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-muted-foreground">{post.description}</p>
            <Link
              href={`/insights/${post.slug}`}
              className="mt-4 inline-flex text-sm font-semibold text-teal-800 dark:text-teal-300"
            >
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
