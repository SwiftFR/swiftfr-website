// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      storeUrl,
      monthlyOrderVolume,
      salesChannels,
      productLink,
      dimensions,
      destinations,
      startTimeline,
      contactName,
      email,
      notes,
    } = body;

    // Basic validation – must match your ContactForm required fields
    if (
      !storeUrl ||
      !monthlyOrderVolume ||
      !productLink ||
      !startTimeline ||
      !contactName ||
      !email
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Read SMTP config from environment
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
    const to = process.env.NOTIFY_EMAIL || user;

    console.log("[contact] SMTP debug:", {
      user,
      hasPass: !!pass,
      passLen: pass?.length,
    });

    // If SMTP isn’t configured, just log to console and still return ok
    if (!user || !pass || !host || !to) {
      console.error(
        "[contact] Missing SMTP_* or NOTIFY_EMAIL env vars – not sending email."
      );
      console.log("[contact] Form submission:", body);
      return NextResponse.json({
        ok: true,
        warning: "Email not sent – SMTP not configured on server.",
      });
    }

    // ✅ DEFINE text here
    const text = `New SwiftFR contact form submission:

Contact name: ${contactName}
Email: ${email}

Store URL: ${storeUrl}
Monthly order volume: ${monthlyOrderVolume}
Sales channels: ${(salesChannels || []).join(", ") || "—"}
Product link: ${productLink}

Dimensions (L x W x H, weight):
${dimensions?.length || "-"} x ${dimensions?.width || "-"} x ${
      dimensions?.height || "-"
    } cm, ${dimensions?.weight || "-"} kg

Typical destinations: ${(destinations || []).join(", ") || "—"}
Start timeline: ${startTimeline}

Additional notes:
${notes || "—"}
`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `SwiftFR Website <${user}>`,
      to,
      subject: "New SwiftFR contact form submission",
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Error handling submission:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
