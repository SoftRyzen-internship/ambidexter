import Image from 'next/image';
import ForWhomImageBlack from 'public/images/for-who-bw.jpg';

export const ForWhomImageBw = () => {
  return (
    <Image
      src={ForWhomImageBlack}
      alt=""
      width={813}
      height={862}
      quality={100}
      className="forWhomImageBw"
    />
  );
};
