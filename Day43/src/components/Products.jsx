import React, { useContext } from "react";
import { ShopContext } from "../App";
export default function Products() {
  const { loading, setLoading, productsItem, setCarts, carts } =
    useContext(ShopContext);
  // const handleAddCart = (e) => {
  //     e.preventDefault();
  //     console.log(e.nex);
  // }
  return (
    <>
      <div className="product-list">
        {productsItem.map((item, index) => (
          <div key={index} className="product-item">
            <img className="img" src={item.image} alt="image" />
            <h2>{item.name}</h2>
            <div className="info">
              <div className="price">${item.price}</div>
              <button
                className="btn add"
                onClick={() => {
                  setCarts([...carts, { productId, name, quantity: 1, price }])
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
