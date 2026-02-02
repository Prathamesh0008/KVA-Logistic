import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid request format. Please check your input.' 
        },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !subject || !message?.trim()) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please fill in all required fields: Name, Email, Subject, and Message' 
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please enter a valid email address' 
        },
        { status: 400 }
      );
    }

    // Log the submission (for debugging)
    console.log('Contact form submission received:', {
      name,
      email,
      subject,
      timestamp: new Date().toISOString()
    });

    // Try to send email if email configuration is available
    try {
      // Check if email credentials are configured
      if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
        // Create email transporter
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        });

        // Prepare email content
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: 'info@logisticKVA.com',
          replyTo: email,
          subject: `New Contact Form: ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px;">
              <h2 style="color: #521903;">New Contact Form Submission</h2>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #f8b936;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>
              <p style="color: #666; font-size: 12px; margin-top: 20px;">
                This message was sent from KVA Logistics website contact form.
              </p>
            </div>
          `,
          text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nSubject: ${subject}\nMessage:\n${message}`
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
      } else {
        console.log('Email credentials not configured, skipping email sending');
      }
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue even if email fails - we still want to return success to user
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We have received it and will get back to you within 2 hours.',
      data: {
        name,
        email,
        subject,
        receivedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'An unexpected error occurred. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// GET method for testing
export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'KVA Logistics Contact API is running',
    version: '1.0',
    timestamp: new Date().toISOString(),
    instructions: 'Use POST method to submit contact form data',
    required_fields: ['name', 'email', 'subject', 'message'],
    optional_fields: ['phone']
  });
}