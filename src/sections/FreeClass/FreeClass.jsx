import Image from 'next/image';
import PropTypes from 'prop-types';

import { ApplyButton, Container } from '@/components';
import image from 'public/images/free.png';

export const FreeClass = ({
  data: { label, title, text },
  altText,
  btnLabel,
  isCoursePage = false,
}) => {
  const sectionClasses = `overflow-hidden bg-free-class bg-cover bg-center py-10 md:py-20 ${
    !isCoursePage && 'xl:py-40'
  }`;

  return (
    <section className={sectionClasses}>
      <Container>
        <div className="md:flex md:gap-5 md:items-center">
          <div className="md:w-[calc(50%-10px)] md:h-[473px] xl:h-[834px] md:relative">
            <Image
              className="w-[calc(min(100vw,480px)*0.706)] mx-auto md:absolute md:w-[409px] md:right-0 xl:w-[721px] max-w-none"
              src={image}
              alt={altText}
            />
          </div>
          <div className="md:w-[calc(50%-10px)] xl:h-[410px]">
            <p className="text-middle/[1.187] md:text-large/[1.208] xl:text-large36/[1.222] max-md:text-center font-medium md:mb-2">
              {label}
            </p>
            <h3 className="text-large/[1.208] md:text-large46/[1.217] xl:text-large92/[1.207] font-bold max-md:text-center text-accent mb-2 md:mb-1">
              {title}
            </h3>
            <p className="text-small/[1.25] md:text-middle/[1.208] xl:text-large/[1.208] font-medium max-md:text-justify mb-4 xl:mb-6">
              {text}
            </p>
            <ApplyButton data={btnLabel} isFree />
          </div>
        </div>
      </Container>
    </section>
  );
};

FreeClass.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  altText: PropTypes.string.isRequired,
  btnLabel: PropTypes.string.isRequired,
  isCoursePage: PropTypes.bool,
};
