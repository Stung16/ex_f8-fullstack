import React, { useContext } from "react";
import { ShopContext } from "../App";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Products() {
  const { productsItem, setCarts, carts } = useContext(ShopContext);
  return (
    <>
      <div className="product-list">
        {productsItem.map(({ _id, image, name, price }) => (
          <div key={_id} className="product-item">
            <img className="img" src={image} alt="image" />
            <h2>{name}</h2>
            <div className="info">
              <div className="price">${price}</div>
              <button
                className="btn add"
                onClick={() => {
                  var newCarts = [...carts];
                  const cartFind = newCarts.find((cart) => cart._id === _id);
                  if (cartFind) {
                    cartFind.quantity = cartFind.quantity + 1;
                    localStorage.setItem("carts", JSON.stringify(newCarts));
                    setCarts(newCarts);
                  } else {
                    localStorage.setItem(
                      "carts",
                      JSON.stringify([
                        ...carts,
                        { _id, name, quantity: 1, price },
                      ])
                    );
                    setCarts([...carts, { _id, name, quantity: 1, price }]);
                  }
                  toast.success(`thêm sản phẩm: ${name} vào giỏ hàng`);
                }}
              >
                add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
