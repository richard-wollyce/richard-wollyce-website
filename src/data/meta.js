// Per-locale <head> metadata. The strings live here so the layout's
// generateMetadata, the sitemap and the robots file all read one table.
import { DEFAULT_LOCALE, localeMeta, locales } from './content';
import { siteConfig } from './site';

const title = 'Richard Wollyce | Tech Lead & Full-Stack Software Engineer';

const keywords = [
  'Tech Lead',
  'Full Stack Software Engineer',
  'AI Memory System',
  'AI Agents',
  'Local-First Software',
  'Rust',
  'Model Context Protocol',
  'Information Retrieval',
  'Conversion Engineering',
  'Product Engineering',
  'Software Architecture',
  'React',
  'Next.js',
  'TanStack Start',
  'Expo',
  'React Native',
  'Three.js',
  'Node.js',
  'TypeScript',
  'Supabase',
  'PostgreSQL',
  'Generative AI',
  'Payment Systems',
  'Portfolio',
];

export const meta = {
  en: {
    title,
    description:
      'Tech Lead and Full-Stack Software Engineer. Creator of Ulpia, an open-source retrieval layer for AI agents (RAG without embeddings) written in Rust, with its evaluation published. Payments, attribution and conversion engineering at Casa Seth. Remote across Latin America.',
    keywords,
    ogLocale: 'en_US',
  },
  es: {
    title,
    description:
      'Tech Lead y Full-Stack Software Engineer. Creador de Ulpia, capa de retrieval open source para agentes de IA (RAG sin embeddings) escrita en Rust, con evaluación publicada. Pagos, atribución y conversión en Casa Seth. Remoto para Chile y LATAM.',
    keywords,
    ogLocale: 'es_CL',
  },
  'pt-BR': {
    title,
    description:
      'Tech Lead e Full-Stack Software Engineer. Criador do Ulpia, camada de retrieval open source para agentes de IA (RAG sem embeddings) escrita em Rust, com avaliação publicada. Pagamentos, atribuição e conversão na Casa Seth. Remoto para a América Latina.',
    keywords,
    ogLocale: 'pt_BR',
  },
};

export const SITE_URL = siteConfig.website;

// "/" becomes "https://richardwollyce.com", "/es" becomes
// "https://richardwollyce.com/es". Built by hand rather than left to
// metadataBase so the sitemap and the <head> print byte-identical hrefs;
// Next strips the trailing slash from canonical and alternate hrefs, so the
// root is stripped here too.
export function absoluteUrl(path) {
  return new URL(path, SITE_URL).href.replace(/\/$/, '');
}

// hreflang -> absolute URL. One entry per shipped locale, plus es-CL, which
// Google treats as a distinct target and which the Spanish page serves, and
// x-default, which is the English page because that is what "/" returns to a
// visitor with no stored preference.
export function languageAlternates() {
  const map = {};
  for (const l of locales) map[l.htmlLang] = absoluteUrl(l.path);
  map['es-CL'] = absoluteUrl(localeMeta('es').path);
  map['x-default'] = absoluteUrl(localeMeta(DEFAULT_LOCALE).path);
  return map;
}

export function buildMetadata(code) {
  const m = meta[code] ?? meta[DEFAULT_LOCALE];
  const url = absoluteUrl(localeMeta(code).path);

  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: languageAlternates(),
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url,
      siteName: 'Richard Wollyce Portfolio',
      locale: m.ogLocale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
