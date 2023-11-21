import React from "react";
import Header from "../../layout/Header";
import ListProduct from "../../components/ListProducts/ListProduct";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/product/1");
  // }, []);
  return (
    <>
      <Header />
      <ListProduct />
    </>
  );
}
