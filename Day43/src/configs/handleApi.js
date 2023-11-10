import client from "./Client";
import { toast } from "react-toastify";

// export const handleAddCart =async(arProducts,apiKey,setLoading) =>{
//     const {data} = client.post(`'/orders',arProducts,apiKey `)
//     console.log(data);
// }

export const handleGetProducts = async (limit) => {
  let url = new URLSearchParams(limit);
  const { data } = await client.get(`/products?${url}`);
  return data.data;
};

export const handleGetProfile = async (apiKey) => {
  const { data } = await client.get("/users/profile", null, apiKey);
  if (data.code === 200) {
    toast.success(`chào mừng ${data.data.emailId.name}`);
    localStorage.setItem("userEmail", JSON.stringify(data.data.emailId.email));
  } else {
    toast.error(data.message);
    localStorage.clear();
  }
};

export const handlelogin = async (email, setLoading, setProductsItem) => {
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    let url = new URLSearchParams({ email });
    setLoading(true);
    const { data } = await client.get(`/api-key?${url}`);
    if (data.code === 200) {
      toast.success(`đăng nhập ${data.message}`);
      localStorage.setItem("apiKey", JSON.stringify(data.data.apiKey));
      handleGetProfile(JSON.parse(localStorage.getItem("apiKey")));
      const dataProducts = await handleGetProducts({ limit: 8 });
      setProductsItem(dataProducts);
      setLoading(false);
    } else {
      setLoading(false);

      toast.error(data.message);
      localStorage.clear();
    }
  } else {
    toast.warning("email không hợp lệ");
  }
};

export const checkApiKey = async (apiKey, setProductsItem, setLoading) => {
  if (apiKey) {
    setLoading(true);
    const data = await handleGetProducts({ limit: 8 });
    toast.success(`chào mừng ${JSON.parse(localStorage.getItem("userEmail"))}`)
    setProductsItem(data);
    setLoading(false);
  } else {
    localStorage.clear();
    toast.error("vui lòng đăng nhập để tiếp tục");
  }
};
