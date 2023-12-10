"use client"
import { DATA_API, DATA_IMG } from "@/Utils/config";
import React from "react";
import Image from "next/image";

const getData = async () => {
  const data = await fetch(`${DATA_API}/pages`);
  const response = await data.json();
  return response;
};

const SpecialOffers = async () => {
  const data = await getData();
  return (
    <section className="px-28" id="packages">
      <h1 className="text-center text-4xl pt-20 pb-5">
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">Ư</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">U</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">Đ</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">Ã</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">I</span>{" "}
      </h1>
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-12 gap-x-12 mt-10 mb-5">
        {data.map(({ id, home, destinationBox }) => {
          return (
            <div
              key={id}
              className="w-full bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            >
              <a href="#">
                <img
                  src={`${DATA_IMG}${destinationBox[0].src}`}
                  alt="Product"
                  className="h-80 w-full object-cover rounded-t-xl"
                />
                <div className="px-4 mt-4 w-full">
                  <p className="text-2xl font-bold text-amber-500 truncate block capitalize">
                    <i className="fa-solid fa-location-dot"></i> {home.name}
                  </p>
                  <h3 className="text-gray-400 mr-3  text-lg block">
                    {home.content}
                  </h3>
                  <h3 className="text-gray-400 mr-3  text-lg block my-3">
                    Chuyến Đi Dành Cho Gia Đình 3N/2Đ
                  </h3>
                  <span className="flex">
                    <i className="text-amber-500 fa-solid fa-star"></i>
                    <i className="text-amber-500 fa-solid fa-star"></i>
                    <i className="text-amber-500 fa-solid fa-star"></i>
                    <i className="text-amber-500 fa-solid fa-star"></i>
                    <i className="text-amber-500 fa-regular fa-star"></i>
                  </span>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-amber-500 cursor-auto my-3">
                      $1000
                    </p>
                    <del>
                      <p className="text-sm text-gray-400 cursor-auto ml-2">
                        $890
                      </p>
                    </del>
                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        fill="currentColor"
                        className="bi bi-bag-plus text-amber-500"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SpecialOffers;
