import React from "react";
import ListCards from "../ListCards/ListCards";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Colum({ data }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: data._id, data: { ...data } });

  const dndStyleColumn = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <>
      <div
        className="cloum"
        ref={setNodeRef}
        style={dndStyleColumn}
        {...attributes}
        {...listeners}
      >
        <div className="header-colum">
          <div className="name-colum">{data?.columnName}</div>
          <button>delete</button>
        </div>
        <ListCards />
        <button className="footer-colum"> + add task</button>
      </div>
    </>
  );
}
