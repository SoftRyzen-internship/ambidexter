import PropTypes from 'prop-types';
import Image from 'next/image';

import { Container } from '@/components';
import heroImg from 'public/images/hero.png';

export const Hero = ({ data }) => {
  const {
    speciality: [leftList, rightList],
    title,
  } = data;

  return (
    <section className="bg-heroBg bg-no-repeat bg-top bg-cover pt-20 md:pt-[75px] xl:pt-[93px] min-h-[420px] md:min-h-[609px] xl:min-h-[1044px] z-[-3]">
      <Container>
        <div className="relative flex justify-center md:text-base xl:text-large font-medium w-full h-full">
          <div className="flex flex-col md:gap-28 xl:gap-64 min-w-max absolute top-0 left-0 md:top-[53px] xl:top-[106px] z-10">
            <ul className="flex flex-col gap-2 md:gap-3 xl:gap-6">
              {leftList.map((element, index) => (
                <li key={index}>
                  <p>{element}</p>
                </li>
              ))}
            </ul>
            <div className="hidden md:block w-[128px] h-[32px] bg-black"></div>
          </div>
          <div className="text-end flex flex-col items-end gap-12 md:gap-[68px] xl:gap-[120px] absolute top-[61px] right-0 md:top-[42px] xl:top-[62px] z-20">
            <h1 className="text-[32px]/[1] md:text-large64/[1] xl:text-large134/[1] max-w-min">
              {title}
            </h1>
            <ul className="flex flex-col gap-2 md:gap-3 xl:gap-6">
              {rightList.map((element, index) => (
                <li key={index}>
                  {element.map(el => (
                    <p key={el}>{el}</p>
                  ))}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={heroImg}
            alt="Галушка Кирило"
            priority={true}
            width={737}
            height={951}
            className="absolute top-9 md:top-0 md:left-1/2 md:translate-x-[-35%] xl:translate-x-[-45%] z-0 max-w-[235px] md:max-w-[414px] xl:max-w-[737px]"
          />
        </div>
      </Container>
    </section>
  );
};

Hero.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    speciality: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  }).isRequired,
};
