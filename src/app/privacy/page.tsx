import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy practices for inquiries submitted via ${SITE.domain}.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
      <h1 className="font-display text-4xl tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-muted-foreground">
        Last updated: September 28, 2026
      </p>
      <div className="mt-8 space-y-5 text-base leading-relaxed">
        <p>
          When you submit an inquiry, offer, or exit-intent email capture on{" "}
          {SITE.domain}, we collect the information you provide (name, email,
          company, phone, message) solely to respond about domain acquisition.
        </p>
        <p>
          We do not sell personal information. Inquiry data may be processed by
          email providers and Escrow.com during a transaction. Analytics may
          record anonymized page views and conversion events.
        </p>
        <p>
          Contact{" "}
          <a
            className="font-medium text-teal-800 dark:text-teal-300"
            href={`mailto:${SITE.email}`}
          >
            {SITE.email}
          </a>{" "}
          to request deletion of inquiry records.
        </p>
      </div>
    </div>
  );
}
