'use client';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useSwiper } from 'swiper/react';

export const MoreReviews = ({ label }) => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-center items-center mt-6 md:mt-9">
      <button
        type="button"
        className="px-6 xl:px-9"
        onClick={() => swiper.slidePrev()}
      >
        <Image
          src="/icons/arrow-left.svg"
          width={24}
          height={24}
          quality={100}
          className="w-4 h-4 xl:w-6 xl:h-6 fill-black"
          alt="arrow left"
        />
      </button>
      <p className="text-middle xl:text-large">{label}</p>
      <button
        type="button"
        className="px-6 xl:px-9"
        onClick={() => swiper.slideNext()}
      >
        <Image
          src="/icons/arrow-right.svg"
          width={24}
          height={24}
          quality={100}
          className="w-4 h-4 xl:w-6 xl:h-6"
          alt="arrow right"
        />
      </button>
    </div>
  );
};

MoreReviews.propTypes = {
  label: PropTypes.string.isRequired,
};
