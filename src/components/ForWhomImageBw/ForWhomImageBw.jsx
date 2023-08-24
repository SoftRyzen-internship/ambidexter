import Image from 'next/image';
import ForWhomImageBlack from '../../../public/images/for-who-bw.png';

export const ForWhomImageBw = () => {
  return (
    <Image
      src={ForWhomImageBlack}
      alt=""
      width={272}
      height={293}
      quality={100}
      className="forWhomImageBw "
    />
  );
};
