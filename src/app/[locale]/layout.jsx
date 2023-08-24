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
    title: metaDictionary.title,
    description: metaDictionary.description,
  };
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ locale: locale }));
}

export default async function RootLayout({ children, params: { locale } }) {
  const localeData = await getDictionary(locale);

  const { navBar, socialNetworks, socialMedia, contacts } = localeData;

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header
          navBar={navBar}
          socialNetworks={socialNetworks}
          socialMedia={socialMedia}
        />
        <main className="flex min-h-screen flex-col items-center">
          {children}
        </main>
        <Footer contacts={contacts} />
      </body>
    </html>
  );
}
