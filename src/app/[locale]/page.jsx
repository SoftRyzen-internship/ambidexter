import { Hero } from '@/sections';
import { AboutMeSection } from '@/sections';

import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { locale } }) {
  const localeData = await getDictionary(locale);

  return (
    <>
      <Hero data={localeData} />
      <AboutMeSection data={localeData.aboutMe} />
    </>
  );
}
