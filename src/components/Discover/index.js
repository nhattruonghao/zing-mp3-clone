import React from "react";
import Card from "../Card";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useDispatch, useSelector } from "react-redux";
import { selectChartList } from "../../features/ChartList/ChartListSlice";
import RankingList from "../ZingChart/RankingList";
import Chart from "../Chart";
import { Link } from "react-router-dom";
import {
  playTrue,
  setCurrentSong,
  setPlayList,
} from "../../features/playStatus/playStatusSlice";

const heroSlide = [
  {
    name: "Nhạc mới mỗi ngày",
    img: "https://photo-zmp3.zadn.vn/banner/d/d/d/e/dddec6335279916950a341a898c2bee0.jpg",
  },
  {
    name: "Cách cách ly",
    img: "https://photo-zmp3.zadn.vn/banner/4/3/5/9/4359d4e9b095a0c47d493e1763706bbf.jpg",
  },
  {
    name: "Kpop tháng 11",
    img: "https://photo-zmp3.zadn.vn/banner/b/3/e/3/b3e3bc9f2c8d4473f1976976bf2d3e01.jpg",
  },
  {
    name: "Kpop tháng 11",
    img: "https://photo-zmp3.zadn.vn/banner/b/2/d/0/b2d07304736eefcd621360a941d26634.jpg",
  },
];
const playlistRandom = [
  {
    name: "Giọng hát nổi bật",
    img: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/f/7/1/6/f7169ec2df1877738776406db6147175.jpg",
  },
  {
    name: "Nhạc phim Việt Nam",
    img: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/6/f/b/46fb037f0fa9775b3d41c5f4d551d153.jpg",
  },
  {
    name: "Chill cùng RAP Việt",
    img: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/2/f/5/82f55da7d8e87167d6edcf66013455aa.jpg",
  },
  {
    name: "Yêu cùng EDM",
    img: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/0/4/e/904e706f1953fd2269bf2a68b3fd03c9.jpg",
  },
];

function Discover() {
  const { tracks } = useSelector(selectChartList);
  const top3 = tracks && [tracks[0], tracks[1], tracks[2]];
  SwiperCore.use([Autoplay, Pagination, Navigation]);
  const dispatch = useDispatch();
  const getSong = async (index, tracks) => {
    await dispatch(setPlayList({ tracks }));
    dispatch(
      setCurrentSong(
        index),
    );
    dispatch(playTrue());
  };
  return (
    <div className="">
      <Swiper
        modules={{ Autoplay }}
        grabCursor={true}
        loop={true}
        className="w-full"
        spaceBetween={30}
        autoplay={{ delay: 5000 }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {heroSlide.map((card) => {
          return (
            <SwiperSlide>
              <img src={card.img} className="rounded-2xl" alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="mt-5">
        <RankingList tracks={top3} getSong={getSong}/>
        
        <Link to="/zingchart">
        <div className="mt-0.5 transition-all border hover:border-text-primary w-28 bg-primary-bg rounded-full text-center text-text-primary mx-auto cursor-pointer">
          Xem thêm
        </div>
        </Link>
      </div>

      <div className="mt-5 mb-5">
        <h3 className="text-text-primary font-bold mb-2">
          Có thể bạn muốn nghe
        </h3>
        <div className="flex space-x-12">
          {playlistRandom.map((playlist) => {
            return <Card src={playlist.img} title={playlist.name} />;
          })}
        </div>
      </div>
      {/* <div>
        <Chart />
      </div> */}

    </div>
  );
}

export default Discover;
