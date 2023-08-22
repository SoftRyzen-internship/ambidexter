'use client';

import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <ThreeDots height="80" width="80" color="green" ariaLabel="loading" />
    </div>
  );
};
