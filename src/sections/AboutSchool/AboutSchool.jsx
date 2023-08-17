import PropTypes from 'prop-types';
import { Container, SectionTitle } from '@/components';

export const AboutSchool = ({ data }) => {
  return (
    <section id="about_school">
      <Container>
        <div className="h-[526px] text-center flex flex-col gap-[8px]">
          <SectionTitle text={data.aboutSchool.title} />
          <h2 className="font-normal leading-normal text-[42px] ">
            AMBI<span className="text-accent font-bold">DEXTER</span>
          </h2>
          <p className="leading-normal text-[16px] lowercase">
            {data.aboutSchool.subTitle}
          </p>
        </div>
      </Container>
    </section>
  );
};

AboutSchool.propTypes = {
  data: PropTypes.any,
};
