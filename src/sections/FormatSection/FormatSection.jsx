import PropTypes from 'prop-types';

import { Container, SectionTitle, ApplyButton } from '@/components';

export const FormatSection = ({ data: { format, applyButtonLabel } }) => {
  const { title, subTitle, boldSubTitle, cards, advantageList } = format;
  console.log(cards, advantageList);

  return (
    <section>
      <Container>
        <SectionTitle text={title} />
        <h3>{subTitle}</h3>
        <p>{boldSubTitle}</p>
        <ApplyButton data={applyButtonLabel} isFree={false} />
      </Container>
    </section>
  );
};

FormatSection.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  boldSubTitle: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      listLabel: PropTypes.string.isRequired,
      list: PropTypes.arrayOf(PropTypes.string.isRequired),
      marketing: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  advantageList: PropTypes.arrayOf(PropTypes.string.isRequired),
  applyButtonLabel: PropTypes.string.isRequired,
};
