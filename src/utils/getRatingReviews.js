import Image from 'next/image';

export const ratingReviews = string => {
  const src = '/icons/star.svg';
  let result = '';

  switch (string) {
    case '5':
      result = Array(5).fill(src);
      break;
    case '4':
      result = Array(4).fill(src);
      break;
    case '3':
      result = Array(3).fill(src);
      break;
    case '2':
      result = Array(2).fill(src);
      break;
    case '1':
      result = Array(1).fill(src);
      break;

    default:
      result = Array(5).fill(src);
  }

  return result.map((el, i) => (
    <Image
      key={i}
      src={el}
      width={24}
      height={24}
      quality={100}
      className="w-4 h-4 xl:w-6 xl:h-6"
      alt="star"
    />
  ));
};
