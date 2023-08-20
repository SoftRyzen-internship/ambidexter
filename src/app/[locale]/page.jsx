import { Hero } from '@/sections';
import { Courses } from '@/sections';

import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { locale } }) {
  const localeData = await getDictionary(locale);

  const { courses } = localeData;

  return (
    <>
      <Hero data={localeData} />
      <Courses data={courses} />
    </>
  );
}
