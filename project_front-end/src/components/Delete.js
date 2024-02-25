"use client";
import React, { useState } from "react";
import Confirm from "./Confirm";
import { delMindmap } from "@/services/mindmapServices";
import Loading from "@/components/Loading/Loading";

const Delete = ({ data }) => {
  const [check, setCheck] = useState(false);
  return (
    <div>
      <i
        onClick={() => {
          delMindmap(data);
          setCheck(true);
        }}
        className="text-base cursor-pointer fa-regular fa-trash-can hover:bg-gray-500 block p-1 rounded-md hover:text-white"
      ></i>
      {check && <Confirm setCheck={setCheck} data={data} />}
    </div>
  );
};

export default Delete;
