"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Link from "next/link";
const Slice = () => {
  return (
    <div className="relative" id="home">
      <Swiper
        className="w-full h-screen posion z-0 select-none "
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img
            className="block w-full bg-cover h-screen"
            src="https://images.ctfassets.net/wqdtr8q8192q/3L5mG9oYO162WKXfnnFW1j/137cf1f2583a5a5ba0dbf8b3dee8ada4/iStock-1353245759.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="block w-full bg-cover h-screen"
            src="https://cdn-imgix.headout.com/tour/15360/TOUR-IMAGE/e6be9abc-de92-4ab1-bb17-0ef9fcb962b0-8584-venice-doge-palace-guided-tour-skip-the-line-01.jpg?auto=compress&fm=webp&w=1100&h=900&q=30"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="block w-full bg-cover h-screen"
            src="https://image.cnbcfm.com/api/v1/image/107178919-1673854215895-gettyimages-669463000-shutterstock_621020393.jpeg?v=1674003106"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex gap-y-1 flex-col items-center justify-center absolute  z-20 left-1/2 -translate-x-1/2 text-2xl text-white top-1/2 -translate-y-1/2">
        <h1 className="font-medium text-3xl">MỌI CHUYẾN ĐI ĐỀU ĐÁNG GIÁ</h1>
        <h3>Khám Phá Các Vùng Đất Mới Cùng Chúng Tôi</h3>
        <h3>Những Chuyến Đi Đang Chờ Đợi Bạn</h3>
        <Link className="bg-amber-500 px-8 py-3 mt-3 text-lg
        " href={"/"}>Khám Phá Ngay </Link>
      </div>
    </div>
  );
};

export default Slice;
