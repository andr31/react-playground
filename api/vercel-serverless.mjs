import { google } from 'googleapis';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';

// Helper function to initialize Google Drive
async function initializeDrive() {
  console.log('Service account', process.env.GOOGLE_SERVICE_ACCOUNT);
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  // Load your service account key JSON file
  const serviceAccountPath = join(
    __dirname,
    process.env.GOOGLE_SERVICE_ACCOUNT
  );
  const serviceAccount = JSON.parse(
    await fs.readFile(serviceAccountPath, 'utf8')
  );

  // Create a new JWT client using the service account credentials
  const auth = new google.auth.JWT(
    serviceAccount.client_email,
    null,
    serviceAccount.private_key,
    ['https://www.googleapis.com/auth/drive.readonly']
  );

  return google.drive({ version: 'v3', auth });
}

export default async function handler(req, res) {
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
        src: `/api/photos?fileId=${file.id}`,
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
}
