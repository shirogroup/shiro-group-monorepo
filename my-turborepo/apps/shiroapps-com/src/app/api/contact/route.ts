import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    // Log contact form submission
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log('To: info@shiroapps.com');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Company:', company || 'N/A');
    console.log('Service:', service);
    console.log('Message:', message);
    console.log('===================================');

    // TODO: To send actual emails, install Resend:
    // 1. Run: pnpm add resend
    // 2. Get API key from https://resend.com
    // 3. Add to .env.local: RESEND_API_KEY=your_key
    // 4. Uncomment code below:
    
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'noreply@shiroapps.com',
      to: 'info@shiroapps.com',
      subject: `Contact Form: ${service} - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
    */

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
