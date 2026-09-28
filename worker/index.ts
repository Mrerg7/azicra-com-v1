/**
 * Cloudflare Worker — free-plan friendly.
 * Runs only for /api/* (see wrangler.toml run_worker_first).
 * Page HTML/CSS/JS is served as static assets (unlimited free requests).
 */

export interface Env {
  ASSETS: Fetcher;
}

type InquiryBody = {
  fullName?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
  offerAmount?: string;
  mode?: string;
  domain?: string;
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
    },
  });
}

export default {
  async fetch(request: Request, _env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/inquiry") {
      if (request.method === "OPTIONS") {
        return new Response(null, { status: 204, headers: corsHeaders });
      }

      if (request.method !== "POST") {
        return json({ ok: false, error: "Method not allowed" }, 405);
      }

      let body: InquiryBody = {};
      try {
        body = (await request.json()) as InquiryBody;
      } catch {
        return json({ ok: false, error: "Invalid JSON" }, 400);
      }

      if (!body.email || typeof body.email !== "string") {
        return json({ ok: false, error: "Email required" }, 400);
      }

      // Free-plan logging only — wire to Email Workers / webhook later if needed.
      console.log(
        JSON.stringify({
          type: "inquiry",
          at: new Date().toISOString(),
          ...body,
        }),
      );

      return json({
        ok: true,
        message: "Inquiry received. We typically respond within 24 hours.",
      });
    }

    return new Response("Not found", { status: 404 });
  },
} satisfies ExportedHandler<Env>;
