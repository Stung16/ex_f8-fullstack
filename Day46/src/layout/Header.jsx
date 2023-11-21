import React, { useMemo } from "react";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
import img from "../assets/img/logo.ico";
import cart from "../assets/img/cart.png";
import { useSelector } from "react-redux";

export default function Header() {
  // const navigate = useNavigate()
  const cartList = useSelector((state) => state.shop.cartList);
  const sumQuantity = useMemo(() => {
    let total = 0;
    for (var i = 0; i < cartList.length; i++) {
       total += cartList[i].amount;
    }
    return total;
  }, [cartList]);
  return (
    <header>
      <div className="container-header">
        <div className="icon">
          <NavLink to={"/"}>
            <img src={img} alt="" />
          </NavLink>
          <div className="cart">
            <NavLink to={"/carts"}>
              <img src={cart} alt="" />
              <span className="orders">{sumQuantity}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
