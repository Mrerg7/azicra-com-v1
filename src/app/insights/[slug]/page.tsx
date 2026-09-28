import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/lib/blog";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
      <Link
        href="/insights"
        className="text-sm font-medium text-teal-800 dark:text-teal-300"
      >
        ← All insights
      </Link>
      <p className="mt-6 text-xs font-semibold tracking-[0.22em] text-teal-700 uppercase dark:text-teal-300">
        {post.category}
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        {post.date} · {post.readMinutes} min read · Related to {SITE.domain}
      </p>
      <p className="mt-6 text-lg text-muted-foreground">{post.description}</p>
      <div className="prose-azicra mt-10 space-y-5 text-base leading-relaxed">
        {post.content.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      <aside className="mt-12 rounded-2xl border border-teal-700/25 bg-teal-50/50 p-6 dark:bg-teal-950/30">
        <h2 className="font-display text-2xl tracking-tight">
          Interested in {SITE.domain}?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Listed at {SITE.priceDisplay}. Escrow.com protected transfer.
        </p>
        <Link
          href="/#acquire"
          className="mt-4 inline-flex h-12 items-center rounded-xl bg-teal-700 px-5 text-sm font-semibold text-white hover:bg-teal-800"
        >
          View acquisition options
        </Link>
      </aside>

      <section className="mt-14 border-t border-border pt-10">
        <h2 className="font-display text-2xl tracking-tight">Related reading</h2>
        <ul className="mt-4 space-y-3">
          {related.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/insights/${item.slug}`}
                className="font-medium text-teal-800 hover:underline dark:text-teal-300"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
