import React, { useLayoutEffect } from "react";
import { SurpriseNumber } from "../App";
import { useContext } from "react";
import { MAX_TIME } from "./config";

export default function Content() {
  const { range,turn } = useContext(SurpriseNumber);
  return (
    <>
      <h2 className="title">Chào mừng bạn đến với trò chơi đoán số</h2>
      <h2 >số lần còn lại: {turn}/ {MAX_TIME(range)} </h2>
      <h2>Bạn Cần tìm kiếm một số từ 1 đến {range}</h2>
    </>
  );
}
