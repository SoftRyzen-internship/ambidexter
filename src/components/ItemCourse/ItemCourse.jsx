import PropTypes from 'prop-types';

export const ItemCourse = ({ data }) => {
  const { title, list } = data;

  const titleSplit = title => {
    if (title) {
      return title.split('.');
    }
    return '';
  };
  const thisTitle = titleSplit(title);

  return (
    <div className="box-border  w-full md:w-[334px] xl:w-[630px]  border-2 border-border_item rounded-[10px]">
      <div className="text-middle xl:text-[24px] py-3 md:py-4 bg-accent text-center font-medium ">
        <ul>
          {thisTitle.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="p-3 md:px-6 xl:py-6 text-small xl:text-middle">
        <ul className=" ">
          {list.map(item => (
            <li
              key={item}
              className="flex relative gap-[10px] ml-[16px] items-center before:absolute  before:top-[7px] xl:before:top-[10px] before:left-[-10px] xl:before:left-[-14px] xl:ml-[18px]  text-list font-medium before:min-w-[4px] before:min-h-[4px] xl:before:min-w-[6px] xl:before:min-h-[6px]  before:rounded-full before:bg-black"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ItemCourse.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    list: PropTypes.string.isRequired,
  }),
};
