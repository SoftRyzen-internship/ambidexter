import PropTypes from 'prop-types';

export const SectionTitle = ({ className, text }) => {
  return (
    <h2
      className={`text-center mb-[16px] md:mb-[36px] ${className}
      after:content-[var(--arrow-image)] after:mx-auto
      after:w-[12px] after:md:w-[16px] after:xl:w-[24px] 
      after:h-[12px] after:md:h-[16px] after:xl:h-[24px] 
      flex flex-col gap-[4px] md:gap-[8px] xl:gap-[12px]`}
    >
      {text}
    </h2>
  );
};

SectionTitle.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};
