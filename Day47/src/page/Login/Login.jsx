import React, { useState } from "react";
import { client } from "../../Utils/client";
import "./login.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../components/Loading/Loading";

export default function Login({ setApiKey }) {
  const emailRule = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);

  const getEmail = async (dataEmail) => {
    const queryString = new URLSearchParams({ email: dataEmail });
    setLoading(true);
    const { data } = await client.get(`/api-key?${queryString}`);
    if (data.code === 200) {
      toast.success("đăng nhập thành công");
      setApiKey(dataEmail);
      localStorage.setItem("apiKey", data.data.apiKey);
    } else {
      toast.error("email không tồn tại!!!");
      localStorage.removeItem("apiKey");
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailRule.test(email)) {
      getEmail(email);
    } else {
      toast.error("email không hợp lệ");
    }
    setEmail("")
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="login">
      {loading && <Loading />}
      <form method="post" className="form-login" onSubmit={handleSubmit}>
        <label htmlFor="email">Đăng nhập</label>
        <input
          type="email"
          required
          id="email"
          placeholder="vui lòng nhập email..."
          onChange={handleChange}
          value={email}
        />
        <button>submit</button>
      </form>
    </div>
  );
}
