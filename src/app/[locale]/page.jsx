import { Hero, AboutMeSection, Courses, FormatSection } from '@/sections';

import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { locale } }) {
  const localeData = await getDictionary(locale);
  const { aboutMe, courses } = localeData;

  return (
    <>
      <Hero data={localeData} />
      <Courses data={courses} />
      <AboutMeSection data={aboutMe} />
      <FormatSection data={localeData} />
    </>
  );
}
