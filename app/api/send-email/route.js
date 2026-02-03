import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return Response.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.ADMIN_EMAIL) {
      console.error('Missing email configuration in environment variables');
      return Response.json(
        { 
          success: false, 
          message: 'Email service not configured. Please contact administrator.' 
        },
        { status: 500 }
      );
    }

    // SMTP Configuration using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Auto-detect based on email domain
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Optional: Auto-detect for other providers
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === 'true' || false,
    });

    // Get admin email from environment or use default
    const adminEmail = process.env.ADMIN_EMAIL || 'info@logisticKVA.com';
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://logistickva.com';

    // Email content - Notification to Admin
    const adminMailOptions = {
      from: `"KVA Logistics Form" <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      replyTo: email,
      subject: `📦 New Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
            .header { 
              background: linear-gradient(90deg, #f8b936, #dc8c18); 
              padding: 25px 20px; 
              color: white; 
              text-align: center; 
              border-radius: 8px 8px 0 0;
            }
            .logo { 
              font-size: 24px; 
              font-weight: bold; 
              margin-bottom: 10px;
              color: #521903;
            }
            .content { padding: 25px; background: #f9f9f9; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0; }
            .field { 
              margin-bottom: 18px; 
              padding-bottom: 18px; 
              border-bottom: 1px solid #eee; 
            }
            .field:last-child { border-bottom: none; }
            .label { 
              font-weight: bold; 
              color: #521903; 
              margin-bottom: 6px;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .value { 
              margin-top: 5px; 
              font-size: 15px;
              color: #333;
            }
            .important { 
              background: #fff8e1; 
              padding: 12px; 
              border-left: 4px solid #f8b936; 
              margin: 20px 0; 
              border-radius: 4px;
            }
            .footer { 
              margin-top: 25px; 
              padding-top: 20px; 
              border-top: 1px solid #ddd; 
              color: #666; 
              font-size: 12px; 
              text-align: center;
            }
            .button { 
              display: inline-block; 
              background: #f8b936; 
              color: #521903; 
              padding: 10px 20px; 
              text-decoration: none; 
              border-radius: 4px; 
              font-weight: bold;
              margin: 10px 5px;
            }
            .quick-reply { background: #e8f5e9; padding: 15px; border-radius: 5px; margin: 15px 0; }
            .timestamp { color: #666; font-size: 13px; text-align: right; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">KVA LOGISTICS</div>
              <h2 style="margin: 0; color: white;">New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Customer Information</div>
                <div class="value">
                  <strong>${name}</strong><br>
                  ✉️ <a href="mailto:${email}" style="color: #dc8c18;">${email}</a><br>
                  📞 ${phone || '<em>Not provided</em>'}
                </div>
              </div>
              
              <div class="field">
                <div class="label">Subject</div>
                <div class="value" style="font-size: 16px; color: #9f4409;">
                  ${subject}
                </div>
              </div>
              
              <div class="field">
                <div class="label">Message</div>
                <div class="value" style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 5px; border: 1px solid #eee;">
                  ${message}
                </div>
              </div>
              
              <div class="important">
                <strong>⚠️ ACTION REQUIRED:</strong> Please respond within 2 hours as promised on our website.
              </div>
              
              <div class="quick-reply">
                <div style="margin-bottom: 10px;">
                  <strong>Quick Reply Options:</strong>
                </div>
                <a href="mailto:${email}?subject=Re: ${subject}&body=Dear ${name},%0D%0A%0D%0AThank you for contacting KVA Logistics..." class="button">
                  ✉️ Reply via Email
                </a>
                <a href="tel:${phone}" class="button" style="background: #521903; color: white;">
                  📞 Call Customer
                </a>
              </div>
              
              <div class="timestamp">
                📅 Submitted: ${new Date().toLocaleString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}
              </div>
            </div>
            
            <div class="footer">
              <p>This email was generated from the <a href="${appUrl}/contact" style="color: #dc8c18;">KVA Logistics Contact Form</a></p>
              <p>© ${new Date().getFullYear()} KVA Logistics. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        NEW CONTACT FORM SUBMISSION - KVA LOGISTICS
        ============================================

        CUSTOMER INFORMATION:
        ---------------------
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}

        SUBJECT:
        --------
        ${subject}

        MESSAGE:
        --------
        ${message}

        TIME SUBMITTED:
        ---------------
        ${new Date().toLocaleString()}

        URL:
        ----
        ${appUrl}/contact

        ACTION REQUIRED:
        ----------------
        ⚠️ Please respond within 2 hours as promised on our website.

        ---
        This email was generated from the KVA Logistics contact form.
        © ${new Date().getFullYear()} KVA Logistics
      `
    };

    // Optional: Send confirmation email to user
    const userMailOptions = {
      from: `"KVA Logistics" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `✅ We received your message - KVA Logistics`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(90deg, #f8b936, #dc8c18); padding: 20px; color: white; text-align: center; border-radius: 8px; margin-bottom: 20px; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 8px; border: 1px solid #ddd; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0; color: white;">Thank You for Contacting KVA Logistics!</h2>
            </div>
            <div class="content">
              <p><strong>Dear ${name},</strong></p>
              
              <p>We've received your message and our team will get back to you within <strong>2 hours</strong>.</p>
              
              <div style="background: #fff8e1; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #f8b936;">
                <strong>📋 Your Request Summary:</strong>
                <ul style="margin: 10px 0; padding-left: 20px;">
                  <li><strong>Subject:</strong> ${subject}</li>
                  <li><strong>Reference ID:</strong> KVA-${Date.now().toString().slice(-6)}</li>
                  <li><strong>Submitted:</strong> ${new Date().toLocaleString()}</li>
                </ul>
              </div>
              
              <p>If your matter is urgent, please call our emergency hotline:</p>
              <p style="text-align: center; margin: 20px 0;">
                <a href="tel:+316872022074" style="background: #9f4409; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                  📞 +31 687 202 2074
                </a>
              </p>
              
              <p>Best regards,<br>
              <strong>KVA Logistics Team</strong></p>
            </div>
            <div class="footer">
              <p>This is an automated confirmation. Please do not reply to this email.</p>
              <p>© ${new Date().getFullYear()} KVA Logistics | <a href="${appUrl}" style="color: #dc8c18;">${appUrl}</a></p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return Response.json(
      { 
        success: true, 
        message: 'Message sent successfully! Check your email for confirmation.',
        referenceId: `KVA-${Date.now().toString().slice(-6)}`
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    
    // More specific error messages
    let userMessage = 'Failed to send message. Please try again or contact us directly.';
    
    if (error.code === 'EAUTH') {
      userMessage = 'Authentication failed. Please check email configuration.';
    } else if (error.code === 'ENOTFOUND') {
      userMessage = 'SMTP server not found. Please check your network connection.';
    } else if (error.code === 'ECONNREFUSED') {
      userMessage = 'Connection refused. Please check SMTP server settings.';
    }

    return Response.json(
      { 
        success: false, 
        message: userMessage,
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}