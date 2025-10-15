import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, projectDetails } = await request.json();

    // Check if email credentials are configured
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass || emailPass === 'your_gmail_app_password_here') {
      // In development mode without proper credentials, just log the form data
      console.log('=== Contact Form Submission ===');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone || 'Not provided');
      console.log('Project Details:', projectDetails);
      console.log('===============================');

      // Simulate email sending delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      return NextResponse.json(
        { message: 'Form submitted successfully! (Demo mode - check console for details)' },
        { status: 200 }
      );
    }

    // Create transporter using Gmail (only when credentials are properly set)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Email content
    const mailOptions = {
      from: emailUser,
      to: 'wortholicai@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Project Details:</strong></p>
        <p>${projectDetails}</p>
        <hr>
        <p><em>This message was sent from the Wortholic website contact form.</em></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
}