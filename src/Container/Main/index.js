import Header from "../../components/Header";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChartListAsync } from "../../features/ChartList/ChartListSlice";
import ContentLayoutRoute from "../../Commons/ContentLayoutRoute";
import { ROUTES } from "../../constant";
import { Switch } from "react-router-dom";
import SideBar from "../../components/SideBar";
import MusicPlayerControls from "../../components/MusicPlayerControls";
import {
  playTrue,
  selecIsPlay,
  selectCurrentSong,
  selectPlayList,
  setCurrentSong,
  togglePlay,
} from "../../features/playStatus/playStatusSlice";

function Main() {
  const dispatch = useDispatch();
  const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const [playList, setPlayList] = useState({});
  const songCurrent = useSelector(selectCurrentSong);
  const getIsPlay = useSelector(selecIsPlay);
  const getPlayList = useSelector(selectPlayList);

  const renderContentRoute = () => {
    let xhtml = null;
    xhtml = ROUTES.map((route) => {
      return (
        <ContentLayoutRoute
          key={route.path}
          path={route.path}
          name={route.name}
          component={route.component}
          exact={route.exact}
        />
      );
    });
    return xhtml;
  };

  useEffect(() => {
    setAudioIndex(songCurrent);
    setPlay(getIsPlay);
    setPlayList(getPlayList);
  }, [songCurrent, getIsPlay, getPlayList]);

  useEffect(() => {
    dispatch(fetchChartListAsync());
  }, [dispatch]);


  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const prevSong = () => {
    let prev = audioIndex - 1; 
    if(prev < 0) {
      prev = playList && playList.tracks.length-1;
    }
    dispatch(setCurrentSong(prev))
    setAudioIndex(prev);
  }

  const nextSong = () => {
    let next = audioIndex + 1; 
    const length = playList && playList.tracks.length-1
    if(next > length) {
      next = 0;
    }
    dispatch(setCurrentSong(next))
    setAudioIndex(next);
  }
  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);
      dispatch(playTrue());
      audioRef.current.play();
  };

  const timeCurrent = () =>{
    setCurrentTime(audioRef.current.currentTime);
  }

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    dispatch(togglePlay());
  };
  const oneHunredWh = audioIndex === null ? 'h-screen' : 'cutForControl'
  const styleForWrapContent = `${oneHunredWh} relative overflow-y-auto overflow-x-hidden w-full`
  return (
    <div className="flex bg-layout-bg overflow-hidden">
      <SideBar audioIndex={audioIndex} />
      <div className={styleForWrapContent}>
        <Header />
        <Switch>{renderContentRoute()}</Switch>
      </div>
        <MusicPlayerControls
        audioIndex = {audioIndex}
        playList = {playList}
        isPlay = {isPlay}
        audioRef = {audioRef}
        currentTime = {currentTime}
        duration = {duration}
        handleLoadedData = {handleLoadedData}
        handlePausePlayClick = {handlePausePlayClick}
        prevSong = {prevSong}
        nextSong = {nextSong}
        handleTimeSliderChange = {handleTimeSliderChange}
        timeCurrent = {timeCurrent}
      />
    </div>
  );
}

export default Main;
