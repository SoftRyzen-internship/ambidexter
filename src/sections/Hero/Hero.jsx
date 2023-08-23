import PropTypes from 'prop-types';

import { Container } from '@/components';

export const Hero = ({ data }) => {
  return (
    <section className="pt-[79px]">
      <Container>{<h1>{data.hero.title}</h1>}</Container>
    </section>
  );
};

Hero.propTypes = {
  data: PropTypes.shape({
    hero: PropTypes.shape({ title: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};
