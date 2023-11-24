import React, { useLayoutEffect, useState } from "react";
import ListColums from "../ListColums/ListColums";
import { getApikey, getData } from "../../Redux/slices/chelloSlice";
import { useDispatch } from "react-redux";
import {
  DndContext,
  useSensors,
  useSensor,
  MouseSensor,
  TouchSensor,
  PointerSensor,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

export default function BoardContent() {
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 30 },
  });
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 30 },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 5 },
  });
  const sensors = useSensors(pointerSensor);
  const dispatch = useDispatch();
  const [orderColums, setOrderColums] = useState([]);
  const email = `anhquanst2211@gmail.com`;
  const apiKey = localStorage.getItem("apiKey");

  const handleDragEnd = (event) => {
    console.log(event);
    const { active, over } = event;
    if (!over) return;
    if (active.id !== over.id) {
      const oldArr = orderColums.findIndex((c) => c._id === active.id);
      const newArr = orderColums.findIndex((c) => c._id === over.id);
      const dndOrderColums = arrayMove(orderColums, oldArr, newArr);
      setOrderColums(dndOrderColums);
    }
  };

  useLayoutEffect(() => {
    dispatch(getApikey(email));
    dispatch(getData(apiKey));
  }, []);
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <div className="board-content">
        <ListColums orderColums={orderColums} setOrderColums={setOrderColums} />
      </div>
    </DndContext>
  );
}
