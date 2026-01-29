// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      storeUrl,
      monthlyOrderVolume,
      salesChannels,
      otherSalesChannel,
      productLink,
      dimensions,
      destinations,
      startTimeline,
      contactName,
      email,
      notes,
    } = body;

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

    const text = `New SwiftFR contact form submission:

Contact name: ${contactName}
Email: ${email}
Store URL: ${storeUrl}
Monthly order volume: ${monthlyOrderVolume}
Sales channels: ${(salesChannels || []).join(", ") || "—"}
Other sales channel: ${otherSalesChannel || "—"}
Product link: ${productLink}
Dimensions:
  ${dimensions?.length || "-"} x ${dimensions?.width || "-"} x ${
      dimensions?.height || "-"
    } cm, ${dimensions?.weight || "-"} kg
Destinations: ${(destinations || []).join(", ") || "—"}
Start timeline: ${startTimeline}

Notes:
${notes || "—"}
`;

    await resend.emails.send({
      from: "SwiftFR <onboarding@resend.dev>",
      to: process.env.NOTIFY_EMAIL!,
      subject: "New SwiftFR contact form submission",
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
