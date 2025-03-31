import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://moonwave-six.vercel.app'
  );
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const resend = new Resend(process.env.VITE_RESEND_API_KEY);
    const { email, firstName, lastName, message } = req.body;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['cristinabat.photography@gmail.com'],
      subject: `Request Moonwave from ${firstName} ${lastName}`,
      html: `
        <p>From: ${email}</p>
        <p>Name: ${firstName} ${lastName}</p>
        <p>Message:</p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return console.error({ error });
    }

    console.log({ data });
  } catch (error) {
    console.error('Full error:', error);
    res.status(500).json({
      error: error.message,
      details: error.response?.body || 'No additional details',
    });
  }
}
