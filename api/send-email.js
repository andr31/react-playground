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

    // Add timeout to the email sending operation
    const emailPromise = resend.emails.send({
      from: 'Mooonwave Client <cristinabat.photography@gmail.com>',
      to: ['cristinabat.photography@gmail.com'],
      subject: `Request Moonwave from ${firstName} ${lastName}`,
      html: `
        <p>From: ${email}</p>
        <p>Name: ${firstName} ${lastName}</p>
        <p>Message:</p>
        <p>${message}</p>
      `,
    });

    // Set a timeout of 8 seconds (leaving 2 seconds buffer)
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Email sending timeout')), 8000);
    });

    const { data, error } = await Promise.race([emailPromise, timeoutPromise]);

    if (error) {
      console.error({ error });
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Full error:', error);
    return res.status(500).json({
      error: error.message || 'Internal server error',
      details: error.response?.body || 'No additional details',
    });
  }
}
