import React from "react";
import { SurpriseNumber } from "../App";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function HeaderGame() {
  const { value, setValue, max_time, valueRef } = useContext(SurpriseNumber);
  const MAX_TIME = Math.ceil(Math.log2(value));
  max_time.current = MAX_TIME;
  const handleChange = (e) => {
    setValue(+e.target.value);
    toast.info("chào mừng bạn đến với trò chơi đếm số");
    valueRef.current.focus();
  };

  return (
    <>
      <h2>Chào Mừng bạn đến với trò chơi đoán số</h2>
      <h2>Còn {`${max_time.current}/ ${MAX_TIME}`} lần</h2>
      <h2>Bạn cần tìm kiếm một số từ 1 đến {value}</h2>
      <input
        type="range"
        min={5}
        max={2048}
        defaultValue={5}
        onMouseUp={handleChange}
        onChange={() => {
          valueRef.current.value = "";
        }}
      />
    </>
  );
}
