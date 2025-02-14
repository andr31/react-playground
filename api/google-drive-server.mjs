import express from 'express';
import cors from 'cors';
import { google } from 'googleapis';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());

// Load your service account key JSON file
const serviceAccountPath = join(__dirname, '/moonwave-11bbf31e8a82.json');
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

const drive = google.drive({ version: 'v3', auth });

app.get('/api/photos/:folderId', async (req, res) => {
  try {
    const response = await drive.files.list({
      q: `'${req.params.folderId}' in parents and mimeType contains 'image/'`,
      fields: 'files(id, name)',
    });

    const files = response.data.files.map((file) => ({
      id: file.id,
      name: file.name,
      src: `/api/photo/${file.id}`,
    }));

    res.json(files);
  } catch (error) {
    console.error('Error fetching photos:', error);
    res.status(500).json({ error: 'Failed to fetch photos' });
  }
});

app.get('/api/photo/:fileId', async (req, res) => {
  try {
    const fileId = req.params.fileId;
    const file = await drive.files.get({ fileId: fileId, fields: 'mimeType' });
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
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
