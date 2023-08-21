import PropTypes from 'prop-types';

export const ItemCourseCard = ({ data }) => {
  const { title, list } = data;

  const titleSplit = title => {
    const text = title.split('.');
    text.pop();
    return text;
  };
  const thisTitle = titleSplit(title);

  return (
    <div className="box-border  w-full md:w-[334px] xl:w-[630px]  border-2 border-acent rounded-10">
      <div className="text-middle xl:text-[24px] py-3 md:py-4 bg-accent text-center font-medium ">
        <ul>
          {thisTitle.map((item, i) => (
            <li key={i}>{item}. </li>
          ))}
        </ul>
      </div>
      <div className="p-3 md:px-6 xl:py-6 text-small xl:text-middle">
        <ul className=" ">
          {list.map(item => (
            <li
              key={item}
              className="
               flex relative gap-[10px] ml-[16px] items-center font-medium
               before:absolute before:top-[7px] before:left-[-10px]  before:min-w-[4px]
               before:min-h-[4px] before:rounded-full before:bg-black
               xl:before:top-[10px]  xl:before:left-[-14px] xl:ml-[18px] 
               xl:before:min-w-[6px] xl:before:min-h-[6px] "
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
    list: PropTypes.string.isRequired,
  }),
};
