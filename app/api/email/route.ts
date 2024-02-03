import { NextResponse, type NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function POST(request: NextRequest) {
  // console.log('hree->');
  const { email, message } = await request.json();

  // HTML dosyasını oku
  const emailTemplatePath = join(process.cwd(), '/emails/email-template.html');
  const emailHtml = readFileSync(emailTemplatePath, 'utf-8');

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.NODEMAILER_EMAIL,
    to: 'tanselberkant@gmail.com,infobetorbit@gmail.com',
    subject: `BetOrbit Yeni | BetOrbit New`,
    html: emailHtml,
  };

  try {
    await transport.sendMail(mailOptions);
    console.log('mail send-->');
    return NextResponse.json({ message: 'Success!', status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Failed!', status: 500 });
  }
}
