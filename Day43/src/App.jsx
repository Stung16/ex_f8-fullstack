import React, { useEffect, useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "../src/assets/style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import { checkApiKey } from "./configs/handleApi";
import Loading from "./components/Loading";
export const ShopContext = React.createContext();

export default function App() {
  const apiKey = JSON.parse(localStorage.getItem("apiKey"));
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [productsItem, setProductsItem] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    checkApiKey(apiKey, setProductsItem, setLoading);
  }, []);

  return (
    <ShopContext.Provider
      value={{
        loading,
        setLoading,
        setEmail,
        email,
        setProductsItem,
        productsItem,
        setCarts,
        carts,
      }}
    >
      {console.log(productsItem)}
      {apiKey ? (
        <div className="shop">
           <div className="inner-shop">
            <h1 className="title-header">Welcome to Shop!</h1>
            <Products />
            <Cart />
            <ToastContainer autoClose={2000} />
            {loading && <Loading />}
          </div>
        </div>
      ) : (
        <Login />
      )}
    </ShopContext.Provider>
  );
}