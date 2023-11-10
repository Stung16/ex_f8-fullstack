import React, { useContext, useEffect } from "react";
import { ShopContext } from "../App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import { handlelogin } from "../configs/handleApi";
import Loading from "./Loading";




export default function Login() {
  const { setEmail, email, setLoading, loading,setProductsItem } = useContext(ShopContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    handlelogin(email, setLoading,setProductsItem);
    setEmail("");
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <main>
        <form action="" onSubmit={handleSubmit}>
          <label className="label" htmlFor="">
            Email
          </label>
          <input
            className="input"
            type="text"
            placeholder="example@example.com"
            onChange={handleChange}
            value={email}
          />
          <button className="submit">Submit</button>
          <ToastContainer autoClose={2000} />
        </form>
        {loading && <Loading />}
      </main>
    </>
  );
}
