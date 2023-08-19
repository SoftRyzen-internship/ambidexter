import PropTypes from 'prop-types';
import { Container, CoursesCard, SectionTitle } from '@/components';

import { routes } from 'routes';

import actorImg from 'public/images/actor.png';
import oratorImg from 'public/images/orator.png';

export const Courses = ({ data }) => {
  const { cards, title, subTitle, bntShowMore } = data.courses;

  const arr = [
    { img: actorImg, link: routes.ACTING_SKILL },
    { img: oratorImg, link: routes.ORATORICAL_SKILL },
  ].map((el, i) => ({ ...el, text: cards[i].label, bntShowMore }));

  return (
    <section
      id="courses"
      className={`bg-coursesBg bg-no-repeat bg-center bg-cover text-center`}
    >
      <Container>
        <SectionTitle text={title} />
        <h2 className="text-middle md:text-large xl:text-large36 font-medium mt-4 mb-6 md:mt-9 md:mb-9 xl:mt-16">
          {subTitle}
        </h2>
        <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-5">
          {arr.map((el, i) => (
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
    courses: PropTypes.shape({ title: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};
