import React, { useEffect, useLayoutEffect, useState } from "react";
import "./productDetail.css";
import { client } from "../../Utils/client";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../../layout/Header";
import { NavLink ,useParams} from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { fetchSlice } from "../../rudux/slices/fetchSlice";
const { isloading,addCart} = fetchSlice.actions;
import { useDispatch, useSelector } from "react-redux";

export default function ProductDetail() {
  const {id} = useParams()
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.shop.loading);
  const [productDetail, setProductDetail] = useState([]);

  const handleGetProductDetail = async () => {
    dispatch(isloading(true));
    const { data } = await client.get(`/products/${id}`);
    if (data.code === 200) {
      setProductDetail(data.data);
    }
    dispatch(isloading(false));
  };
  const handleAddCart = () => {
    // console.log(123);
    dispatch(addCart(productDetail))
    toast.success("thêm thành công")
  }
  useLayoutEffect(() => {
    handleGetProductDetail();
  }, []);
  return (
    <div className="product-detail">
      <Header />
      {!loading ? (
        <div className="infor-product">
          <div className="left">
            <img
              className="img-product-detail"
              src={productDetail.image}
              alt={productDetail.name}
            />
          </div>
          <div className="right">
            <h2 id="brand">{productDetail.brand}</h2>
            <h2 id="title">{productDetail.name}</h2>
            <h2 id="description">{productDetail.description}</h2>
            <span className="category">category: {productDetail.category}</span>
            <NavLink to={"/"}>
              <button>Go home</button>
            </NavLink>
            <div id="price-container">
              <h2 id="price">
                <span>$</span>
                {productDetail.price}
              </h2>
              <button onClick={handleAddCart}>Add to cart</button>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      <ToastContainer position="top-center" autoClose={1000} />
    </div>
    
  );
}
