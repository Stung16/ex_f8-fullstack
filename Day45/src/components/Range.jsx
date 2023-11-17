import React from "react";
import { SurpriseNumber } from "../App";
import { useContext } from "react";
import { toast } from "react-toastify";
import { MAX_TIME,randomNumber } from "./config";


export default function Range() {

  const { turnRef,inputRef,range,setRange,turn,setTurn,setLuckyNumber } = useContext(SurpriseNumber);
  const handleMouseUp = (e) => {
    setLuckyNumber(randomNumber(range))
    setRange(e.target.value)
    setTurn(MAX_TIME(e.target.value))
    toast.info("chào mừng bạn đến với trò đoán số")

  }
  const handleChange = () => {
    inputRef.current.value =""
    inputRef.current.focus()

  }

  return (
    <>
      <div className="range">
        <input
          type="range"
          min={5}
          max={2048}
          defaultValue={5}
          onChange={handleChange}
          onMouseUp={handleMouseUp}
        />
      </div>
    </>
  );
}
