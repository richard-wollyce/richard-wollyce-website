import { Inter, Instrument_Serif } from 'next/font/google';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { LocaleProvider } from '@/i18n/LocaleProvider';
import { localeFromSegments, localeMeta, localeSegments, locales } from '@/data/content';
import { buildMetadata } from '@/data/meta';
import '../globals.css';

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

// The root layout sits under app/[[...locale]] so "/" (English), "/es" and
// "/pt-br" each get their own prerendered HTML with the right <html lang>.
// Only the paths listed in generateStaticParams exist; anything else is a 404
// rather than a page rendered on demand in the default language.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((l) => ({ locale: localeSegments(l.code) }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const code = localeFromSegments(locale);
  if (!code) notFound();
  return buildMetadata(code);
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const code = localeFromSegments(locale);
  if (!code) notFound();

  return (
    <html
      lang={localeMeta(code).htmlLang}
      className={`${inter.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
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
        <LocaleProvider initialLocale={code}>{children}</LocaleProvider>
        {/* The ambient field's WebGL layer. It enhances the CSS field in
          * globals.css and never replaces it: the script inserts nothing and
          * sets no class unless it holds a live context and a linked program,
          * so a machine without WebGL keeps the drifting gradients and loses
          * nothing else. afterInteractive because the field is decoration and
          * must not compete with the page it sits behind. */}
        <Script src="/field.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
