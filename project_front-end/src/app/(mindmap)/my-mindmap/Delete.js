"use client";
import React, { useState } from "react";
import Confirm from "./items/Confirm";

const Delete = ({ data }) => {
  const [check, setCheck] = useState(false);
  return (
    <div>
      <i
        onClick={() => {
          setCheck(true);
        }}
        className="text-base cursor-pointer fa-regular fa-trash-can hover:bg-gray-500 block p-1 rounded-md hover:text-white"
      ></i>
      {check && <Confirm setCheck={setCheck} data={data} />}
    </div>
  );
};

export default Delete;
