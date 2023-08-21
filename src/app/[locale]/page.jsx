import { Hero, AboutMeSection } from '@/sections';

import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { locale } }) {
  const localeData = await getDictionary(locale);
  const { aboutMe } = localeData;

  return (
    <>
      <Hero data={localeData} />
      <AboutMeSection data={aboutMe} />
    </>
  );
}
