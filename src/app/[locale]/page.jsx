import {
  Hero,
  AboutSchool,
  AboutMeSection,
  Courses,
  FormatSection,
} from '@/sections';

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
    formData,
    socialMedia,
  } = localeData;

  return (
    <>
      <Hero data={hero} icons={socialMedia} />
      <AboutSchool aboutSchool={aboutSchool} />
      <AboutMeSection data={aboutMe} />
      <FormatSection
        data={format}
        btnText={applyButtonLabel}
        formData={formData}
      />
      <Courses data={courses} />
    </>
  );
}
