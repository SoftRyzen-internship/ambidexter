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
    openGraph: {
      title: metaDictionary.home.title,
      description: metaDictionary.home.description,
      url: 'https://ambidexter.vercel.app/',
      siteName: 'Ambidexter',
      images: [
        {
          url: '/public/images/opengraph-image.jpg',
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en',
      type: 'website',
      // manifest: '/meta/site.webmanifest',
      // alternates: {
      //   canonical: 'https://ambidexter.vercel.app/',
      //   metadataBase: new URL('https://ambidexter.vercel.app/'),
      // },
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ locale: locale }));
}

export default async function RootLayout({ children, params: { locale } }) {
  const localeData = await getDictionary(locale);

  const { navBar, socialNetworks, socialMedia, contacts, goHome } = localeData;

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header
          navBar={navBar}
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
          goHome={goHome}
        />
      </body>
    </html>
  );
}
