'use client';

import PropTypes from 'prop-types';

export const ApplyButton = ({ data, isFree }) => {
  return (
    <button
      className={`${
        isFree
          ? 'h-[35px] md:w-[211px] md:h-[53px] xl:w-[305px] xl:h-[92px] xl:text-large36 max-w-[320px] md:max-w-none'
          : 'h-[43px] md:h-[61px]'
      } w-full flex items-center justify-center bg-accent border-2 border-accent rounded-10 text-middle md:text-large font-medium cursor-pointer duration-300 hover:bg-white focus:bg-white`}
      type="button"
      onClick={() => {}}
    >
      {data}
    </button>
  );
};

ApplyButton.propTypes = {
  isFree: PropTypes.bool.isRequired,
  data: PropTypes.string.isRequired,
};
