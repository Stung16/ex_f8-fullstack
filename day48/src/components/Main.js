import React from "react";
import "../../assets/style/main.css";
function Main() {
  return (
    <main>
      <div className="inner-main">
        {/*  */}
        <div className="main-header">
          <h1>Fullstack.edu.vn F8</h1>
        </div>
        {/*  */}
        <div className="main-content">
          <aside className="infor-left">
            <div className="inner-infor">
              <div className="avata">
                <img
                  src="https://code-fullstack-exercise48.vercel.app/f8.jpg"
                  alt=""
                />
              </div>
              <section className="skill">
                <h2>Các kỹ năng của tôi</h2>
                <ul>
                  <li>
                    <h3>Kỹ năng làm việc: </h3>
                    REST,API,React.js,Next.js,Rudux,Context,CSS3,HTML5,Photoshop...
                  </li>
                  <hr />
                  <li>
                    <h3>Các kỹ năng khác: </h3>
                    kỹ năng nghiên cứu và học hỏi tương đối tốt,Kỹ năng làm việc
                    nhóm tốt,kỹ năng nói trước đám đông...
                  </li>
                  <hr />
                </ul>
              </section>
              <section className="story">
                <h2>Lịch sử</h2>
                <ul>
                  <li>
                    <h3>2011-2015: </h3>
                    Học tại THCS Võng Xuyên
                  </li>
                  <hr />
                  <li>
                    <h3>2016-2019: </h3>
                    Học tại THPT Phúc thọ
                  </li>
                  <hr />
                  <li>
                    <h3>2020-2023: </h3>
                    học tại trường Cao đẳng công nghệ Bách Khoa Hà Nội
                  </li>
                </ul>
              </section>
            </div>
          </aside>
          <div className="infor-right">
            <section className="personal-information"> 
                <h3>Thông tin liên hệ</h3>
                <ul>
                    <li>Phone: <a href="#">0375072400</a></li>
                    <li>Email: <a href="#">kieuduytung3@gmail.com</a></li>
                    <li>Facebook: <a href="https://www.facebook.com/tung.kieu.58173">https://www.facebook.com/tung.kieu.58173</a></li>
                </ul>
            </section>
            <hr />
            <section className="my-project">
                    <h3>Các dự án cá nhân</h3>
                    <ul>
                        <li>
                            <h3>Project1</h3>
                            <p>một dự án nhỏ hoàn thành trong 1 ngày</p>
                            <div className="control">
                                <a href="#">Demo</a>
                                <a href="#">Code</a>
                            </div>
                        </li>
                        <hr />
                        <li>
                            <h3>Project2</h3>
                            <p>một dự án nhỏ hoàn thành trong 1 ngày</p>
                            <div className="control">
                                <a href="#">Demo</a>
                                <a href="#">Code</a>
                            </div>
                        </li>
                        <hr />
                        <li>
                            <h3>Project3</h3>
                            <p>một dự án nhỏ hoàn thành trong 1 ngày</p>
                            <div className="control">
                                <a href="#">Demo</a>
                                <a href="#">Code</a>
                            </div>
                        </li>
                        <hr />
                    </ul>
            </section>
            <section className="favourite">
                <h3>Sở thích cá nhân</h3>
                <ul>
                    <li>Thưởng Thức Nhạc Nhẹ, Nhạc Rap Của Đen Vâu Và Các Nghệ Sĩ Khác,…</li>
                    <li>Đọc Sách, Học Hỏi Thêm Về Các Ngôn Ngữ Lập Trình Mới Mẻ. Hiện Tại, Tôi Đang Tự Học Python</li>
                    <li>🌞 🌙Theo Dõi Các Xu Hướng Công Nghệ, Tin Tức Về Các Sản Phẩm Nổi Tiếng Như Iphone, Huawei, GoogleAI,…</li>
                </ul>
            </section>
          </div>
        </div>
        {/*  */}
        <div className="main-footer"></div>
      </div>
    </main>
  );
}

export default Main;
