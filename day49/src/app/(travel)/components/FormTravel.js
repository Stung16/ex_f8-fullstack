"use client";
import React from "react";

const FormTravel = () => {
  return (
    <section className="mt-10" id="book">
      <h1 className="text-center text-4xl py-20">
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">T</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">Ì</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">M</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">Ư</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">U</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">Đ</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">Ã</span>{" "}
        <span className="p-3 bg-amber-100 rounded-md text-amber-500">I</span>{" "}
      </h1>
      <div className="flex mt-5 ">
        <img
          className="bg-contain flex-1 w-1/2"
          src="images/book-img.svg"
          alt=""
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex-1 shadow-xl p-8 flex flex-col gap-y-2"
        >
          <label
            className="block text-amber-500 font-medium text-xl"
            htmlFor="a"
          >
            Hãy Liên Hệ Với Tôi Bằng
          </label>
          <input
            className=" border-amber-600 border p-2 w-full rounded-md"
            type="text"
            id="a"
            placeholder="Email hoặc số điện thoại"
          />
          <label
            className="block text-amber-500 font-medium text-xl"
            htmlFor="b"
          >
            Tôi Muốn Đến :
          </label>
          <select
            className="block text-amber-500 w-full text-xl"
          >
            <option value="DEFAULT" disabled>
              Choose a address ...
            </option>
            <option value="American Samoa">American Samoa</option>
            <option value="Angola">Angola</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia" selected>
              VietNam
            </option>
            <option value="Bouvet Island">Bouvet Island</option>
          </select>
          <input
            className=" border-amber-600 border p-2 w-full rounded-md"
            type="text"
            id="b"
            placeholder="Địa Điểm Chính Xác"
          />
          <label
            className="block text-amber-500 font-medium text-xl"
            htmlFor="c"
          >
            Chúng Tôi Có :
          </label>
          <input
            className=" border-amber-600 border p-2 w-full rounded-md"
            type="number"
            id="c"
            placeholder="Số người"
          />
          <label
            className="block text-amber-500 font-medium text-xl"
            htmlFor="d"
          >
            Bắt Đầu Từ :
          </label>
          <input
            className=" border-amber-600 border p-2 w-full rounded-md"
            type="date"
            id="d"
          />
          <label
            className="block text-amber-500 font-medium text-xl"
            htmlFor="f"
          >
            Kết Thúc Vào :
          </label>
          <input
            className=" border-amber-600 border p-2 w-full rounded-md"
            type="date"
            id="f"
          />
          <button className="bg-amber-500 w-max px-4 py-2 text-white hover:bg-yellow-900 rounded-md">Tìm Ngay</button>
        </form>
      </div>
    </section>
  );
};

export default FormTravel;
