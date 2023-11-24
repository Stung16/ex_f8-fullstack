import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { mapOrder } from "../../Utils/order";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export default function ListCards() {
  const tasks = useSelector((state) => state.chello.tasks);
  const arrOrder = tasks.map(item => {
    return item?._id
  })
  const orderCards = mapOrder(tasks,arrOrder,"_id")
  return (
    <SortableContext
    items={tasks?.map((c) => c?._id)}
    strategy={verticalListSortingStrategy}>
      <div className="content-colum">
        {orderCards?.map(task => <Card key={task?._id} data={task}/>)}
      </div>
    </SortableContext>
  );
}
