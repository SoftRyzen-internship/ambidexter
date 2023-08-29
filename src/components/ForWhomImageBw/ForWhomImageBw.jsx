import Image from 'next/image';

import ForWhomImageBlack from 'public/images/for-who-bw.jpg';

export const ForWhomImageBw = () => {
  return (
    <Image
      src={ForWhomImageBlack}
      alt="Кирило здивований"
      width={813}
      height={862}
      quality={100}
      className="forWhomImageBw"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcaAwAAXsA1kevnFAAAAAASUVORK5CYII="
    />
  );
};
