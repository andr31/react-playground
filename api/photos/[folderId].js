import { google } from 'googleapis';

let drive;

// Helper function to initialize Google Drive
async function initializeDrive() {
  if (!drive) {
    const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);

    const auth = new google.auth.JWT(
      serviceAccount.client_email,
      null,
      serviceAccount.private_key.replace(/\\n/g, '\n'), // Fix for private key format
      ['https://www.googleapis.com/auth/drive.readonly']
    );

    drive = google.drive({ version: 'v3', auth });
  }
  return drive;
}

export default async function handler(req, res) {
  console.log('Request method:', req.method);
  console.log('Query parameters:', req.query);
  console.log('Request URL:', req.url);

  try {
    const { folderId } = req.query;
    const drive = await initializeDrive();

    if (req.method === 'GET' && folderId) {
      try {
        const response = await drive.files.list({
          q: `'${folderId}' in parents and mimeType contains 'image/'`,
          fields: 'files(id, name)',
        });

        const files = response.data.files.map((file) => ({
          id: file.id,
          name: file.name,
          src: `/api/photo/${file.id}`,
        }));

        res.status(200).json(files);
      } catch (error) {
        console.error('Error fetching photos:', error);
        res.status(500).json({ error: 'Failed to fetch photos' });
      }
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).json({ error: 'Unexpected server error' });
  }
}
