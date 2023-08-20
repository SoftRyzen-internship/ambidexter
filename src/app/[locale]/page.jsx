import Header from '@/layout/Header/Header';
import { Hero, AboutSchool } from '@/sections';
import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { locale } }) {
  const localeData = await getDictionary(locale);

  return (
    <>
      <Header locale={localeData} />
      <Hero data={localeData} />
      <AboutSchool aboutSchool={localeData.aboutSchool} />
    </>
  );
}
