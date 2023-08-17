import PropTypes from 'prop-types';

export const ItemCourse = ({ title, list }) => {
  return (
    <div className="w-wull md:w-[334px] xl:w-[630px]  border-2 border-border_item rounded-xl">
      <div className="text-middle py-3 md:py-4 bg-accent text-center font-medium ">
        {title}
      </div>
      <div className="p-3 md:px-6 xl:py-6">
        <ul>
          {list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ItemCourse.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string),
};
