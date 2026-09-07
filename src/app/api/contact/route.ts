import { NextResponse } from "next/server";
import { company } from "@/lib/company";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  name?: unknown;
  email?: unknown;
  companyName?: unknown;
  projectType?: unknown;
  budget?: unknown;
  timeline?: unknown;
  message?: unknown;
  /** Spam trap — a field hidden from people but not from naive bots. */
  website?: unknown;
  locale?: unknown;
};

const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

/**
 * Per-IP rate limiting held in module memory.
 *
 * This is deliberately simple. On serverless each instance keeps its own
 * counter, so the effective limit is per-instance rather than global — enough
 * to stop a naive flood, not a determined attacker. Move to a shared store
 * (Upstash, Vercel KV) if this form ever becomes a target.
 */
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Opportunistic cleanup so the map cannot grow without bound.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((time) => now - time >= WINDOW_MS)) hits.delete(key);
    }
  }

  return recent.length > LIMIT;
}

const asString = (value: unknown, max: number): string =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

/** Very permissive on purpose — real addresses fail strict patterns. */
const looksLikeEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, code: "invalid" }, { status: 400 });
  }

  // A filled honeypot is a bot. Return success so it learns nothing.
  if (asString(payload.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, code: "rate_limited" }, { status: 429 });
  }

  const name = asString(payload.name, 120);
  const email = asString(payload.email, 200);
  const companyName = asString(payload.companyName, 160);
  const projectType = asString(payload.projectType, 80);
  const budget = asString(payload.budget, 80);
  const timeline = asString(payload.timeline, 80);
  const message = asString(payload.message, 5000);
  const locale = asString(payload.locale, 5) || "en";

  const fieldErrors: Record<string, "required" | "email" | "tooShort"> = {};
  if (!name) fieldErrors.name = "required";
  if (!email) fieldErrors.email = "required";
  else if (!looksLikeEmail(email)) fieldErrors.email = "email";
  if (!message) fieldErrors.message = "required";
  else if (message.length < 20) fieldErrors.message = "tooShort";

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json({ ok: false, code: "validation", fieldErrors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || company.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    // Never silently swallow an enquiry: log it so it is at least recoverable
    // from the platform logs, and tell the visitor to email directly.
    console.warn(
      "[contact] RESEND_API_KEY or CONTACT_FROM_EMAIL is not set — enquiry not delivered:",
      JSON.stringify({ name, email, companyName, projectType, budget, timeline, message }),
    );
    return NextResponse.json({ ok: false, code: "not_configured" }, { status: 503 });
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Company", companyName || "—"],
    ["Project type", projectType || "—"],
    ["Budget", budget || "—"],
    ["Timeline", timeline || "—"],
    ["Language", locale],
  ];

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;line-height:1.6;color:#14130f">
      <h2 style="font-weight:600;margin:0 0 16px">New enquiry from aktays.com</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:20px">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding:4px 24px 4px 0;color:#78746a">${label}</td><td style="padding:4px 0">${escapeHtml(value)}</td></tr>`,
          )
          .join("")}
      </table>
      <div style="padding-top:16px;border-top:1px solid #dedad0;white-space:pre-wrap">${escapeHtml(message)}</div>
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        // So hitting reply in the inbox answers the person, not the robot.
        reply_to: email,
        subject: `Enquiry — ${name}${companyName ? ` (${companyName})` : ""}`,
        html,
      }),
    });

    if (!response.ok) {
      console.error("[contact] Resend rejected the message:", response.status, await response.text());
      return NextResponse.json({ ok: false, code: "error" }, { status: 502 });
    }
  } catch (error) {
    console.error("[contact] Failed to reach Resend:", error);
    return NextResponse.json({ ok: false, code: "error" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
