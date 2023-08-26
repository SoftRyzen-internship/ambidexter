import { getDictionary } from '@/utils/getDictionary';
import { getMetaByLocale } from '@/utils/getMetaData';
import { CoursePageList, FreeClass } from '@/sections';

export async function generateMetadata(params) {
  const { orator: metaDictionary } = await getMetaByLocale(
    params.params.locale,
  );

  return {
    title: metaDictionary.title,
    description: metaDictionary.description,
  };
}

export default async function OratoricalSkillPage({ params: { locale } }) {
  const localeData = await getDictionary(locale);
  const {
    coursePages: { orator, label },
    advertise,
    applyButtonLabel,
    hero,
  } = localeData;

  return (
    <>
      <CoursePageList data={orator} label={label} />
      <FreeClass
        data={advertise}
        btnLabel={applyButtonLabel}
        altText={hero.title}
        isCoursePage
      />
    </>
  );
}
