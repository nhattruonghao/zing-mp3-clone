import {
  DotsHorizontalIcon,
  HeartIcon,
  MicrophoneIcon,
} from "@heroicons/react/outline";
import React from "react";

function Ranking({ audioIndex, item, index, getSong, tracks }) {
  const playing = audioIndex === index ? "bg-select-bg" : "";
  const mainStyle = `w-full flex justify-between items-center rounded-md pr-4 pl-2 py-2 hover:bg-select-bg cursor-pointer ${playing}`;
  let indexStyle = null;
  let indexx = index + 1;
  if(indexx === 1){
    indexStyle = `text-stroke-1 text-center text-4xl mr-6 min-w-40px`;
  }
  if(indexx === 2){
    indexStyle = `text-stroke-2 text-center text-4xl mr-6 min-w-40px `;
  } 
  if(indexx === 3){
    indexStyle = `text-stroke-3 text-center text-4xl mr-6 min-w-40px `;
  }
  else if(indexx > 3){
  indexStyle = `text-stroke-4 text-center text-4xl mr-6 min-w-40px `;
}
          
  return (
    <div onClick={() => getSong(index, tracks)} className={mainStyle}>
      <div className="flex items-center">
        <div className={indexStyle}>{indexx}</div>
        <div className="mr-4">
          <img
            className="min-h-40px h-10 w-10 min-w-40px rounded-sm"
            src={item.images && item.images.coverart}
            alt=""
          />
        </div>
        <div className="flex flex-col text-text-primary">
          <div className="text-sm font-bold whitespace-nowrap">
            {item.title}
          </div>
          <span className="text-text-secondary text-xs">
            {item.subtitle}
          </span>
        </div>
      </div>

      <div className="items-center space-x-4 hidden md:flex">
        <MicrophoneIcon className="iconItem" />
        <HeartIcon className="iconItem" />
        <DotsHorizontalIcon className="iconItem" />
      </div>
    </div>
  );
}

export default Ranking;
