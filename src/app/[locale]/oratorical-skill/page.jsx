import { getDictionary } from '@/utils/getDictionary';
import { CoursePageList } from '@/sections';

export default async function OratoricalSkillPage({ params: { locale } }) {
  const localeData = await getDictionary(locale);
  const { orator, label } = localeData.coursePages;

  return <CoursePageList data={orator} label={label} />;
}
