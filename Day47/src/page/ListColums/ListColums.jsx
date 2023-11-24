import React, { useLayoutEffect } from "react";
import Colum from "../Colum/Colum";
import { useSelector } from "react-redux";
import {SortableContext,horizontalListSortingStrategy} from '@dnd-kit/sortable';

export default function ListColums() {
  const dataChello = useSelector(state => state.chello.dataChello)
  const ListColums = dataChello?.columns
  console.log(ListColums);
    
  return (
    <SortableContext items={[ListColums?.map(c => c?._id)]} strategy={horizontalListSortingStrategy}>
      <div className="list-colums">
      {ListColums?.map((column) => {
        return (<Colum key={column._id} data={column} />)
      })}
      </div>
      <button className="add-cloum">+ add colum</button>
    </SortableContext>
  );
}
