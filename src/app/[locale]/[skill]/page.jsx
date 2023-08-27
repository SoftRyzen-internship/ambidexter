import { getDictionary } from '@/utils/getDictionary';
import { getMetaByLocale } from '@/utils/getMetaData';
import { CoursePageList, FreeClass } from '@/sections';

export async function generateMetadata({ params }) {
  const { locale, skill } = params;

  const metaDictionary = await getMetaByLocale(locale);

  return {
    title: metaDictionary[skill].title,
    description: metaDictionary[skill].description,
  };
}

export default async function OratorySkillPage({ params }) {
  const { locale, skill } = params;

  const localeData = await getDictionary(locale);
  const { coursePages, advertise, applyButtonLabel, hero } = localeData;

  return (
    <>
      <CoursePageList
        data={coursePages[skill]}
        label={coursePages.label}
        isActor={skill === 'acting-skill'}
      />
      <FreeClass
        data={advertise}
        btnLabel={applyButtonLabel}
        altText={hero.title}
        isCoursePage
      />
    </>
  );
}
