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
    const resend = new Resend(process.env.RESEND_API_KEY); // Note: Changed from VITE_RESEND_API_KEY
    const { email, firstName, lastName, message } = req.body;

    // Add timeout to the email sending operation
    const timeoutDuration = 8000; // 8 seconds
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutDuration);

    const { data, error } = await Promise.race([
      resend.emails.send({
        from: 'Moonwave Photography <onboarding@resend.dev>',
        to: ['cristinabat.photography@gmail.com'],
        reply_to: email,
        subject: `Request Moonwave from ${firstName} ${lastName}`,
        html: `
          <p>From: ${email}</p>
          <p>Name: ${firstName} ${lastName}</p>
          <p>Message:</p>
          <p>${message}</p>
        `,
      }),
      new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error('Email sending timeout')),
          timeoutDuration
        )
      ),
    ]);

    clearTimeout(timeoutId);

    if (error) {
      console.error('Email sending error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Full error:', error);
    if (error.message === 'Email sending timeout') {
      return res.status(504).json({ error: 'Request timeout' });
    }
    return res.status(500).json({
      error: error.message || 'Internal server error',
      details: error.response?.body || 'No additional details',
    });
  }
}
