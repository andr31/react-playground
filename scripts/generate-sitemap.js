import { SitemapStream } from 'sitemap';
import { Readable } from 'stream';
import { writeFileSync } from 'fs';

const albumIds = ['family', 'branding', 'maternity']; // Replace with actual album IDs

// Define your routes
const links = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/packages', changefreq: 'monthly', priority: 0.7 },
  { url: '/wesley-chapel-photographer', changefreq: 'weekly', priority: 0.7 },
  { url: '/tampa-photographer', changefreq: 'weekly', priority: 0.7 },

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
