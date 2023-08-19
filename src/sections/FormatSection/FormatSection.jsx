import PropTypes from 'prop-types';

import { Container, SectionTitle, FormatCard } from '@/components';

export const FormatSection = ({ data }) => {
  const { title, subTitle, boldSubTitle, cards, advantageList } = data.format;
  console.log(advantageList);

  return (
    <section>
      <Container>
        <SectionTitle text={title} />
        <h3>{subTitle}</h3>
        <p>{boldSubTitle}</p>

        <ul>
          {cards.map((card, index) => (
            <FormatCard
              key={index}
              data={card}
              btnText={data.applyButtonLabel}
            />
          ))}
        </ul>
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
};
