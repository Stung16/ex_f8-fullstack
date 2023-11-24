import React, { useLayoutEffect, useState } from "react";
import Colum from "../Colum/Colum";
import { useSelector } from "react-redux";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { mapOrder } from "../../Utils/order";

export default function ListColums({setOrderColums,orderColums}) {
  const colums = useSelector((state) => state.chello.colums);
  const arrOrder = colums.map(item => {
    return item?._id
  })

  useLayoutEffect(()=>{
    setOrderColums(mapOrder(colums,arrOrder,"_id"))
  },[colums])
  return (
    <SortableContext
      items={colums?.map((c) => c?._id)}
      strategy={horizontalListSortingStrategy}
    >
      <div className="list-colums">
        {orderColums?.map((column) => {
          return <Colum key={column._id} data={column} />;
        })}
      </div>
      <button className="add-cloum">+ add colum</button>
    </SortableContext>
  );
}
