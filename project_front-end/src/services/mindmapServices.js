import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getListData = async (userId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_MY_MINDMAP}?userId=${userId}`
  );
  const data = await response.json();
  return data;
};
export const PostData = async (data) => {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_MY_MINDMAP}`, {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_MY_MINDMAP}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        // Xử lý khi trạng thái phản hồi không thành công (ví dụ: 404 Not Found, 500 Internal Server Error)
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response;
    } catch (error) {
      // Xử lý lỗi xảy ra trong quá trình fetch
      console.error('Error during fetch:', error);
    }
};

export const GetMindMap = async (userId, idmap) => {
  let data = await getListData(userId);
  data = data.filter((e) => {
    return e.id === idmap;
  });
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

export const saveMindmap = async (data, idmap) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_MY_MINDMAP}/${idmap}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const dataMode = await response.json();
    return { response, dataMode };
  } catch (error) {
    console.error(error);
  }
};

export const delMindmap = async (id) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_MY_MINDMAP}/${id}`, {
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
