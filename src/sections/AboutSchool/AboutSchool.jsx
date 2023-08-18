import PropTypes from 'prop-types';
import { Container, SectionTitle } from '@/components';
import { aboutSchool } from '../../../dictionaries/en.json';

export const AboutSchool = ({ data }) => {
  //console.log(aboutSchool);

  const getNumber = number => {
    if (String(number).length < 2) {
      return `0${number}`;
    }
    return number;
  };
  return (
    <section id="about_school">
      <Container>
        <div className=" text-center flex flex-col gap-[8px] md:gap-3">
          <SectionTitle text={data.aboutSchool.title} />
          <h2 className="font-normal leading-normal text-[42px] md:text-[62px] xl:text-[124px]">
            AMBI<span className="text-accent font-bold">DEXTER</span>
          </h2>
          <p className="leading-normal text-[16px] lowercase md:text-[24px] xl:text-[36px]">
            {data.aboutSchool.subTitle}
          </p>
          <ul className="w-full  text-[8px] font-medium md:text-[16px] xl:text-[24px] flex flex-wrap justify-around gap-x-5 gap-y-1 md:gap-y-6 xl:gap-y-12">
            {aboutSchool.features.map((item, index) => (
              <li
                className="w-[80px] md:w-[216px] xl:w-[305px] text-start flex flex-col"
                key={item}
              >
                <div className="text-[36px] md:text-[48px] font-bold xl:text-[72px] text-start opacity-20">
                  {getNumber(index + 1)}
                </div>
                <div>{item}</div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

AboutSchool.propTypes = {
  data: PropTypes.any,
};
// h-[388px] md:h-[576px] xl:h-[653px]
//h-[526px]
