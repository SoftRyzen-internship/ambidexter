import PropTypes from 'prop-types';
import { ApplyButton } from '..';

export const FormatCard = ({ data, btnText }) => {
  const { title, listLabel, list, marketing } = data;

  return (
    <li className="w-full md:w-[334px] xl:w-[368px] md:h-[457px] xl:h-[370px] flex flex-col justify-between px-3 py-4 border-2 border-accent rounded-10">
      <h3 className="text-center text-middle md:text-large mb-4 md:mb-6">
        {title}
      </h3>
      <p className="md:text-middle mb-2">{listLabel}</p>
      <ul className="flex-grow pb-4">
        {list.map((item, index) => (
          <li
            className="flex items-center gap-1 md:gap-2 font-normal md:text-middle leading-none xl:leading-normal mb-2 md:mb-3 xl:mb-0 before:content-[var(--tick-image)] before:w-3 md:before:w-4 before:h-3 md:before:h-4"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="text-center font-normal md:text-base mb-3 ">{marketing}</p>
      <ApplyButton data={btnText} isFree={false} />
    </li>
  );
};

FormatCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    listLabel: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string.isRequired),
    marketing: PropTypes.string.isRequired,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
