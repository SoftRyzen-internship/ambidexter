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

  const {
    hero,
    aboutMe,
    courses,
    format,
    aboutSchool,
    applyButtonLabel,
    socialMedia,
    orientedClient,
  } = localeData;

  return (
    <>
      <Hero data={hero} icons={socialMedia} />
      <AboutSchool aboutSchool={aboutSchool} />
      <AboutMeSection data={aboutMe} />
      <ForWhomSection data={orientedClient} />
      <FormatSection data={format} btnText={applyButtonLabel} />
      <Courses data={courses} />
    </>
  );
}
