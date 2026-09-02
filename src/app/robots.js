import { absoluteUrl } from '@/data/meta';

// Served at /robots.txt.
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: absoluteUrl('/sitemap.xml'),
  };
}
