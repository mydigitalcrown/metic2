import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

// For development, we'll use a simple email service
// In production, you should use a service like SendGrid, Resend, or AWS SES

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

    // Create email content
    const emailContent = {
      to: 'hello@metic.ai',
      from: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Sent from metic.ai contact form</em></p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        Company: ${company || 'Not provided'}
        Phone: ${phone || 'Not provided'}
        Subject: ${subject}
        
        Message:
        ${message}
        
        ---
        Sent from metic.ai contact form
      `
    };

    // For now, we'll use a simple approach with nodemailer
    // In production, integrate with a proper email service
    
    // Since we don't have a proper email service configured yet,
    // we'll return success and log the email data
    console.log('Contact form submission:', emailContent);
    
    // TODO: Integrate with SendGrid, Resend, or similar service
    // Example with Resend:
    // const { Resend } = require('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send(emailContent);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.',
        note: 'Email service integration pending - please use direct email for now.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
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