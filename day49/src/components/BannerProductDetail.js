import React from "react";
import { DATA_API, DATA_IMG } from "@/Utils/config";

const BannerProductDetail = ({ data }) => {
  return (
    <section className=" px-28">
      <div className="mt-20 relative">
        <img
          className="w-full bg-cover object-cover rounded-md block h-[34rem]"
          src="../images/xamac.jpg"
          alt=""
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-center flex-col items-center">
            <h1 className="font-bold text-4xl text-gray-50 ">{data.home.name.toUpperCase()}</h1>
            <h2 className="font-bold text-5xl text-white">{data.home.content}</h2>
            <p className="text-lg text-neutral-500">{data.home.textcontent}</p>
            <a className="bg-amber-400 rounded-full px-4 text-black py-2 mt-2" href="#">Tìm hiểu thêm</a>
        </div>
        <div className="absolute w-[90%] z-10 bg-white px-6 py-8 h-40 top-full block rounded-xl left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-amber-500 font-medium text-3xl">Ưu Đãi 48.000.000 Cho <br /> 7/Người/7Ngày</h1>
            <a className="" href="#">Đặt Ngay</a>
        </div>
      </div>
    </section>
  );
};

export default BannerProductDetail;
