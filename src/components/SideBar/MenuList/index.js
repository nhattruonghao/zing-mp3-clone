import React from "react";
import {
  EyeIcon,
  FolderAddIcon,
  MusicNoteIcon,
  NewspaperIcon,
  StarIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { Route } from 'react-router';
import {ROUTESMENU} from '../../../constant'

const listMenuTrending = [
  {
    name: "Nhạc Mới",
    icon: <MusicNoteIcon className="icon-menu" />,
  },
  {
    name: "Thể Loại",
    icon: <NewspaperIcon className="icon-menu" />,
  },
  {
    name: "Top 100",
    icon: <StarIcon className="icon-menu" />,
  },
  {
    name: "MV",
    icon: <VideoCameraIcon className="icon-menu" />,
  },
];

const listMenuGallary = [
  {
    name: "Bài Hát",
    icon: <MusicNoteIcon className="icon-menu" />,
  },
  {
    name: "Playlist",
    icon: <FolderAddIcon className="icon-menu" />,
  },
  {
    name: "Gần Đây",
    icon: <EyeIcon className="icon-menu" />,
  },
];

const MenuLink = ({ to, icon, title, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact}>
      {({ match }) => {
        const active = match ? 'text-text-item-hover bg-select-bg' : '';
        const style = `px-6 text-sm text-text-secondary font-medium
        flex items-center lg:py-1.5 py-4 hover:text-text-item-hover cursor-pointer ${active}`
        return (
          <Link to={to}>
          <li
          className={style}
        >
          {icon}
          <span className="hidden lg:block">{title}</span>
        </li>
          </Link>
        );
      }}
    </Route>
  );
};

function MenuList({audioIndex}) {
  const renderMenuList = () => {
    return ROUTESMENU.map((item, index) => {
      return (
        <MenuLink
        key = {item.path}
        to = {item.path}
        title = {item.name}
        icon = {item.icon}
        activeOnlyWhenExact = {item.exact}
        />
      );
    });
  };

  const renderMenuTrending = () => {
    return listMenuTrending.map((item, index) => {
      return (
        <li
          key={index}
          className="px-6 text-sm text-text-secondary font-medium
          flex items-center lg:py-1.5 py-4 hover:text-text-item-hover cursor-pointer"
        >
          {item.icon}
          <span className="hidden lg:block">{item.name}</span>
        </li>
      );
    });
  };

  const renderMenuGallary = () => {
    return listMenuGallary.map((item, index) => {
      return (
        <li
          key={index}
          className="px-6 text-sm text-text-secondary font-medium
          flex items-center lg:py-1.5 py-4 hover:text-text-item-hover cursor-pointer"
        >
          {item.icon}
          <span className="hidden lg:block">{item.name}</span>
        </li>
      );
    });
  };
  const maxHeight = audioIndex === null ? 'max-h-60' : 'max-h-40';
  const styleForUi = `h-full ${maxHeight} overflow-y-auto scrollbar-hide`
  return (
    <div className="max-h-full h-full mt-2 lg:mt-4">
      <ul className = 'w-full'>{renderMenuList()}</ul>
      <div className="my-3 m-auto w-100 border-b border-border-primary"></div>
        <ul className={styleForUi}>
          {renderMenuTrending()}
          {renderMenuGallary()}
        </ul>
    </div>
  );
}

export default MenuList;
