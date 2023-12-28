import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getSession } from "@auth0/nextjs-auth0";
// idmap +

export const getListData = async (userId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_MY_MINDMAP}?userId=${userId}`
  );
  const data = await response.json();
  return data;
};
export const PostData = async (data) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_MY_MINDMAP}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
export const getidMindmap = () => {
  if (typeof window !== "undefined") {
    let idMindMap = window?.location?.pathname?.slice(-30);
    return idMindMap;
  }
};
export const GetMindMap = async (userId, idmap) => {
  let data = await getListData(userId);
  data = data?.filter((item) => item?.idMindMap === idmap);
  return data;
};

export const GetMindMapp = async (idmap) => {
  const session = await getSession();
  let data = await getListData(session?.user?.sub);
  data = data?.filter((item) => item?.idMindMap === idmap);
  return data;
};

export const getTime = () => {
  var currentDate = new Date();

  // Lấy thông tin thời gian hiện tại
  var currentYear = currentDate.getFullYear();
  var currentMonth = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0
  var currentDay = currentDate.getDate();
  var currentHour =
    currentDate.getHours() < 10
      ? `0${currentDate.getHours()}`
      : currentDate.getHours();
  var currentMinute = currentDate.getMinutes();
  var currentSecond = currentDate.getSeconds();

  // Hiển thị thông tin thời gian hiện tại
  return (
    currentYear +
    "-" +
    currentMonth +
    "-" +
    currentDay +
    " " +
    currentHour +
    ":" +
    currentMinute +
    ":" +
    currentSecond
  );
};

export const makeid = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const saveMindmap = async (subid, data, idmap) => {
  let dataMindmap = await GetMindMap(subid, idmap);
  let idData = dataMindmap[0]?.id;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_MY_MINDMAP}/${idData}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.status === 200) {
    toast.success("Lưu thành công");
  }
};

export const delMindmap = async (id) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_MY_MINDMAP}/${id}`, {
    method: "DELETE",
  });
  console.log(response);
};
