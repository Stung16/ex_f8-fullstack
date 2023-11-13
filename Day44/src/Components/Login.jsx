import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Loading from "./Loading";
export default function Login() {
  const { isLoading, error, loginWithPopup, isAuthenticated } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  return (
    <>
      {!isAuthenticated && (
        <div className="login">
          <h2>Cảm ơn bạn đã sử dụng dịch vụ của F8</h2>
          <p>
            Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và đặt câu hỏi
            tại đây!
          </p>
          <button className=" btn" onClick={() => loginWithPopup()}>
            Sign In | Register
          </button>
        </div>
      )}
    </>
  );
}
