import PropTypes from 'prop-types';

import { routes } from 'routes';
import { Container, CoursesCard, SectionTitle } from '@/components';

export const Courses = ({ data }) => {
  const { cards, title, subTitle, bntShowMore } = data;

  const newData = [
    { linkForBtn: routes.ACTING_SKILL },
    { linkForBtn: routes.ORATORICAL_SKILL },
  ].map((el, i) => ({ ...el, ...cards[i], bntShowMore }));

  return (
    <section
      id="courses"
      className="bg-coursesBg bg-no-repeat bg-center bg-cover text-center"
    >
      <Container>
        <SectionTitle text={title} />
        <h2 className="text-middle md:text-large xl:text-large36 font-medium mb-6 md:mb-9">
          {subTitle}
        </h2>
        <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-5">
          {newData.map((el, i) => (
            <li className="w-full" key={i}>
              <CoursesCard data={el}></CoursesCard>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

Courses.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf.isRequired,
    bntShowMore: PropTypes.string.isRequired,
  }).isRequired,
};
