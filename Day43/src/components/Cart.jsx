import React from "react";
import Cart_item from "./Cart_item";

export default function Cart() {
  return (
    <>
      {/* {carts.length > 0 ? ( */}
      <table>
        <thead>
          <tr>
            <td>Tên sản phẩm</td>
            <td>Số lượng</td>
            <td>giá </td>
            <td>Còn lại</td>
            <td>Tổng Tiền</td>
          </tr>
        </thead>
        <tbody>
          <Cart_item />
          {/* {carts.map(({ productId, quantity, price, name }, index) => (
              <OrderItems
                key={productId}
                name={name}
                stt={index}
                quantity={quantity}
                price={price}
              />
            ))} */}
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
            <td></td>
          </tr>
        </tfoot>
      </table>
      {/* ) : (
        <span
          style={{
            fontSize: 26,
            fontWeight: 500,
            display: "block",
            marginTop: 18,
          }}
        >
          chưa có sản phẩn nào
        </span>
      )} */}
    </>
  );
}
