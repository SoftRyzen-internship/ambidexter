import Image from 'next/image';

import ForWhomImageColor from 'public/images/for-who-color.jpg';

export const ForWhomImage = () => {
  return (
    <Image
      src={ForWhomImageColor}
      alt="Кирило задоволений"
      width={813}
      height={862}
      quality={100}
      className="forWhomImage"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcaAwAAXsA1kevnFAAAAAASUVORK5CYII="
    />
  );
};
