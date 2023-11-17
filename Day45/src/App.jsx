import React, { useState,useRef, useEffect, useLayoutEffect } from "react";
export const SurpriseNumber = React.createContext();
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TableHistory from "./components/TableHistory";
import "./assets/style.css"
import HeaderGame from "./components/HeaderGame";

export default function App() {
  const valueInput = useRef()
  const max_time = useRef(3)
  const [value,setValue] = useState(5) 
  const data = []
  const valueRef= useRef()

useLayoutEffect(()=>{
    toast.info("chào mừng bạn đến với trò chơi đếm số")
},[])
  return (
    <SurpriseNumber.Provider value={{valueRef,valueInput,value,setValue,data,max_time}}>
      <HeaderGame />
      <TableHistory />
      <ToastContainer autoClose={1500} />
    </SurpriseNumber.Provider>
  );
}
