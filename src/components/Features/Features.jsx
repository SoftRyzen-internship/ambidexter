'use client';

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const Features = ({ data }) => {
  const [activeNumber, setActiveNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeNumber === Number(data.length) - 1) {
        setActiveNumber(0);
      } else {
        setActiveNumber(activeNumber + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  });

  const getNumber = number => {
    if (String(number).length < 2) {
      return `0${number}`;
    }
    return number;
  };

  return (
    <ul className="w-full  text-[8px] font-medium md:text-[16px] xl:text-[24px] flex flex-wrap  gap-x-5 gap-y-1 md:gap-y-6 xl:gap-y-12">
      {data.map((item, index) => (
        <li
          className="w-[calc((100%-40px)/3)] xl:w-[calc((100%-60px)/4)]  text-start flex flex-col"
          key={item}
        >
          <div
            className={`${
              activeNumber === index
                ? 'text-accent opacity-100'
                : 'text-[rgba(34,34,34,0.2)]'
            } flex items-center h-[44px] md:h-[58px] xl:h-[87px] text-[36px] md:text-[48px] font-bold xl:text-[72px] text-start   duration-300`}
          >
            {getNumber(index + 1)}
          </div>
          <div>{item}</div>
        </li>
      ))}
    </ul>
  );
};

Features.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};
