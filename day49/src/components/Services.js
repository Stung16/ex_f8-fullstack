"use client"
import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="px-28 w-full mx-auto sm:px-6  flex  justify-between flex-col"
    >
      <h1 className="text-center text-4xl pt-20 pb-10">
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">D</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">Ị</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">C</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">H</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">V</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">Ụ</span>{" "}
      </h1>

      <div className="w-full px-28">
        <ul className="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10 justify-items-center justify-between gap-y-12 gap-x-12">
          <li className="w-full mt-10 rounded-md p-5 py-16 text-center hover:shadow-xl transition duration-500 ease-in-out">
            <a href="#">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center text-amber-500 text-5xl">
                    <i className="fa-solid fa-bed"></i>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-2xl leading-6 font-semibold text-amber-500">
                    Nghỉ Dưỡng Cao Cấp
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Some Text...
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li className="w-full mt-10 rounded-md p-5 py-16 text-center hover:shadow-xl transition duration-500 ease-in-out">
            <a href="#">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center text-amber-500 text-5xl">
                    <i className="fa-solid fa-utensils"></i>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-2xl leading-6 font-semibold text-amber-500">
                    Dịch Vụ Ăn Uống
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Some Text...
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li className="w-full mt-10 rounded-md p-5 py-16 text-center hover:shadow-lg">
            <a href="#">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center text-amber-500 text-5xl">
                    <i className="fa-solid fa-bullhorn"></i>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-2xl leading-6 font-semibold text-amber-500">
                    Chính Sách An Toàn
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Some Text...
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li className="w-full mt-10 rounded-md p-5 py-16 text-center hover:shadow-lg">
            <a href="#">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center text-amber-500 text-5xl">
                    <i className="fa-solid fa-earth-asia"></i>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-2xl leading-6 font-semibold text-amber-500">
                    Rộng Khắp Thế Giới
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Some Text...
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li className="w-full mt-10 rounded-md p-5 py-16 text-center hover:shadow-lg">
            <a href="#">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center text-amber-500 text-5xl">
                    <i className="fa-solid fa-plane"></i>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-2xl leading-6 font-semibold text-amber-500">
                    Tốc Độ Cao
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Some Text...
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li className="w-full mt-10 rounded-md p-5 py-16 text-center hover:shadow-lg">
            <a href="#">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center text-amber-500 text-5xl">
                    <i className="fa-solid fa-person-hiking"></i>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-2xl leading-6 font-semibold text-amber-500">
                    Những Cuộc Phiêu Lưu
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Some Text...
                  </p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
