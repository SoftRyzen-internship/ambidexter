'use client';

import { getDictionary } from '@/utils/getDictionary';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const SocialNetworks = () => {
  const { locale } = useParams();
  const [socialNetworks, setsocialNetworks] = useState(null);

  useEffect(() => {
    getDictionary(locale).then(data => setsocialNetworks(data.socialNetworks));
  }, [locale]);
  return (
    <div className="uppercase flex flex-col gap-[17px] justify-center items-center">
      {socialNetworks}
      <div>icons</div>
    </div>
  );
};
