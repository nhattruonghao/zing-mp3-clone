import React, { useEffect } from "react";
import {
  HeartIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

function ControlLeft({audioIndex, playList, isPlay}) {
  useEffect(() => {

  }, [audioIndex, playList])
  const tracks = playList.tracks;
  const songIndex = tracks && tracks[audioIndex];
  const songInfo = songIndex;

  const animationForDisc = isPlay ? 'animate-spinSlow' : '';
  const styleForDisc = `h-16 w-16 rounded-full border-2 border-main-text-stroke ${animationForDisc}`

  const animationForTitle = isPlay ? 'animate-titleWhenPlay' : '';
  const styleForTitle = `whitespace-nowrap w-max pr-1 h-full ${animationForTitle}`
  return (
    <div className="flex items-center flex-shrink-0">
      <div>
        <img
          className={styleForDisc}
          src={songInfo && songInfo.images.coverart}
          alt=""
        />
      </div>
      <div className="hidden md:block w-32 ml-3 overflow-hidden">
        <div className="relative">
          <div className={styleForTitle}>
            <span className="title-player-control mr-20">
              {songInfo && songInfo.title}
            </span>
            <span className="title-player-control">
            {songInfo && songInfo.title}
            </span>
          </div>
          <div className="-mt-1.5">
            <span className="text-text-secondary text-xs leading-none">
            {songInfo && songInfo.subtitle}
            </span>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex space-x-5 ml-1 relative">
        <div className="absolute w-0.5 h-3 rounded-sm bg-text-secondary left-px -top-1"></div>
        <HeartIcon className="iconPlayerSecondary" />
        <DotsHorizontalIcon className="iconPlayerSecondary" />
      </div>
    </div>
  );
}

export default ControlLeft;
