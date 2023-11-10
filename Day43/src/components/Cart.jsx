import React, { useContext } from "react";
import { ShopContext } from "../App";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Cart() {
  const { productsItem, setCarts, carts } = useContext(ShopContext);
  const totalMoney = () => {
    let moneyPay = 0;
    carts.map((cart) => {
      moneyPay += cart.quantity * cart.price;
    });
    return moneyPay;
  };
  return (
    <>
      {carts.length > 0 ? (
        <table>
          <thead>
            <tr>
              <td>Tên sản phẩm</td>
              <td>Số lượng</td>
              <td>giá </td>
              <td>Tổng Tiền</td>
            </tr>
          </thead>
          <tbody>
            {carts.map(({ _id, quantity, price, name }) => (
              <tr key={_id}>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{totalMoney().toLocaleString() + " VND"}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>
                {" "}
                <button className="btn btn-orders">Thành Toán</button>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <h2
          style={{
            fontSize: 26,
            fontWeight: 500,
            display: "block",
            marginTop: 18,
          }}
        >
          chưa có sản phẩn nào
        </h2>
      )}
    </>
  );
}
