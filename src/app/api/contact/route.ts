import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      company,
      phone,
      subject,
      message,
      privacy
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message || !privacy) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if SendGrid is configured
    if (!process.env.SENDGRID_API_KEY) {
      console.log('SendGrid API key not configured. Form data:', {
        firstName, lastName, email, company, phone, subject, message
      });
      return NextResponse.json(
        { 
          error: 'Email service not configured. Please contact us directly at hello@metic.ai',
          fallback: true
        },
        { status: 503 }
      );
    }

    // Create email content
    const emailToAdmin = {
      to: 'hello@metic.ai',
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@metic.ai',
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #f97316;">${email}</a></p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${phone ? `<a href="tel:${phone}" style="color: #f97316;">${phone}</a>` : 'Not provided'}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #f97316; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Subject: ${subject}</h3>
            <div style="white-space: pre-wrap; line-height: 1.6;">${message}</div>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #fef3f2; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              <strong>Source:</strong> metic.ai contact form<br>
              <strong>Submitted:</strong> ${new Date().toLocaleString()}<br>
              <strong>Priority:</strong> ${subject.toLowerCase().includes('urgent') ? 'High' : 'Normal'}
            </p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Contact Information:
        Name: ${firstName} ${lastName}
        Email: ${email}
        Company: ${company || 'Not provided'}
        Phone: ${phone || 'Not provided'}
        
        Subject: ${subject}
        
        Message:
        ${message}
        
        ---
        Source: metic.ai contact form
        Submitted: ${new Date().toLocaleString()}
      `
    };

    // Auto-reply email to user
    const autoReply = {
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL || 'hello@metic.ai',
      subject: `Thank you for contacting Metic.ai - We'll be in touch soon!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #f97316;">
            <h1 style="color: #f97316; margin: 0;">Metic.ai</h1>
            <p style="color: #666; margin: 5px 0;">Artificial Intelligence Solutions</p>
          </div>
          
          <div style="padding: 30px 20px;">
            <h2 style="color: #333;">Hi ${firstName}!</h2>
            
            <p style="line-height: 1.6; color: #555;">
              Thank you for reaching out to us regarding "<strong>${subject}</strong>". 
              We've received your message and our team will review it shortly.
            </p>
            
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">What happens next?</h3>
              <ul style="color: #555; line-height: 1.6;">
                <li>Our team will review your inquiry within 24 hours</li>
                <li>A specialist will reach out to discuss your requirements</li>
                <li>We'll provide a customized solution proposal</li>
              </ul>
            </div>
            
            <p style="line-height: 1.6; color: #555;">
              In the meantime, feel free to explore our <a href="https://metic.ai/services" style="color: #f97316;">services</a> 
              or <a href="https://metic.ai/about" style="color: #f97316;">learn more about us</a>.
            </p>
            
            <div style="background-color: #fef3f2; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                <strong>Need immediate assistance?</strong><br>
                📧 <a href="mailto:hello@metic.ai" style="color: #f97316;">hello@metic.ai</a><br>
                📞 <a href="tel:+917892518414" style="color: #f97316;">+91 7892518414</a>
              </p>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; background-color: #f3f4f6; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              Best regards,<br>
              <strong style="color: #f97316;">The Metic.ai Team</strong>
            </p>
          </div>
        </div>
      `,
      text: `
        Hi ${firstName}!
        
        Thank you for reaching out to us regarding "${subject}". 
        We've received your message and our team will review it shortly.
        
        What happens next?
        • Our team will review your inquiry within 24 hours
        • A specialist will reach out to discuss your requirements  
        • We'll provide a customized solution proposal
        
        Need immediate assistance?
        Email: hello@metic.ai
        Phone: +91 7892518414
        
        Best regards,
        The Metic.ai Team
      `
    };

    try {
      // Send both emails
      await Promise.all([
        sgMail.send(emailToAdmin),
        sgMail.send(autoReply)
      ]);

      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your message! We will get back to you within 24 hours.'
        },
        { status: 200 }
      );

    } catch (sendError: any) {
      console.error('SendGrid error:', sendError);
      
      // Log the form data for manual follow-up
      console.log('Failed to send email for form submission:', {
        firstName, lastName, email, company, phone, subject, message,
        error: sendError.message
      });

      return NextResponse.json(
        { 
          error: 'Failed to send email. Please contact us directly at hello@metic.ai',
          fallback: true
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please contact us directly at hello@metic.ai' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}