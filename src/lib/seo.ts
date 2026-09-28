import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.domain} | Premium Domain for Sale | ${SITE.brand}`,
    template: `%s | ${SITE.domain}`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.domain }],
  creator: SITE.domain,
  publisher: SITE.domain,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.domain,
    title: `${SITE.domain} | Premium Domain for Sale | ${SITE.brand}`,
    description: SITE.description,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.domain} — premium domain for Arizona ICRA healthcare construction`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.domain} | Premium Domain for Sale | ${SITE.brand}`,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: SITE.googleSiteVerification,
  },
  other: {
    "theme-color": "#0F766E",
  },
};

export function jsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.domain,
        description: SITE.description,
        inLanguage: "en-US",
        publisher: { "@id": `${SITE.url}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.domain,
        url: SITE.url,
        email: SITE.email,
        logo: SITE.ogImage,
        description:
          "Premium domain brokerage listing for Arizona Infection Control Risk Assessment (ICRA) branding in healthcare construction.",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE.url}/#webpage`,
        url: SITE.url,
        name: `${SITE.domain} | Premium Domain for Sale | ${SITE.brand}`,
        isPartOf: { "@id": `${SITE.url}/#website` },
        about: {
          "@type": "Thing",
          name: "Arizona Infection Control Risk Assessment (ICRA) Domain",
          description:
            "Premium .com domain name asset for ICRA expertise, training, consulting, and compliance services in Arizona healthcare construction.",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: SITE.ogImage,
        },
      },
      {
        "@type": "Product",
        "@id": `${SITE.url}/#product`,
        name: `${SITE.domain} domain name`,
        description:
          "Premium domain for Arizona Infection Control Risk Assessment in healthcare construction. Clean professional .com for ICRA contractors, consultants, training, and compliance services.",
        category: "Domain Name",
        sku: SITE.domain,
        brand: {
          "@type": "Brand",
          name: SITE.brand,
        },
        image: SITE.ogImage,
        offers: {
          "@type": "Offer",
          url: SITE.url,
          priceCurrency: SITE.currency,
          price: String(SITE.price),
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: {
            "@type": "Organization",
            name: "Desert Rich",
            email: SITE.email,
          },
        },
      },
    ],
  };
}
