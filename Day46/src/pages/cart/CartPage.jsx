import React from "react";
import "./cartpage.css";
import Header from "../../layout/Header";
import { NavLink } from "react-router-dom";
import Cart from "../../components/Cart/Cart";
import { fetchSlice } from "../../rudux/slices/fetchSlice";
const { checkOut} = fetchSlice.actions;
import { useDispatch, useSelector } from "react-redux";


export default function CartPage() {
  const dispatch = useDispatch()
  const handleCheckOut = () => {
    dispatch(checkOut())
  }
  // const carts = useSelector((state) => state.carts);
  return (
    <React.Fragment>
      <Header />
      <div className="cart-page">
        <h1 className="title-shopcart">SHOPPING CART</h1>
        <Cart />
        <div className="option">
        <NavLink to={'/'}>
          <button>Go-home</button>
        </NavLink>
        <button onClick={handleCheckOut} className="check-out">Checkout</button>
        </div>
      </div>
    </React.Fragment>
  );
}
