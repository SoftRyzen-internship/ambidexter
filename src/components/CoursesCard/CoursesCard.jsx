import PropTypes from 'prop-types';
import { BtnShowMore } from '@/components';
import Image from 'next/image';

export const CoursesCard = ({ data }) => {
  return (
    <div className="bg-accent py-4 px-12 flex flex-col gap-3 items-center  rounded-[10px] md:gap-6 w-full">
      <Image
        src={data.img}
        width={200}
        height={200}
        alt="Picture of the author"
      />
      <h2 className="text-middle md:text-large xl:text-[44px] font-medium max-w-min">
        {data.text}
      </h2>
      <BtnShowMore title={data.bntShowMore} link={data.link} />
    </div>
  );
};

CoursesCard.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.shape.isRequired,
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bntShowMore: PropTypes.string.isRequired,
  }).isRequired,
};
