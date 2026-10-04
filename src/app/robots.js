import { absoluteUrl } from '@/data/meta';

export const dynamic = 'force-static';

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
