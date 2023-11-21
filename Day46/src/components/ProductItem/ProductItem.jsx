import React from "react";
import cart from "../../assets/img/cart.png";
import { toast } from 'react-toastify';
import "./productItem.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchSlice } from "../../rudux/slices/fetchSlice";
const {addCart} = fetchSlice.actions

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product-detail/${product._id}`);
  };

  const handleAddCart = () => {
    dispatch(addCart(product))
    toast.success("thêm thành công")
  }




  return (
    <div className="product-item">
      <img
        onClick={handleClick}
        className="img-product"
        src={product.image}
        alt={product.name}
      />
      <div className="title-product">{product.name}</div>
      <div className="options">
        <div className="price">
          $ <span>{product.price.toLocaleString()}</span>
        </div>
        <img src={cart} alt="" onClick={handleAddCart} />
      </div>
    </div>
  );
}
