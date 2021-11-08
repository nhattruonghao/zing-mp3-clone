import React, { useEffect, useState } from "react";
import {
  PlayIcon,
  RewindIcon,
  RefreshIcon,
  FastForwardIcon,
  SwitchHorizontalIcon,
  PauseIcon,
} from "@heroicons/react/outline";
import TimeSlider from "react-input-slider";

function ControlMain({
  audioIndex,
  playList,
  isPlay,
  audioRef,
  currentTime,
  duration,
  handleLoadedData,
  handlePausePlayClick,
  prevSong,
  nextSong,
  handleTimeSliderChange,
  timeCurrent,
}) {
  useEffect(() => {}, [audioIndex, playList, isPlay]);
  const tracks = playList.tracks;
  const songIndex = tracks && tracks[audioIndex];
  const songInfo = songIndex;

  return (
    <div className="flex-1 px-20 items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center space-x-5 min-w-250px">
          <RefreshIcon className="IconPlayer" />
          <RewindIcon onClick={prevSong} className="IconPlayer" />
          {isPlay ? (
            <PauseIcon
              onClick={handlePausePlayClick}
              className="IconPlayer w-11 h-11"
            />
          ) : (
            <PlayIcon
              onClick={handlePausePlayClick}
              className="IconPlayer w-11 h-11"
            />
          )}

          <FastForwardIcon
            onClick={nextSong}
            className="IconPlayer"
          />
          <SwitchHorizontalIcon className="IconPlayer" />
        </div>

        <div className="flex items-center w-full cursor-pointer">
          {/* <span className="timeProgress">00:35</span>
          <div className="mx-5 bg-progressbar-player-bg h-1 w-full rounded-full relative ">
            <span className="bg-progressbar-active-bg h-1 absolute left-0 top-0 rounded-full w-1/2"></span>
          </div>
          <span className="timeProgress">05:35</span>
          <div className="flex justify-between mt-2 text-xs text-gray-600"></div> */}
          <TimeSlider
            axis="x"
            xmax={duration}
            x={currentTime}
            onChange={handleTimeSliderChange}
            styles={{
              track: {
                margin: '10px 20px',
                height: '4px',
                width: '100%',
                backgroundColor: "hsla(0,0%,100%,0.3)",
              },
              active: {
                backgroundColor: "#fff",
                height: '4px',
              },
              thumb:{
                width: '0px',
                height: '0px',
                '&:hover': {
                    width: '7px',
                    height: '7px',
                },
              }
            }}
          />
          <audio
            ref={audioRef}
            src={songInfo && songInfo.hub.actions[1].uri}
            onLoadedData={handleLoadedData}
            onTimeUpdate={timeCurrent}
            onEnded={() => nextSong()}
          />
        </div>
      </div>
    </div>
  );
}

export default ControlMain;
