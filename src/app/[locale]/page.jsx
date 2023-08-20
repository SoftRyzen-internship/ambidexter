import { Hero } from '@/sections';
import { FreeClass } from '@/sections/FreeClass/FreeClass';

import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { locale } }) {
  const localeData = await getDictionary(locale);

  return (
    <>
      <Hero data={localeData} />
      <FreeClass
        data={localeData.advertise}
        btnLabel={localeData.applyButtonLabel}
        altText={localeData.hero.title}
      />
    </>
  );
}
