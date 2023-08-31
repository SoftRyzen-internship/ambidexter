import { Inter } from 'next/font/google';
import { i18n } from 'i18n';

import { Header, Footer } from '@/layout';
import { getMetaByLocale } from '@/utils/getMetaData';
import { getDictionary } from '@/utils/getDictionary';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params }) {
  const metaDictionary = await getMetaByLocale(params.locale);

  return {
    title: metaDictionary.home.title,
    description: metaDictionary.home.description,
    metadataBase: new URL('https://ambidexter.vercel.app/'),
    openGraph: {
      title: metaDictionary.home.title,
      description: metaDictionary.home.description,
      url: 'https://ambidexter.vercel.app/',
      siteName: 'Ambidexter',
      locale: 'en',
      type: 'website',
      // manifest: '/meta/site.webmanifest',
      // alternates: {
      //  canonical: 'https://ambidexter.vercel.app/',
      // },
    },
    icons: {
      icon: [
        {
          url: '/src/app/favicon.ico',
        },
        {
          url: '/favicon/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          url: '/favicon/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          url: '/favicon/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          url: '/favicon/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      shortcut: '/favicon/favicon.ico',
      apple: '/favicon/apple-touch-icon.png',
      other: {
        rel: '/favicon/apple-touch-icon.png',
        url: '/favicon/apple-touch-icon.png',
      },
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ locale: locale }));
}

export default async function RootLayout({ children, params: { locale } }) {
  const localeData = await getDictionary(locale);

  const { navBar, socialNetworks, socialMedia, contacts, siteMap } = localeData;

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header
          navBar={navBar}
          siteMap={siteMap}
          socialNetworks={socialNetworks}
          socialMedia={socialMedia}
          locale={locale}
        />
        <main className="flex min-h-screen flex-col items-center">
          {children}
        </main>
        <Footer
          contacts={contacts}
          navBar={navBar}
          socialMedia={socialMedia}
          locale={locale}
          goHome={siteMap.goHome}
        />
      </body>
    </html>
  );
}
