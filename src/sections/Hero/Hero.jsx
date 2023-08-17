import PropTypes from 'prop-types';

import { Container, SectionTitle } from '@/components';

export const Hero = ({ data }) => {
  return (
    <section>
      <Container>{<h1>{data.mainTitle}</h1>}</Container>
      <SectionTitle text="Title" />
    </section>
  );
};

Hero.propTypes = {
  data: PropTypes.shape({ mainTitle: PropTypes.string.isRequired }).isRequired,
};
