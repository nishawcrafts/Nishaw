import { NextRequest, NextResponse } from "next/server";

/**
 * /api/contact  - Route handler that forwards to Formspree.
 * Set FORMSPREE_ID (server-side) in .env.local to enable real email sending.
 * Without it, submissions succeed in dev but emails are not sent.
 */
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const formspreeId = process.env.FORMSPREE_ID;

    if (formspreeId) {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method:  "POST",
        headers: {
          "Content-Type": "application/json",
          Accept:         "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const detail = await res.text().catch(() => "");
        console.error("[contact] Formspree error:", res.status, detail);
        return NextResponse.json(
          { ok: false, error: "Email delivery failed" },
          { status: 502 }
        );
      }
    } else {
      // Development: log submission and return success
      console.log("[contact] Form submission (no FORMSPREE_ID set):", {
        name:     data.name,
        email:    data.email,
        company:  data.company,
        occasion: data.occasion,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
