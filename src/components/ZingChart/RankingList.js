import React from "react";
import Ranking from './Ranking'

function RankingList({getSong, tracks, audioIndex}) {
  return (
    <div className="mt-5">
      <h1 className="text-text-primary font-bold text-4xl my-5">
        #zingchart
      </h1>

      <div>
        {tracks &&
          tracks.map((item, index) => {
            return <Ranking audioIndex={audioIndex} tracks={tracks} getSong={getSong} item={item} index={index} key={index} />;
          })}
      </div>
    </div>
  );
}

export default RankingList;
