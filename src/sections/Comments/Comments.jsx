'use client';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';

import 'swiper/css';

import { CommentCard, Container, MoreReviews } from '@/components';

export const Comments = ({ data, id }) => {
  const { label, comments, btnLabel } = data;

  const mobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section id={id} className="bg-commentsBg bg-no-repeat bg-center bg-cover">
      <Container>
        <h2 className="mb-6 md:mb-9 xl:mb-16 text-center">{label}</h2>

        <Swiper
          modules={[Keyboard]}
          loop={true}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          spaceBetween={20}
          slidesPerView={mobile ? 1 : 3}
        >
          {comments.map((element, index) => (
            <SwiperSlide key={index}>
              <CommentCard data={element} />
            </SwiperSlide>
          ))}
          <MoreReviews label={btnLabel} />
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
      }).isRequired,
    ).isRequired,
    btnLabel: PropTypes.string.isRequired,
  }),
  id: PropTypes.string.isRequired,
};
