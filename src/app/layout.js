import { Anton, Bebas_Neue, Roboto_Condensed } from 'next/font/google';
import './globals.css';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
  display: 'swap',
});

export const metadata = {
  title: 'Richard Wollyce | Tech Lead & Full-Stack Software Engineer',
  description:
    'Tech Lead and Full-Stack Software Engineer leading product engineering across web, mobile, payments, protected media, 3D experiences, generative AI, analytics, and production operations.',
  keywords: [
    'Tech Lead',
    'Full Stack Software Engineer',
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
      'Leading end-to-end product engineering across web, mobile, payments, protected media, 3D experiences, generative AI, and production operations.',
    url: 'https://richardwollyce.com',
    siteName: 'Richard Wollyce Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Richard Wollyce | Tech Lead & Full-Stack Software Engineer',
    description:
      'Leading end-to-end product engineering across web, mobile, payments, protected media, 3D experiences, generative AI, and production operations.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${bebasNeue.variable} ${robotoCondensed.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
                } catch(e) {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
