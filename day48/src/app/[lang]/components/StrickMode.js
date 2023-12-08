"use client";
import { useDispatch,useSelector } from "react-redux";
import React from "react";
import { darkModeSlice } from "@/redux/slice/darkModeSlice";
const {chagneTheme} = darkModeSlice.actions

const StrickMode = () => {
  function darkModeListener() {
  }
  return (
    <div className="bg-white   justify-center flex flex-row items-center transition-all ease-in-out">
      <div className="flex flex-row justify-between toggle">
        <label
          htmlFor="dark-toggle"
          className="flex items-center cursor-pointer"
        >
          <div className="relative">
            <input
              onClick={darkModeListener}
              type="checkbox"
              name="dark-mode"
              id="dark-toggle"
              className="checkbox hidden"
            />
            <div className="block border-[1px] dark:border-white border-gray-900 w-14 h-8 rounded-full dark:bg-gray-900" />
            <div className="dot absolute left-1 top-1 dark:bg-white bg-gray-800 w-6 h-6 rounded-full transition" />
          </div>
        </label>
      </div>
    </div>
  );
};

export default StrickMode;
