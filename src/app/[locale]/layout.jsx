import { Inter } from 'next/font/google';

import { getMetaByLocale } from '@/utils/getMetaData';

import './globals.css';
import { Header } from '@/layout';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params }) {
  const metaDictionary = await getMetaByLocale(params.locale);

  return {
    title: metaDictionary.title,
    description: metaDictionary.description,
  };
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header />

        <main className="flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>
      </body>
    </html>
  );
}
