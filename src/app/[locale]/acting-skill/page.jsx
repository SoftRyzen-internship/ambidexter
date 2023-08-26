import { getDictionary } from '@/utils/getDictionary';
import { CoursePageList, FreeClass } from '@/sections';

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
