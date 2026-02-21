import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return Response.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using SMTP (works with Gmail, Outlook, etc.)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to Admin (with all user details)
    const adminMailOptions = {
      from: `"KVA Logistics Contact" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `📦 New Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; }
            .header { background: linear-gradient(90deg, #f8b936, #dc8c18); padding: 20px; text-align: center; }
            .header h2 { margin: 0; color: #521903; }
            .content { padding: 25px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #521903; }
            .value { margin-top: 5px; padding: 8px; background: #f9f9f9; border-radius: 4px; }
            .footer { background: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Phone</div>
                <div class="value">${phone || 'Not provided'}</div>
              </div>
              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${subject}</div>
              </div>
 <div class="field">
  <div class="label">Message</div>
  <div style="
    background:#f4f4f4;
    padding:20px;
    border-radius:10px;
    border:1px solid #e0e0e0;
    font-size:15px;
    line-height:1.7;
    color:#333;
    white-space: pre-line;
  ">
    ${message}
  </div>
</div>
            <div class="footer">
              <p>This message was sent from the KVA Logistics contact page.</p>
              <p>© ${new Date().getFullYear()} KVA Logistics</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Email to User (thank you, with brand colors)
    const userMailOptions = {
      from: `"KVA Logistics" <${process.env.SMTP_USER}>`,
      to: email,
      subject: '✅ We received your message – KVA Logistics',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; }
            .header { background: linear-gradient(90deg, #f8b936, #dc8c18); padding: 30px 20px; text-align: center; }
            .header h1 { margin: 0; color: #521903; font-size: 28px; }
            .content { padding: 30px; }
            .thank-you { font-size: 18px; margin-bottom: 20px; }
            .details { background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0; }
            .button { display: inline-block; background: #9f4409; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold; }
            .footer { background: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You, ${name}!</h1>
            </div>
            <div class="content">
              <p class="thank-you">We have received your message and will get back to you within <strong>2 hours</strong>.</p>
              <div class="details">
                <p><strong>Your request:</strong> ${subject}</p>
                <p><strong>Reference ID:</strong> KVA-${Date.now().toString().slice(-6)}</p>
              </div>
              <p>If your matter is urgent, please call our emergency hotline:</p>
              <p style="text-align: center;">
                <a href="tel:+316872022074" class="button">📞 +31 687 202 2074</a>
              </p>
            </div>
            <div class="footer">
              <p>KVA Logistics – Your trusted logistics partner</p>
              <p><a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://logistickva.com'}">Visit our website</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}