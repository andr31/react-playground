import { SitemapStream } from 'sitemap';
import { Readable } from 'stream';
import { writeFileSync } from 'fs';

const links = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/packages', changefreq: 'monthly', priority: 0.7 },
  // If you have specific album IDs you want to include, add them like this:
  // { url: '/albums/your-album-id', changefreq: 'weekly', priority: 0.8 },
];

// ...rest of your existing code...
