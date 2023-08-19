import PropTypes from 'prop-types';

export const BtnShowMore = ({ title, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center justify-center bg-bgColor text-black hover:bg-white p-4 rounded-[10px] text-middle min-w-full xl:text-large duration-300 xl:px-20 xl:min-w-max"
    >
      {title}
    </a>
  );
};

BtnShowMore.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
