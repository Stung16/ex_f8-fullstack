import React, { useLayoutEffect, useRef } from "react";
import { SurpriseNumber } from "../App";
import { useContext } from "react";
import { MAX_TIME } from "./config";
import { toast } from "react-toastify";
import { randomNumber } from "./config";
let data = [];
let valueNow = 0;



export default function FormNumber() {
  const { inputRef, turn, setTurn, range, luckyNumber,setLuckyNumber } =
    useContext(SurpriseNumber);
  const handleSubmit = (e) => {
    e.preventDefault();
    valueNow = +e.target[0].value;
    data.push(+e.target[0].value);
    inputRef.current.placeholder = +e.target[0].value;

    setTurn(turn - 1);
    if (turn - 1 <= 0) {
      toast.info("hết lượt mất rùi:((");
      localStorage.setItem("data", JSON.stringify(data));
    } else {
      if (inputRef.current.value > luckyNumber) {
        toast.warning("hmm... bạn cần giảm 1 chút:vv");
      } else if (inputRef.current.value < luckyNumber) {
        toast.warning("hmm... bạn cần tăng 1 chút:vv");
      } else {
        toast.info("bạn đã đoán đúng <3");
        localStorage.setItem("data", JSON.stringify(data));
      }
    }
  };
  //   const handleChange = (e) => {};
  const handleReset = () => {
    setLuckyNumber(randomNumber(range))
    valueNow = 0;
    setTurn(MAX_TIME(range));
  };
  return (
    <>
      {turn === 0 || valueNow === luckyNumber ? (
        <button onClick={handleReset} className="restart">
          Chơi lại
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="input-range">Hãy thử nhập một số</label>
          <input
            ref={inputRef}
            className="try-number"
            type="input"
            id="input-range"
            placeholder="Thử nhập một số"
          />
        </form>
      )}
    </>
  );
}
