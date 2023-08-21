import {
  Hero,
  AboutMeSection,
  Courses,
  FormatSection,
  FreeClass,
} from '@/sections';

import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { locale } }) {
  const localeData = await getDictionary(locale);
  const { aboutMe, courses, format, applyButtonLabel, hero, advertise } =
    localeData;

  return (
    <>
      <Hero data={localeData} />
      <AboutMeSection data={aboutMe} />
      <FormatSection data={format} btnText={applyButtonLabel} />
      <Courses data={courses} />
      <FreeClass
        data={advertise}
        btnLabel={applyButtonLabel}
        altText={hero.title}
      />
    </>
  );
}
