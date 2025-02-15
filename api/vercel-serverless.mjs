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
  try {
    const {
      query: { folderId, fileId },
      method,
    } = req;
    const drive = await initializeDrive();

    if (method === 'GET' && folderId) {
      try {
        const response = await drive.files.list({
          q: `'${folderId}' in parents and mimeType contains 'image/'`,
          fields: 'files(id, name)',
        });

        const files = response.data.files.map((file) => ({
          id: file.id,
          name: file.name,
          src: `/api/photo?fileId=${file.id}`,
        }));

        res.status(200).json(files);
      } catch (error) {
        console.error('Error fetching photos:', error);
        res.status(500).json({ error: 'Failed to fetch photos' });
      }
    } else if (method === 'GET' && fileId) {
      try {
        const file = await drive.files.get({
          fileId: fileId,
          fields: 'mimeType',
        });
        res.setHeader('Content-Type', file.data.mimeType);

        const response = await drive.files.get(
          { fileId: fileId, alt: 'media' },
          { responseType: 'stream' }
        );

        response.data
          .on('end', () => {
            console.log('Done');
          })
          .on('error', (err) => {
            console.log('Error', err);
          })
          .pipe(res);
      } catch (error) {
        console.error('Error fetching photo:', error);
        res.status(500).json({ error: 'Failed to fetch photo' });
      }
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).json({ error: 'Unexpected server error' });
  }
}
