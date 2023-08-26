import { getDictionary } from '@/utils/getDictionary';
import { CoursePageList, FreeClass } from '@/sections';

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
