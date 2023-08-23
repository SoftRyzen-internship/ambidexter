import Image from 'next/image';
import ForWhomImageColor from '../../../public/images/who-color.png';

export const ForWhomImage = () => {
  return (
    <Image
      src={ForWhomImageColor}
      alt=""
      width={272}
      height={293}
      quality={100}
      className="mx-auto md:absolute md:w-[422px] md:h-[454px] md:bottom-[30px] md:left-[196px] md:z-0 xl:w-[813px] xl:h-[862px] xl:bottom-0 xl:left-[347px]"
    />
  );
};
