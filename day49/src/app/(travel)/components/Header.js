"use client"
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-4 dark:bg-slate-700 opacity-80 fixed z-50 right-0 left-0">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl text-xl text-white">
          <Link href="/" className="flex items-center font-bold text-2xl">
            <span className="text-amber-500">S</span>TRAVEL
          </Link>
          <ul className="flex gap-x-5 items-center justify-center">
            <li>
                <a href="#home">Trang Chủ</a>
            </li>
            <li>
                <a href="#book">Đặt Lịch</a>
            </li>
            <li>
                <a href="#packages">Ưu Đãi</a>
            </li>
            <li>
                <a href="#services">Dịch Vụ</a>
            </li>
            <li>
                <Link href="/">Thư Viện</Link>
            </li>
            <li>
                <Link href="/">Đánh Giá</Link>
            </li>
            <li>
                <Link href="/">Liên Hệ</Link>
            </li>
          </ul>
          <div className="flex gap-x-3 items-center justify-center">
            <span className="cursor-pointer"><i className="fa-regular fa-moon text-3xl"></i></span>
            <span className="cursor-pointer"><i className="fa-solid fa-magnifying-glass text-2xl"></i></span>
            <span className="cursor-pointer"><i className="fa-solid fa-user text-2xl"></i></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
