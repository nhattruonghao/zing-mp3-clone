import React from "react";
import ControlLeft from "./ControlLeft";
import ControlMain from "./ControlMain";
import ControlRight from "./ControlRight";

function MusicPlayerControls({
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
  const translate = audioIndex == null ? 'translate-y-24' : 'translate-y-0';
  const styleMain = `fixed transform ${translate} left-0 bottom-0 right-0 h-24 bg-layout-bg
  flex items-center justify-between px-5 border-t border-border-player
  overflow-hidden transition-all`
  return (
    <div
      className={styleMain}
    >
      <ControlLeft isPlay={isPlay} playList={playList} audioIndex={audioIndex} />
      <ControlMain
        audioIndex={audioIndex}
        playList={playList}
        isPlay={isPlay}
        audioRef={audioRef}
        currentTime={currentTime}
        duration={duration}
        handleLoadedData={handleLoadedData}
        handlePausePlayClick={handlePausePlayClick}
        prevSong={prevSong}
        nextSong={nextSong}
        handleTimeSliderChange = {handleTimeSliderChange}
        timeCurrent = {timeCurrent}
      />
      <ControlRight />
    </div>
  );
}

export default MusicPlayerControls;
