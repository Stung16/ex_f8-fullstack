"use client";
import React, { useLayoutEffect } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { redirect } from "next/navigation";
const PostData = async (data) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_MY_MINDMAP}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response);
};

const Header = () => {
  const { user, error, isLoading } = useUser();

  if (error) {
    return redirect("/");
  }
  return (
    <header className=" relative shadow-lg px-28 py-2">
      <nav className="flex justify-between">
        <div className="w-[130px] md:w-[200px] flex items-center">
          <a className="font-bold text-indigo-500 text-xl" href="#">
            Mindmap Flow
          </a>
        </div>
        <div className="flex items-center gap-3">
          <div className="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5 ">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
              <li className="relative max-w-fit pr-3 md:pr-0 hover:text-indigo-500 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link href="/">Trang chủ</Link>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 hover:text-indigo-500 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link href="/about">Giới thiệu</Link>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 hover:text-indigo-500 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link href="/features">Tính năng</Link>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 hover:text-indigo-500 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link href="/price">Bảng giá</Link>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 hover:text-indigo-500 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link href="/contact">Liên hệ</Link>
              </li>

              {user && (
                // (isLoading && <div>Loading...</div>)
                <li className="relative max-w-fit  hover:shadow px-5 py-2 hover:bg-indigo-500 hover:text-white rounded-lg">
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <p>hi!{user.name || user.nickname}</p>
                  )}
                </li>
              )}
              {user && (
                <Link
                  href="/my-mindmap"
                  className="relative max-w-fit cursor-pointer  px-5 py-2  hover:bg-indigo-500 rounded-lg hover:text-white text-center block"
                >
                  My mindmap
                </Link>
              )}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            {user ? (
              <a
                href="/api/auth/logout"
                type="button"
                className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3]  font-bold text-white px-5 py-2 rounded-full "
              >
                Logout
              </a>
            ) : (
              <a
                href="/api/auth/login"
                className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3]  font-bold text-white px-5 py-2 rounded-full "
              >
                Login
              </a>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
