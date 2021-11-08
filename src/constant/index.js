import {
  ChartBarIcon,
  CollectionIcon,
  DocumentReportIcon,
  MusicNoteIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { Redirect } from "react-router";
import Discover from "../components/Discover"
import ZingChart from "../components/ZingChart";

export const ROUTESMENU = [
  {
    name: "Cá nhân",
    path: "/individual",
    exact: false,
    icon: <MusicNoteIcon className="icon-menu" />,
    component: () => <Discover />,
  },
  {
    name: "Khám phá",
    path: "/discover",
    exact: false,
    icon: <CollectionIcon className="icon-menu" />,
    component: () => <Discover />,
  },
  {
    name: "#ZingChart",
    path: "/zingchart",
    exact: false,
    icon: <ChartBarIcon className="icon-menu" />,
    component: () => <ZingChart />,
  },
  {
    name: "Radio",
    path: "/radio",
    exact: false,
    component: () => <Discover />,
    icon: <PaperAirplaneIcon className="icon-menu" />,
  },
  {
    name: "Theo dõi",
    path: "/follow",
    exact: false,
    component: () => <Discover />,
    icon: <DocumentReportIcon className="icon-menu" />,
  },
];

export const ROUTES = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/discover"/>,
  },
  {
    name: "Cá nhân",
    path: "/individual",
    exact: false,
    icon: <MusicNoteIcon className="icon-menu" />,
    component: () => <Discover />,
  },
  {
    name: "Khám phá",
    path: "/discover",
    exact: false,
    icon: <CollectionIcon className="icon-menu" />,
    component: () => <Discover />,
  },
  {
    name: "#ZingChart",
    path: "/zingchart",
    exact: false,
    icon: <ChartBarIcon className="icon-menu" />,
    component: () => <ZingChart />,
  },
  {
    name: "Radio",
    path: "/radio",
    exact: false,
    component: () => <Discover />,
    icon: <PaperAirplaneIcon className="icon-menu" />,
  },
  {
    name: "Theo dõi",
    path: "/follow",
    exact: false,
    component: () => <Discover />,
    icon: <DocumentReportIcon className="icon-menu" />,
  },
];
