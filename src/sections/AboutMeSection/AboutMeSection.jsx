import PropTypes from 'prop-types';
import { AdvantageCard, SectionTitle } from '@/components';

export function AboutMeSection({
  data: { title, cards, subTitle, boldSubTitle, goals },
}) {
  return (
    <section className="container">
      <SectionTitle text={title} />
      <div className="md:flex md:gap-5 md:items-center mb-3 md:mb-5">
        <div className="border-accent border rounded-[10px] w-full md:w-[calc(50%-10px)] h-[191px] md:h-[227px] xl:h-[428px]"></div>
        <div className="p-4 w-full md:w-[calc(50%-10px)]">
          <p className="text-black text-[16px] xl:text-2xl font-bold flex items-center gap-2 mb-2">
            <span className="text-[64px]/[1] md:text-[70px] xl:text-[140px] font-medium">
              {boldSubTitle}
            </span>
            {subTitle}
          </p>
          <ul>
            {goals.map((e, i, { length }) => (
              <li
                key={i}
                className={`text-black text-xs xl:text-2xl font-medium flex gap-3 xl:gap-2 pl-6 md:pl-[34px] xl:pl-[30px] items-baseline relative ${
                  i + 1 !== length && 'mb-2 md:max-xl:mb-1.5'
                } before:w-2 md:before:w-3 before:h-2 md:before:h-3 before:left-0 before:top-1 md:before:top-0.5 xl:before:top-2.5
                before:rotate-45 before:bg-accent before:absolute`}
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {
        <ul className="grid md:grid-rows-3 md:grid-cols-2 md:grid-flow-col-dense gap-3 md:gap-5">
          {cards?.map(({ count, text, list }, i) => (
            <AdvantageCard key={i} count={count} text={text} list={list} />
          ))}
        </ul>
      }
    </section>
  );
}

AboutMeSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    boldSubTitle: PropTypes.string.isRequired,
    goals: PropTypes.arrayOf(PropTypes.string).isRequired,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        count: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        list: PropTypes.arrayOf(PropTypes.string),
      }),
    ).isRequired,
    videoLink: PropTypes.string.isRequired,
  }).isRequired,
};
