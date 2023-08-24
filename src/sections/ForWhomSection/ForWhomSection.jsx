import {
  Container,
  ForWhomImage,
  RelevantFor,
  SectionTitle,
} from '@/components';
import CrossIcon from '/public/icons/tick-cross.svg';
import CircleIcon from '/public/icons/tick-circle.svg';
import { ForWhomImageBw } from '@/components/ForWhomImageBw/ForWhomImageBw';

export const ForWhomSection = ({ data }) => {
  const { title, positions, goals } = data;

  return (
    <section id="forWhom">
      <Container className="relative">
        <SectionTitle text={title} />
        <div className="forWhoImageContainer">
          <ForWhomImage />
          <ForWhomImageBw />
        </div>
        <div className="flex flex-col gap-[24px] md:flex-row md:gap-[0px] md:justify-between md:z-20 relative xl:pb-[92px] pointer-events-none">
          <RelevantFor data={positions} mobileGap={'8px'} Icon={CrossIcon} />
          <RelevantFor data={goals} mobileGap={'16px'} Icon={CircleIcon} />
        </div>
      </Container>
    </section>
  );
};
