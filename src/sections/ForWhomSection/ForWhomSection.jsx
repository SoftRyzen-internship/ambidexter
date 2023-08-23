import {
  Container,
  ForWhomImage,
  RelevantFor,
  SectionTitle,
} from '@/components';
import CrossIcon from '/public/icons/tick-cross.svg';
import CircleIcon from '/public/icons/tick-circle.svg';

export const ForWhomSection = ({ data }) => {
  const { title, positions, goals } = data;

  return (
    <section id="forWhom">
      <Container>
        <SectionTitle text={title} />
        <ForWhomImage />
        <div className="flex flex-col gap-[24px]">
          <RelevantFor data={positions} mobileGap="8px" Icon={CrossIcon} />
          <RelevantFor data={goals} mobileGap="16px" Icon={CircleIcon} />
        </div>
      </Container>
    </section>
  );
};
