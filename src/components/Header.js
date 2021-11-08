import React from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  SearchIcon,
  LoginIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div className="sticky top-0 h-20 bg-layout-bg shadow-md z-50">
      <div className="flex px-9 items-center w-full h-full">
        <div className="flex space-x-5">
          <ArrowLeftIcon className="iconHeader" />
          <ArrowRightIcon className="iconHeader" />
        </div>
        <div className="flex-1 px-7">
          <form className="" action="">
            <div className="relavite bg-alpha-bg rounded-full min-w-180px max-w-540px">
              <SearchIcon className="iconHeader mx-3 absolute top-1/2 transform -translate-y-1/2" />
              <input
                className="w-full rounded-full focus:bg-primary-bg pl-12 pr-3 text-text-primary h-10 bg-none outline-none text-sm leading-10"
                type="text" 
                placeholder="Nhập tên bài hát, nhạc sĩ, Mv..."
              />
            </div>
          </form>
        </div>
        <div className="flex space-x-5">
          <LoginIcon className="iconHeader" />
          <ViewGridIcon className="iconHeader" />
        </div>
      </div>
    </div>
  );
}

export default Header;
