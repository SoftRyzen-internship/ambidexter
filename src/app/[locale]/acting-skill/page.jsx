import { getDictionary } from '@/utils/getDictionary';
import { CoursePageList } from '@/sections';

export default async function ActingSkillPage({ params: { locale } }) {
  const localeData = await getDictionary(locale);
  const { actor, label } = localeData.coursePages;

  return <CoursePageList data={actor} label={label} isActor />;
}
