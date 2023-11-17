import React, { useState,useRef, } from "react";
export const SurpriseNumber = React.createContext();
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/style.css"
import Content from "./components/Content";
import Range from "./components/Range";
import FormNumber from "./components/FormNumber";
import TableResult from "./components/TableResult";

export default function App() {
  const inputRef = useRef()
  const [luckyNumber,setLuckyNumber] = useState(Math.floor(Math.random() * 3)) 
  const [range,setRange] = useState(5)
  const [data,setData] = useState(JSON.parse(localStorage.getItem("data")) || [])
  const [turn,setTurn] = useState(3)

  return (
    <SurpriseNumber.Provider value={{luckyNumber,setLuckyNumber,data,setData,inputRef,range,setRange,turn,setTurn}}>
      <Content />
      <Range />
      <FormNumber />
      <TableResult />
      <ToastContainer autoClose={1500} />
    </SurpriseNumber.Provider>
  );
}
