import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

export default function ListCards() {
  const dataChello = useSelector((state) => state.chello.dataChello);
  const ListTasks = dataChello?.tasks;
  return (
    <>
      <div className="content-colum">
        {ListTasks?.map(tasks => <Card key={tasks?._id} data={tasks}/>)}
      </div>
    </>
  );
}
