import { Hero, AboutMeSection, Courses, FormatSection } from '@/sections';

import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { locale } }) {
  const localeData = await getDictionary(locale);
  const { hero, aboutMe, courses, format, applyButtonLabel, socialMedia } =
    localeData;

  return (
    <>
      <Hero data={hero} icons={socialMedia} />
      <AboutMeSection data={aboutMe} />
      <FormatSection data={format} btnText={applyButtonLabel} />
      <Courses data={courses} />
    </>
  );
}
