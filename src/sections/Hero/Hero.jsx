import PropTypes from 'prop-types';

import { Container, SectionTitle } from '@/components';

export const Hero = ({ data }) => {
  return (
    <section>
      <Container>{<h1>{data.hero.title}</h1>}</Container>
      <SectionTitle text="Title" />
    </section>
  );
};

Hero.propTypes = {
  data: PropTypes.shape({
    hero: PropTypes.shape({ title: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};
