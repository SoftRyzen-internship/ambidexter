import { getMetaByLocale } from '@/utils/getMetaData';
import { getDictionary } from '@/utils/getDictionary';

import { CoursePageList, FreeClass } from '@/sections';

export const dynamicParams = false;

export async function generateStaticParams({ params }) {
  const { locale } = params;

  return [
    { locale: locale, skill: 'oratory-skill' },
    { locale: locale, skill: 'acting-skill' },
  ];
}

export async function generateMetadata({ params: { locale, skill } }) {
  const metaDictionary = await getMetaByLocale(locale);

  const pageSkill = skill === 'acting-skill' ? 'actingSkill' : 'oratorySkill';

  return {
    title: metaDictionary[pageSkill].title,
    description: metaDictionary[pageSkill].description,
    openGraph: {
      title: metaDictionary[pageSkill].title,
      description: metaDictionary[pageSkill].description,
    },
  };
}

export default async function OratorySkillPage({ params }) {
  const { locale, skill } = params;

  const pageSkill = skill === 'acting-skill' ? 'actingSkill' : 'oratorySkill';

  const localeData = await getDictionary(locale);
  const { coursePages, advertise, applyButtonLabel, formData, hero } =
    localeData;

  return (
    <>
      <CoursePageList
        data={coursePages[pageSkill]}
        label={coursePages.label}
        isActor={skill === 'acting-skill'}
      />
      <FreeClass
        data={advertise}
        btnLabel={applyButtonLabel}
        altText={hero.title}
        isCoursePage
        formData={formData}
      />
    </>
  );
}
