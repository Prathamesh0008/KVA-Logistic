import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Validation
    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "All required fields missing" },
        { status: 400 }
      );
    }

    // SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    /* ================= ADMIN MAIL ================= */

    const adminMail = {
      from: `"KVA Logistics" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `📩 New Contact: ${subject || "General Inquiry"}`,

      html: `
        <h2>New Contact Form Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not Provided"}</p>
        <p><strong>Subject:</strong> ${subject || "General"}</p>

        <hr/>

        <h3>Message</h3>

        <div style="
          padding:15px;
          background:#f4f4f4;
          border-radius:5px;
          font-size:15px;
          line-height:1.6;
        ">
          ${message.replace(/\n/g, "<br>")}
        </div>

        <hr/>

        <p>Sent from KVA Website</p>
      `,
    };

    /* ================= USER MAIL ================= */

    const userMail = {
      from: `"KVA Logistics" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "✅ We received your message – KVA Logistics",

      html: `
        <h2>Hello ${name},</h2>

        <p>Thank you for contacting KVA Logistics.</p>
        <p>We received your message and will respond shortly.</p>

        <hr/>

        <h3>Your Message</h3>

        <div style="
          padding:15px;
          background:#f9f9f9;
          border-radius:5px;
          font-size:14px;
        ">
          ${message.replace(/\n/g, "<br>")}
        </div>

        <hr/>

        <p>📞 +31 687 202 2074</p>
        <p>✉️ info@logistickva.com</p>

        <p>Regards,<br/>KVA Logistics Team</p>
      `,
    };

    // Send mails
    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    return Response.json({ success: true });

  } catch (error) {
    console.error("Mail Error:", error);

    return Response.json(
      { success: false, error: "Mail failed" },
      { status: 500 }
    );
  }
}