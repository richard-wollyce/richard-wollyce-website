import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata = {
  title: 'Richard Wollyce | Tech Lead & Full-Stack Software Engineer',
  description:
    'Tech Lead and Full-Stack Software Engineer. Creator of Ulpia, an open-source local-first memory layer for AI agents written in Rust, and the engineer behind Casa Seth infoproducts, payments, attribution, and conversion systems.',
  keywords: [
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
  ],
  authors: [{ name: 'Richard Wollyce Santos de Souza' }],
  creator: 'Richard Wollyce Santos de Souza',
  metadataBase: new URL('https://richardwollyce.com'),
  openGraph: {
    title: 'Richard Wollyce | Tech Lead & Full-Stack Software Engineer',
    description:
      'Creator of Ulpia, an open-source local-first AI memory system in Rust. Leading infoproducts, payments, attribution, and conversion engineering at Casa Seth.',
    url: 'https://richardwollyce.com',
    siteName: 'Richard Wollyce Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Richard Wollyce | Tech Lead & Full-Stack Software Engineer',
    description:
      'Creator of Ulpia, an open-source local-first AI memory system in Rust. Leading infoproducts, payments, attribution, and conversion engineering at Casa Seth.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
