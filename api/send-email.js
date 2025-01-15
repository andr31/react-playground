const sgMail = require('@sendgrid/mail');

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
      from: email,
      subject: `Request Moonwave from ${firstName} ${lastName}`,
      text: message,
      html: '<strong>Sendgrid Test Email Template</strong>',
    };
    
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: error.message });
  }
}