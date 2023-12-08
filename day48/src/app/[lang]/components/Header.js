"use client";
import Link from "next/link";
import StrickMode from "./StrickMode";
const Header = ({lang}) => {
  return (
    <div className="header-2 bg-white shadow rounded-lg">
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center px-10">
            <a href="#" className="font-bold text-xl text-indigo-600">
              F8-fullStack
            </a>
            
          </div>
          <div
            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <StrickMode />
            <Link
              href="vi"
              className={`${lang === 'vi' && 'bg-indigo-600 text-gray-300'  } p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300`}
            >
              VI
            </Link>
            <Link
              href="en"
              className={`${lang === 'en' && 'bg-indigo-600 text-gray-300' } p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300`}
            > 
            {/* hover:bg-indigo-600 */}
              EN
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
