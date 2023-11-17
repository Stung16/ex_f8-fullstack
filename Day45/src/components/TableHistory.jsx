import React, { useState } from "react";
import { SurpriseNumber } from "../App";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function TableHistory() {
  const { valueInput, data, max_time, valueRef } = useContext(SurpriseNumber);
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {

    e.preventDefault();
    data.push(valueInput.current);
    e.target[0].placeholder = valueInput.current;
    console.log(max_time.current);
    max_time.current--;
    if (max_time.current <= 0) {
      toast.success("đã xong");
      setDone(true);
    }
  };
  // const regexValue = (inputValue) =>{
  //   const pattern = /[0-9]/
  // }
  const handleReset = () => {
    setDone(false);
  };
  return (
    <>
      {done ? (
        <button className="restart" onClick={handleReset}>
          Chơi lại
        </button>
      ) : (
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="try-number">Hãy thử nhập một só</label>
          <input
            ref={valueRef}
            id="try-number"
            className="try-number"
            type="text"
            placeholder="hãy nhập 1 số"
            onChange={(e) => {
              valueInput.current = +e.target.value;
            }}
          />
        </form>
      )}
    </>
  );
}
