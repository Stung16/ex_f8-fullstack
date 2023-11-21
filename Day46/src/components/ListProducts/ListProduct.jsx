import React, { useEffect, useState } from "react";
import { client } from "../../Utils/client";
import ProductItem from "../ProductItem/ProductItem";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./listProductt.css";
import { fetchSlice } from "../../rudux/slices/fetchSlice";
const { isloading } = fetchSlice.actions;
import Loading from "../Loading/Loading";
import { useDispatch, useSelector } from "react-redux";

export default function ListProduct() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.shop.loading);
  const [listProduct, setLiProduct] = useState([]);
  const handleGetProducts = async () => {
    const queryStr = new URLSearchParams({
      limit: 20,
      page: 1,
    }).toString();
    const url = `/products?${queryStr}`;
    dispatch(isloading(true));
    const { data } = await client.get(url);
    if(data.code === 200){
      
    }
    dispatch(isloading(false));
    setLiProduct(data.data.listProduct);
  };
  useEffect(() => {
    handleGetProducts();
  }, []);
  return (
    <>
      <h2 className="title-products">Products</h2>
      <div className="list-product">
        {loading ? (
          <Loading />
        ) : (
          listProduct.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))
        )}
      </div>
      <ToastContainer position="top-center" autoClose={900} />
    </>
  );
}
