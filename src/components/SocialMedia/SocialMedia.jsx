import PropTypes from 'prop-types';

import InstagramIcon from 'public/icons/instagram.svg';
import YoutubeIcon from 'public/icons/youtube.svg';
import TikTokIcon from 'public/icons/tiktok.svg';

export const SocialMedia = ({ section }) => {
  const circleClassName = section === 'menu' || section === 'hero';

  return (
    <ul className="flex  gap-[8px] md:gap-[16px] xl:gap-[24px]">
      <li
        className={
          circleClassName
            ? 'circleSocialItems hover:bg-accent focus:bg-accent'
            : 'circleSocialItems hover:bg-white focus:bg-white'
        }
      >
        <a
          href="https://www.instagram.com/ambidexter.school/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="Instagram icon"
          className="w-full h-full flex justify-center items-center"
        >
          <InstagramIcon
            className={
              circleClassName
                ? 'socialMediaIcon fill-bgColor '
                : 'socialMediaIcon fill-accent '
            }
          />
        </a>
      </li>
      <li
        className={
          circleClassName
            ? 'circleSocialItems hover:bg-accent focus:bg-accent'
            : 'circleSocialItems hover:bg-white focus:bg-white'
        }
      >
        <a
          href="https://www.youtube.com/@Ambidexterschool"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="Youtube icon"
          className="w-full h-full flex justify-center items-center"
        >
          <YoutubeIcon
            className={
              circleClassName
                ? 'socialMediaIcon stroke-bgColor [&>*:first-child]:fill-bgColor'
                : 'socialMediaIcon stroke-accent [&>*:first-child]:fill-accent'
            }
          />
        </a>
      </li>
      <li
        className={
          circleClassName
            ? 'circleSocialItems hover:bg-accent focus:bg-accent'
            : 'circleSocialItems hover:bg-white focus:bg-white'
        }
      >
        <a
          href="http://tiktok.com/@ambidexterschool"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="TikTok icon"
          className="w-full h-full flex justify-center items-center"
        >
          <TikTokIcon
            className={
              circleClassName
                ? 'socialMediaIcon  stroke-bgColor'
                : 'socialMediaIcon stroke-accent '
            }
          />
        </a>
      </li>
    </ul>
  );
};

SocialMedia.propTypes = {
  section: PropTypes.string.isRequired,
};
