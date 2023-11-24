import React, { useEffect } from "react";
import ListColums from "../ListColums/ListColums";
import { getApikey } from "../../Redux/slices/chelloSlice";
import { chelloSlice } from "../../Redux/slices/chelloSlice";
import { client } from "../../Utils/client";
import { useDispatch } from "react-redux";
const { updateData } = chelloSlice.actions;
import { DndContext } from "@dnd-kit/core";

export default function BoardContent() {
  const dispatch = useDispatch();
  const email = `anhquanst2211@gmail.com`;
  const apiKey = JSON.parse(localStorage.getItem("apiKey"));

  const getData = async (api) => {
    const { data } = await client.get(`/tasks`, null, api);
    if (data.code === 200) {
      dispatch(updateData(data.data));
    }
  };

  const handleDragEnd =(event) => {
    console.log(event);
  }




  useEffect(() => {
    dispatch(getApikey(email));
    getData(apiKey);
  }, []);
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="board-content">
        <ListColums />
      </div>
    </DndContext>
  );
}
