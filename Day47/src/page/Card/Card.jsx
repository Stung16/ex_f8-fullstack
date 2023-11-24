import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Card({ data }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: data._id, data: { ...data } });

  const dndStyleCard = {
    // touchAction: "none",
    transform: CSS.Translate.toString(transform),
    transition,
  };
  return (
    <>
      <div
        className="card"
        ref={setNodeRef}
        style={dndStyleCard}
        {...attributes}
        {...listeners}
      >
        <div className="content-card">{data?.content}</div>
        <button>xoá</button>
      </div>
    </>
  );
}
