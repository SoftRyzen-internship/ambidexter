import PropTypes from 'prop-types';

import { Container } from '@/components';

export const Hero = ({ data }) => {
  return (
    <section>
      <Container>{<h1>{data.mainTitle}</h1>}</Container>
    </section>
  );
};

Hero.propTypes = {
  data: PropTypes.shape({ mainTitle: PropTypes.string.isRequired }).isRequired,
};
