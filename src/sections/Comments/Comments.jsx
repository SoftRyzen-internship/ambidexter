'use client';

import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';

import 'swiper/css';

import { CommentCard, Container, MoreReviews } from '@/components';

export const Comments = ({ data, id }) => {
  const { label, comments, btnLabel } = data;

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section id={id} className="reviewsSection">
      <Container>
        <h2 className="mb-6 md:mb-9 xl:mb-16 text-center text-middle md:text-large xl:text-large36">
          {label}
        </h2>

        <Swiper
          modules={[Keyboard]}
          loop={true}
          lazyPreloadPrevNext={1}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          spaceBetween={20}
          slidesPerView={isMobile ? 1 : 3}
        >
          {comments.map((element, index) => (
            <SwiperSlide
              key={index}
              className="max-w-[320px] md:max-w-[216px] xl:max-w-[414px]"
            >
              <CommentCard data={element} />
            </SwiperSlide>
          ))}
          <MoreReviews btnLabel={btnLabel} />
        </Swiper>
      </Container>
    </section>
  );
};

Comments.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        photo: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    btnLabel: PropTypes.shape({
      ariaLeft: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      ariaRight: PropTypes.string.isRequired,
    }).isRequired,
  }),
  id: PropTypes.string.isRequired,
};
