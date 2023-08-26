import { getDictionary } from '@/utils/getDictionary';
import { getMetaByLocale } from '@/utils/getMetaData';
import { CoursePageList, FreeClass } from '@/sections';

export async function generateMetadata(params) {
  const { actor: metaDictionary } = await getMetaByLocale(params.params.locale);

  return {
    title: metaDictionary.title,
    description: metaDictionary.description,
  };
}

export default async function ActingSkillPage({ params: { locale } }) {
  const localeData = await getDictionary(locale);
  const {
    coursePages: { actor, label },
    advertise,
    applyButtonLabel,
    hero,
  } = localeData;

  return (
    <>
      <CoursePageList data={actor} label={label} isActor />
      <FreeClass
        data={advertise}
        btnLabel={applyButtonLabel}
        altText={hero.title}
        isCoursePage
      />
    </>
  );
}
