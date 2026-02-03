import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["your@email.com"], // change this
      subject: subject || "New Contact Message",
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return Response.json(
      { ok: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
