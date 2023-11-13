import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Logout from "./Logout";
const service = import.meta.env.VITE_SERVICE_EMAILJS;
const templateId = import.meta.env.VITE_TEMPLATE_ID_EMAILJS;
const apiKeys = import.meta.env.VITE_API_PRIVATE_EMAILJS;
export default function InforUser() {
  const { user, isAuthenticated } = useAuth0();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(service, templateId, e.target, apiKeys).then(
      function () {
        // loading(false)
        toast.success("Thành công<3");
      },
      function (error) {
        console.log("FAILED...", error);
        toast.error("Thất bại :(");
      }
    );
  };
  return (
    <>
      {isAuthenticated && (
        <div className="box-profile">
          <div className="inner-box-profile">
            <div className="info">
              <img src={user.picture} className="avatar" />
              <h3>Xin chào: {user.name} !</h3>
              {user.locale && (
                <p className="language">
                  Language: {user.locale === "vi" ? "Tiếng Việt" : user.locale}
                </p>
              )}
              {user.email && (
                <p>
                  Email: <a href={`mailto:${user.email}`}>{user.email}</a>
                </p>
              )}
            </div>

            <form action="" className="form" onSubmit={sendEmail}>
              <div className="field">
                <label htmlFor="email">Email của bạn* </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Nhập email của bạn"
                  defaultValue={user.email}
                />
              </div>
              <div className="field">
                <label htmlFor="message">Tin nhắn </label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  required
                  placeholder="Nhập tin nhắn của bạn"
                  defaultValue="Tôi cần trợ giúp bài tập về nhà!"
                  cols="40"
                  rows="10"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-support">
                Yêu cầu hỗ trợ!
              </button>
            </form>
          </div>
          <Logout />
          {/* {(isLoading || loading) && <Loading />} */}
        </div>
      )}
    </>
  );
}
