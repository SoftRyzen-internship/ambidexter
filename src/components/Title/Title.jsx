import PropTypes from 'prop-types';
import Image from 'next/image';

import icon from '../../../public/icons/down.svg';

export const Title = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center h-[31px] md:h-[43px] xl:h-[61px]">
      <h3 className="mainText">{text}</h3>
      <Image
        className="w-[12px] h-[12px] md:w-[16px] md:h-[16px] xl:w-[24px] xl:h-[24px]"
        src={icon}
        alt="Down arrow"
        width={12}
        height={12}
      />
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
