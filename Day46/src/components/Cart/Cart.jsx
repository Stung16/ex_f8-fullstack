import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export default function Cart() {
  const cartList = useSelector((state) => state.shop.cartList);
  const handleIncrement =() => {
  }
  const totalMoney = useMemo(() => {
    let total = 0;
    for (var i = 0; i < cartList.length; i++) {
       total += cartList[i].amount * cartList[i].price;
    }
    return total;
  }, [cartList]);
  return (
    <div className="list-cart">
      {cartList.length > 0 ? (
        cartList.map((cart) => (
          <div key={cart._id} className="cart-item">
            <img src={cart.image} alt={cart.name} />
            <div id="detail">
              <span id="brand">{cart.brand}</span>
              <span id="title">{cart.name}</span>
              <p className="price">
                <span>$</span>
                {cart.price}
              </p>
              <p>Còn lại: {cart.quantity}</p>
            </div>
            <div id="edit">
              <div id="minus">-</div>
              <div id="quantity">{cart.amount}</div>
              <div id="plus">+</div>
            </div>
            <div id="price">
              <span id="dolar-span">$</span>
              <span id="price-span">{cart.price * cart.amount}</span>
              <span id="trash-icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                </svg>
              </span>
            </div>
          </div>
        ))
      ) : (
        <p>thank you</p>
      )}
      {cartList.length > 0 ? (
        <React.Fragment>
          <div className="total-price">
          <span id="left">Total Price: </span>
          <span id="dolar">$</span>
          <span id="right">{totalMoney}</span>
          </div>
        </React.Fragment>
      ) : (
        ""
      )}
    </div>
  );
}
