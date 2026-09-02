import { locales } from '@/data/content';
import { absoluteUrl, languageAlternates } from '@/data/meta';

// Served at /sitemap.xml. One <url> per locale, each carrying the full
// hreflang set so a crawler that lands on any of them learns the other two.
export default function sitemap() {
  const languages = languageAlternates();
  return locales.map((l) => ({
    url: absoluteUrl(l.path),
    changeFrequency: 'monthly',
    priority: l.path === '/' ? 1 : 0.9,
    alternates: { languages },
  }));
}
