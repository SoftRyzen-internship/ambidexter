import { Inter } from 'next/font/google';
import { getMetaByLocale } from '@/utils/getMetaData';
import { i18n } from 'i18n';
import './globals.css';
import Header from '@/layout/Header/Header';

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

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header locale={locale} />

        <main className="flex min-h-screen flex-col items-center ">
          {children}
        </main>
      </body>
    </html>
  );
}
