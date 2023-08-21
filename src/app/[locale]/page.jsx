import { Hero } from '@/sections';

import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { locale } }) {
  const localeData = await getDictionary(locale);

  const { hero } = localeData;

  return (
    <>
      <Hero data={hero} />
    </>
  );
}
