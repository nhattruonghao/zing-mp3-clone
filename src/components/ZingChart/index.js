import React from "react";
import RankingList from "./RankingList";
import {
  playTrue,
  selectCurrentSong,
  setCurrentSong,
  setPlayList,
} from "../../features/playStatus/playStatusSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectChartList } from "../../features/ChartList/ChartListSlice";

function ZingChart() {
  const { tracks } = useSelector(selectChartList);
  const audioIndex = useSelector(selectCurrentSong);
  const dispatch = useDispatch();
  const getSong = async (index, tracks) => {
    await dispatch(setPlayList({ tracks }));
    dispatch(
      setCurrentSong(
        index),
    );
    dispatch(playTrue());
  };

  return <RankingList audioIndex={audioIndex} getSong={getSong} tracks={tracks} />;
}

export default ZingChart;
