// "use client";
import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@auth0/nextjs-auth0";

const Header = async () => {
  const data = await getSession();
  const user = data?.user;
  // if (!user) {
  //   redirect("/api/auth/login");
  // }
  return (
    <header className=" relative shadow-lg px-28 py-2 h-[]">
      <nav className="flex justify-between">
        <div className="w-[130px] md:w-[200px] flex items-center">
          <Link href={"/"} className="font-bold text-indigo-500 text-xl">
            Mindmap Flow
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh]  flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5 ">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
              <li className="relative max-w-fit pr-3 md:pr-0 hover:text-indigo-500 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link href={"/"}>Trang chủ</Link>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 hover:text-indigo-500 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link href={"/about"}>Giới thiệu</Link>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 hover:text-indigo-500 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link href={"/features"}>Tính năng</Link>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 hover:text-indigo-500 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link href={"/price"}>Bảng giá</Link>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 hover:text-indigo-500 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link href="/contact">Liên hệ</Link>
              </li>

              {user && (
                <li className="relative max-w-fit  hover:shadow px-5 py-2 hover:bg-indigo-500 hover:text-white rounded-lg">
                  Hi, {user.name ? user.name : user.nickname}
                </li>
              )}

              {user && (
                <Link
                  href={"/my-mindmap"}
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
