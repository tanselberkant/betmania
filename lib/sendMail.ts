import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { readFileSync } from 'fs';
import { join } from 'path';
import { connectToDb } from '@/utils/connectDb';
import { Subscriber } from './models';

async function sendMail() {
  await connectToDb();

  // HTML dosyasını oku
  const emailTemplatePath = join(process.cwd(), 'emails/email-template.html');
  const emailHtml = readFileSync(emailTemplatePath, 'utf-8');

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  try {
    // Aboneleri veritabanından çek
    const subscribers = await Subscriber.find({});

    // Eğer abone yoksa, işlemi durdur
    if (subscribers.length === 0) {
      console.log('No subscribers found.');
      return;
    }

    // Her bir aboneye e-posta gönder
    for (const subscriber of subscribers) {
      const mailOptions: Mail.Options = {
        from: process.env.NODEMAILER_EMAIL,
        to: subscriber.email, // Abonenin e-posta adresi
        subject: `BetOrbit Yeni | BetOrbit New`,
        html: emailHtml,
      };

      await transport.sendMail(mailOptions);
    }

    console.log('Emails sent successfully to all subscribers.');
  } catch (err) {
    console.log('sendMail error:', err);
  }
}

export { sendMail };
