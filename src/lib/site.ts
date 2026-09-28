export const SITE = {
  name: "azicra.com",
  brand: "azicra",
  domain: "azicra.com",
  url: "https://azicra.com",
  price: 14997,
  priceDisplay: "$14,997",
  currency: "USD",
  email: "sales@desertrich.com",
  phoneDisplay: null as string | null,
  tagline: "The professional brand for Arizona ICRA.",
  description:
    "Acquire azicra.com — the clean, professional .com brand for Arizona ICRA (Infection Control Risk Assessment). Available now at $14,997 with Escrow.com protection. Ideal for contractors, consultants, training, and compliance services in Arizona healthcare construction.",
  keywords: [
    "buy azicra.com",
    "azicra.com for sale",
    "premium domain names",
    "domain marketplace",
    "Arizona ICRA",
    "infection control risk assessment",
    "healthcare construction Arizona",
    "ICRA contractor AZ",
    "investment domains",
    "brandable domain for sale",
  ],
  ogImage:
    "https://imagedelivery.net/-sPAUAWeA405NiWJ0SNIQA/bc0c74e7-3f6c-4e84-8e35-7a8d3fa1a2b0/public",
  googleSiteVerification: "E4s6qwBbLpc5S83_CUxdxC0Ivy-0B0GQbYpsMPUfieM",
  escrowUrl: "https://www.escrow.com/",
} as const;

export const MAILTO_INQUIRE = `mailto:${SITE.email}?subject=${encodeURIComponent(
  "Domain acquisition inquiry: azicra.com"
)}`;

export const MAILTO_OFFER = `mailto:${SITE.email}?subject=${encodeURIComponent(
  "Offer for azicra.com"
)}`;

export const MAILTO_BUY = `mailto:${SITE.email}?subject=${encodeURIComponent(
  `Buy Now — azicra.com at ${SITE.priceDisplay}`
)}&body=${encodeURIComponent(
  `I would like to purchase azicra.com at the listed price of ${SITE.priceDisplay}. Please send Escrow.com transfer instructions.`
)}`;
