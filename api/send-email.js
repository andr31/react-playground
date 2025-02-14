// api/send-email.js
import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  res.setHeader('Access-Control-Allow-Origin', 'https://moonwave-six.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  try {
    sgMail.setApiKey(process.env.VITE_SENDGRID_API_KEY);
    const { email, firstName, lastName, message } = req.body;

    const msg = {
      to: 'habuc4@gmail.com',
      from: 'habuc4@gmail.com', // CHANGE THIS: Use your verified sender email
      replyTo: email, // This allows replies to go to the form submitter
      subject: `Request Moonwave from ${firstName} ${lastName}`,
      text: `Message from: ${email}\n\n${message}`,
      html: `
        <p>From: ${email}</p>
        <p>Name: ${firstName} ${lastName}</p>
        <p>Message:</p>
        <p>${message}</p>
      `
    };

    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Full error:', error);
    res.status(500).json({
      error: error.message,
      details: error.response?.body || 'No additional details'
    });
  }
}
