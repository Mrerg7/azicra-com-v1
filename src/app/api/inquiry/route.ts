import { NextResponse } from "next/server";

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

export async function POST(request: Request) {
  let body: InquiryBody = {};
  try {
    body = (await request.json()) as InquiryBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.email || typeof body.email !== "string") {
    return NextResponse.json({ ok: false, error: "Email required" }, { status: 400 });
  }

  // Local/mock fallback — wire to CRM, email, or webhook in production.
  console.info("[inquiry]", {
    at: new Date().toISOString(),
    ...body,
  });

  return NextResponse.json({
    ok: true,
    message: "Inquiry received. We typically respond within 24 hours.",
  });
}
