import React from "react";
import MenuList from "./MenuList";

function SideBar({audioIndex}) {
  return (
    <div className="relative w-20 lg:w-56 bg-sidebar-bg pt-2 lg:pt-4">
      <div className="lg:pl-7 flex justify-center lg:block overflow-hidden">
        <img
          className="hidden lg:block w-28"
          src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
          alt=""
        />
        <img
          className="lg:hidden"
          src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.4.2/static/media/icon_zing_mp3_60.f6b51045.svg"
          alt=""
        />
      </div>
      <MenuList audioIndex={audioIndex} />
      <div
        className="absolute bottom-0 w-full h-14 bg-primary-bg border-t border-border-primary py-2 hidden lg:flex items-center justify-center
      "
      >
        <span className="text-text-primary font-bold hover:text-text-secondary cursor-pointer">
          Tạo Playlist mới
        </span>
      </div>
    </div>
  );
}

export default SideBar;
