import PropTypes from 'prop-types';
import { Container, SectionTitle, Features } from '@/components';

export const AboutSchool = ({ aboutSchool }) => {
  return (
    <section
      id="about_school"
      className="bg-school_section  bg-no-repeat bg-center  bg-cover "
    >
      <Container>
        <div className=" text-center flex flex-col gap-[8px] md:gap-3 mb-6 md:mb-[72px]">
          <SectionTitle text={aboutSchool.title} />
          <h2 className="font-normal leading-normal text-[42px] md:text-[62px] xl:text-[124px] ">
            AMBI<span className="text-accent font-bold">DEXTER</span>
          </h2>
          <p className="leading-normal text-[16px] lowercase md:text-[24px] xl:text-[36px]">
            {aboutSchool.subTitle}
          </p>
        </div>
        <Features data={aboutSchool.features} />
      </Container>
    </section>
  );
};

AboutSchool.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  features: PropTypes.arrayOf([PropTypes.string]),
};
