import { mailOptions, transporter } from '@/utils/nodemailer';
// import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();
  await transporter.sendMail({ ...mailOptions, text: 'Test message' });
  console.log(body);
  return new Response('hi');
}
