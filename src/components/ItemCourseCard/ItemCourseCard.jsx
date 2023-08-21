'use client';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const ItemCourseCard = ({ data }) => {
  const { title, list } = data;

  const [isDecktop, setIsDecktop] = useState(false);

  const decktop = useMediaQuery({ minWidth: 1440 });
  useEffect(() => {
    setIsDecktop(decktop);
  }, [decktop]);

  const titleSplit = title => {
    const text = title.split('.');
    text.pop();
    if (isDecktop && text.length > 2) {
      const titleDecktop = [];
      const newArray = [];
      text.forEach((item, index) => {
        index > 1 ? titleDecktop.push(item) : newArray.push(item);
      });
      return [newArray.join('.'), ...titleDecktop];
    } else {
      return text;
    }
  };

  return (
    <div className="box-border  w-full md:w-[334px] sm:w-[440px] xl:w-[630px]  border-2 border-accent rounded-10">
      <div className="text-middle xl:text-[24px] py-3 md:py-4 bg-accent text-center font-medium ">
        <h3>
          {!title.includes('.') ? (
            <span>{title}</span>
          ) : (
            title.includes('.') &&
            titleSplit(title).map((item, i) => (
              <span key={i} className="block">
                {item}.
              </span>
            ))
          )}
        </h3>
      </div>
      <div className="p-3 md:px-6 xl:py-6 text-small xl:text-middle">
        <ul className=" ">
          {list.map(item => (
            <li
              key={item}
              className="
               flex relative gap-[10px] ml-[16px] md:ml-[6px] items-center font-medium
               before:absolute before:top-[7px] before:left-[-10px]  before:min-w-[4px]
               before:min-h-[4px] before:rounded-full before:bg-black
               xl:before:top-[10px]  xl:before:left-[-14px] xl:ml-[20px] 
               xl:before:min-w-[6px] xl:before:min-h-[6px] mb-1 last:mb-0 "
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ItemCourseCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
