import React from "react";
import {
  MicrophoneIcon,
  VideoCameraIcon,
  VolumeOffIcon,
  MenuAlt1Icon,
} from "@heroicons/react/solid";
import { AnnotationIcon } from "@heroicons/react/outline";

function ControlRight() {
  return (
    <div className="flex items-center">
      <div className="hidden lg:flex items-center justify-evenly w-44">
        <VideoCameraIcon className="iconPlayerSecondary" />
        <MicrophoneIcon className="iconPlayerSecondary" />
        <AnnotationIcon className="iconPlayerSecondary" />
        <VolumeOffIcon className="iconPlayerSecondary" />
      </div>
      <div className="relative">
          <div className="absolute w-0.5 h-full bg-text-secondary -left-1"></div>
        <MenuAlt1Icon className="iconPlayerSecondary w-7 h-7 mx-2" />
      </div>
    </div>
  );
}

export default ControlRight;
