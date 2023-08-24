import Image from 'next/image';

import ForWhomImageColor from '../../../public/images/for-who-color.png';

export const ForWhomImage = () => {
  return (
    <Image
      src={ForWhomImageColor}
      alt=""
      width={272}
      height={293}
      quality={100}
      className="forWhomImage"
    />
  );
};
