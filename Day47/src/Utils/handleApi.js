import { toast } from "react-toastify";
import { client } from "./client";

export const getEmail = async (dataEmail) => {
  const queryString = new URLSearchParams({ email: dataEmail });
  const { data } = await client.get(`/api-key?${queryString}`);
  if (data.code === 200) {
    toast.success("đăng nhập thành công");
    localStorage.setItem("apiKey", data.data.apiKey);
    
  } else {
    toast.error("email không tồn tại!!!");
    localStorage.removeItem("apiKey")
  }
};
