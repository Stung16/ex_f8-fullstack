import React, { useContext } from "react";
import { ShopContext } from "../App";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Cart_item() {
  const { productsItem, setCarts, carts } = useContext(ShopContext);
  let moneyPay = 0;
  const totalMoney = () => {
    carts.map((cart) => {
      moneyPay += cart.quanquantity * cart.price;
    });
    return moneyPay;
  };
  totalMoney();
  return (
    <>
      {carts.length > 0 ? (
        <tr>
          <td>name</td>
          <td>số lượng</td>
          <td>giá</td>
          <td>còn lại</td>
          <td>tổng tiền</td>
        </tr>
      ) : (
        <h1>khôg có gì</h1>
      )}
    </>
  );
}
