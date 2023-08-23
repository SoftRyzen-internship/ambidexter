import {
  Hero,
  AboutSchool,
  AboutMeSection,
  Courses,
  FormatSection,
} from '@/sections';
import { ForWhomSection } from '@/sections/ForWhomSection/ForWhomSection';

import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { locale } }) {
  const localeData = await getDictionary(locale);
  const { aboutMe, courses, format, applyButtonLabel, orientedClient } =
    localeData;

  return (
    <>
      <Hero data={localeData} />
      <AboutSchool aboutSchool={localeData.aboutSchool} />
      <AboutMeSection data={aboutMe} />
      <ForWhomSection data={orientedClient} />
      <FormatSection data={format} btnText={applyButtonLabel} />
      <Courses data={courses} />
    </>
  );
}
