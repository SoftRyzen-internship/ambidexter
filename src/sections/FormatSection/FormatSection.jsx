import PropTypes from 'prop-types';

import { Container, SectionTitle, FormatCard } from '@/components';

export const FormatSection = ({ data }) => {
  const { title, subTitle, boldSubTitle, cards, advantageList } = data.format;

  return (
    <section className="bg-format bg-no-repeat bg-center bg-cover" id="format">
      <Container>
        <SectionTitle text={title} />
        <h3 className="text-middle md:text-large xl:text-large36 text-center mb-4 md:mb-0">
          {subTitle}
        </h3>
        <p className="text-large42 md:text-large62 xl:text-large124 text-center text-accent mb-6 md:mb-[118px]">
          {boldSubTitle}
        </p>

        <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5 xl:gap-[88px] mb-8 md:mb-9 xl:mb-16">
          {cards.map((card, index) => (
            <FormatCard
              key={index}
              data={card}
              btnText={data.applyButtonLabel}
            />
          ))}
        </ul>

        <ul className="w-full md:w-[452px] xl:w-[630px] text-justify mx-auto pl-5">
          {advantageList.map((advantage, index) => (
            <li className="list-disc md:text-middle mb-2 last:mb-0" key={index}>
              {advantage}
            </li>
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
