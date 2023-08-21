import PropTypes from 'prop-types';
import Image from 'next/image';

import { Container } from '@/components';
import heroImg from 'public/images/hero.png';

export const Hero = ({ data }) => {
  const { speciality, title } = data;

  return (
    <section className="bg-heroBg bg-no-repeat bg-center bg-cover">
      <Container>
        <div className="relative flex justify-center md:text-base xl:text-large font-medium">
          <div className="flex flex-col md:gap-28 xl:gap-64">
            <ul className="flex flex-col gap-2 md:gap-3 xl:gap-6">
              {speciality[0].map((element, index) => (
                <li key={index}>
                  <p>{element}</p>
                </li>
              ))}
            </ul>
            <div className="hidden md:block w-[128px] h-[32px] bg-black"></div>
          </div>
          <div className="text-end flex flex-col gap-12 md:gap-[68px] xl:gap-[120px]">
            <h1 className="text-[32px] md:text-large64 xl:text-large134/[1] ">
              {title}
            </h1>
            <ul className="flex flex-col gap-2 md:gap-3 xl:gap-6">
              {speciality[1].map((element, index) => (
                <li key={index}>
                  <p>{element}</p>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={heroImg}
            alt="Галушка Кирило"
            priority={true}
            width={709}
            height={933}
            className="absolute z-[-1] max-w-[227px] md:max-w-[398px] xl:max-w-[709px]"
          />
        </div>
      </Container>
    </section>
  );
};

Hero.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    speciality: PropTypes.arrayOf.isRequired,
  }).isRequired,
};
