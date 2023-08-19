'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';

export const VideoPlayer = ({ link }) => {
  const [isShowVideo, setIsShowVideo] = useState(false);
  const embedId = link.split('?')[1]?.split('=')[1];

  return (
    embedId && (
      <div
        className={`${
          isShowVideo && 'videoActive'
        } border-accent border rounded-10 relative w-full md:w-[calc(50%-10px)] h-[calc(((min(100vw,480px)-40px)/280)*191)] md:h-[227px] xl:h-[428px] overflow-hidden`}
      >
        {isShowVideo && (
          <iframe
            className="videoPlayer"
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1&showinfo=0&rel=0&cc_load_policy=0&iv_load_policy=3`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Youtube Promo"
          />
        )}
        <div
          className="videoPoster"
          onClick={e => {
            onStart(e, setIsShowVideo);
          }}
        />
      </div>
    )
  );
};

function onStart(event, clb) {
  clb(true);
  setTimeout(() => {
    event.target.classList.add('hidden');
  }, 500);
}

VideoPlayer.propTypes = {
  link: PropTypes.string.isRequired,
};
