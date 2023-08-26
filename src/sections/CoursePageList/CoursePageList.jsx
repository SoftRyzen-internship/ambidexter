import PropTypes from 'prop-types';

import { Container, ItemCourseCard } from '@/components';

export const CoursePageList = ({ data, label, isActor = false }) => {
  const { title, cards } = data;

  return (
    <section>
      <Container>
        <p className="mb-2 md:mb-3 xl:mb-4 text-center">{label}</p>
        <h1 className="text-middle/[1.2] md:text-large36/[1.22] xl:text-large56/[1.2] text-center font-bold mb-6 md:mb-9 xl:mb-16">
          {title}
        </h1>
        <ul className="coursePageList">
          {cards.map((card, index) => (
            <li
              className={
                isActor
                  ? 'coursePageListItem'
                  : 'coursePageListItem courseOrator'
              }
              key={index}
            >
              <ItemCourseCard data={card} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

CoursePageList.propTypes = {
  data: PropTypes.shape({
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        list: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
    ),
    title: PropTypes.string.isRequired,
  }),
  label: PropTypes.string.isRequired,
  isActor: PropTypes.bool,
};
