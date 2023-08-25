'use client';

import PropTypes from 'prop-types';
import { useSwiper } from 'swiper/react';

import ArrowLeft from 'public/icons/arrow-left.svg';
import ArrowRight from 'public/icons/arrow-right.svg';

export const MoreReviews = ({ label }) => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-center items-center mt-6 md:mt-9">
      <button
        type="button"
        className="px-6 xl:px-9 btnMoreReviews"
        onClick={() => swiper.slidePrev()}
      >
        <ArrowLeft className="w-4 h-4 xl:w-6 xl:h-6 fill-black arrowMoreReviews" />
      </button>
      <p className="text-middle xl:text-large">{label}</p>
      <button
        type="button"
        className="px-6 xl:px-9 btnMoreReviews"
        onClick={() => swiper.slideNext()}
      >
        <ArrowRight className="w-4 h-4 xl:w-6 xl:h-6 fill-black arrowMoreReviews" />
      </button>
    </div>
  );
};

MoreReviews.propTypes = {
  label: PropTypes.string.isRequired,
};
