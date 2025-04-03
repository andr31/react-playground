import { SitemapStream } from 'sitemap';
import { Readable } from 'stream';
import { writeFileSync } from 'fs';

// Define your album IDs
const DRIVE_FOLDER_ID = {
  FAMILY: '1Hq9SBC97JGH0MUDu-yhn3lJnZOf9MLON',
  BRANDING: '19dK9XLAjEPn3FPf3hRd8EaygEfYhzPIw',
  MATERNITY: '1IGFn-SUvYhq_XZSAVXnY20Lp4gjyFmAN',
};
const albumIds = [
  DRIVE_FOLDER_ID.FAMILY,
  DRIVE_FOLDER_ID.BRANDING,
  DRIVE_FOLDER_ID.MATERNITY,
]; // Replace with actual album IDs

// Define your routes
const links = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/packages', changefreq: 'monthly', priority: 0.7 },
  // Generate URLs for each album
  ...albumIds.map((id) => ({
    url: `/albums/${id}`,
    changefreq: 'weekly',
    priority: 0.8,
  })),
];

const stream = new SitemapStream({
  hostname: 'https://cristinabat.com', // Replace with your actual domain
});

try {
  const sitemap = await streamToPromise(Readable.from(links).pipe(stream));
  writeFileSync('./public/sitemap.xml', sitemap.toString());
  console.log('Sitemap generated successfully!');
} catch (error) {
  console.error('Error generating sitemap:', error);
}

function streamToPromise(stream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
    stream.on('error', reject);
  });
}
