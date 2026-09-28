import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML for Cloudflare Workers Assets (free plan friendly).
  output: "export",
  poweredByHeader: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
    ],
  },
  // Security headers are applied via public/_headers on Cloudflare Workers.
};

export default nextConfig;
