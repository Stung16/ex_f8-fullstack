import React from 'react'
import Link from 'next/link'

const HeaderProductDetail = () => {
  return (
    <header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-4 dark:bg-slate-700 opacity-80 fixed z-50 right-0 left-0 top-0">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl text-xl text-white">
        <a href="#" className="flex items-center font-bold text-2xl">
          <span className="text-amber-500">S</span>TRAVEL
        </a>
        <ul className="flex gap-x-5 items-center justify-center">
          <li>
              <a href="#">Trang Chủ</a>
          </li>
          <li>
              <a href="#">About</a>
          </li>
          <li>
              <a href="#">Điểm Đến</a>
          </li>
          <li>
              <a href="#">Dịch Vụ</a>
          </li>
          <li>
              <a href="#">Ảnh</a>
          </li>
          <li>
              <a href="#">Blogs</a>
          </li>
        </ul>
        <div className="flex gap-x-3 items-center justify-center">
          <span className="cursor-pointer"><i className="fa-regular fa-moon text-3xl"></i></span>
          <span className="cursor-pointer"><i className="fa-solid fa-user text-2xl"></i></span>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default HeaderProductDetail