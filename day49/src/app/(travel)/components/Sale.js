import React from "react";

const Sale = () => {
  return (
    <section className="mt-10 py-8 px-28">
      <h1 className="text-center text-4xl pt-20 pb-10">
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">C</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">H</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">O</span>{" "} 
        <span className="p-3 bg-amber-100 rounded-md text-amber-500"> B</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">Ạ</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">N</span>{" "}
      </h1>
      <div className="shadow-xl rounded-md flex flex-col gap-y-2">
        <img
          className="w-full object-cover h-72 rounded-md"
          src="images/promo.jpg"
          alt=""
        />
        <div className="p-8 flex flex-col gap-y-3">
          <h3 className="text-amber-500 text-xl"><i class="fa-solid fa-location-dot"></i> HaWaii</h3>
          <p className="text-base">Hòn Ngọc Của Thái Bình Dương</p>
          <p className="text-base">Ưu Đãi 50.000.000 Cho 5người/7ngày</p>
          <a className="bg-amber-600 w-max px-4 text-white py-2" href="#">Đặt Ngay</a>
        </div>
      </div>
    </section>
  );
};

export default Sale;
