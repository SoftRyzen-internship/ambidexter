import PropTypes from 'prop-types';

export const SectionTitle = ({ text }) => {
  return (
    <>
      <h2 className="mainText text-center mb-[4px] md:mb-[8px] xl:mb-[12px]">
        {text}
      </h2>
      <svg
        width="24"
        height="24"
        className="mx-auto w-[12px] h-[12px] md:w-[16px] md:h-[16px] xl:w-[24px] xl:h-[24px]"
        aria-label="Arrow down"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.7281 4.36407L12 13.0922L3.27188 4.36407L0 7.63595L12 19.6359L24 7.63595L20.7281 4.36407Z"
          fill="#222222"
        />
      </svg>
    </>
  );
};

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
