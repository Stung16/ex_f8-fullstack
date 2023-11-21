import React from "react";
import ListProduct from "../../components/ListProducts/ListProduct";
import Header from "../../layout/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Products() {
  return (
    <div className="products">
      <Header />
      <ListProduct />
      <ToastContainer position="top-center" autoClose={1000} />
    </div>
  );
}
