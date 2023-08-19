'use client';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const VideoPlayer = ({ link }) => {
  const [isLoadVideo, setIsLoadVideo] = useState(false);
  const embedId = link.split('?')[1]?.split('=')[1];
  return (
    embedId && (
      <div
        id="embedPlayerWrapper"
        className={`${
          isLoadVideo && 'videoActive'
        } border-accent border rounded-[10px] relative w-full md:w-[calc(50%-10px)] h-[calc(((min(100vw,480px)-40px)/280)*191)] md:h-[227px] xl:h-[428px] overflow-hidden`}
      >
        {isLoadVideo && (
          <iframe
            id="embedPlayer"
            className="videoPlayer"
            // width="853"
            // height="480"
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1&showinfo=0&rel=0&cc_load_policy=0&iv_load_policy=3`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        )}
        <div
          className="videoPoster"
          onClick={e => {
            console.log(e.target);
            setIsLoadVideo(true);
            setTimeout(() => {
              e.target.classList.add('hidden');
            }, 500);
          }}
        />
      </div>
    )
  );
};

VideoPlayer.propTypes = {
  link: PropTypes.string.isRequired,
};
