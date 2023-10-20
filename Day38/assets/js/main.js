/*
Authentication
- Xác thực
- Xác minh xem bạn là ai?

Authorization
- Ủy quyền
- Cho biết bạn sẽ được làm gì?
*/

import { client } from "./client.js";
import { requestRefesh } from "./token.js"; 
client.setUrl("https://api-auth-two.vercel.app");
  
const container = document.querySelector("#container");


const isSign_in = () => {
  //Kiểm tra trạng thái đăng nhập
  const clickSign_in = sessionStorage.getItem('click-sign_in');
  if(clickSign_in){
    return true
  }
};


const handleLogout = () => {
    sessionStorage.removeItem('login')
    sessionStorage.removeItem('click-sign_in')
    sessionStorage.removeItem('click-sign_up')
  render();
};

// const getProfile = async () => {
//   const tokens = localStorage.getItem("login_token");
//   if (tokens) {
//     const { access_token: accessToken,refesh_token: refeshToken } = JSON.parse(tokens);
//     if (!accessToken) {
//       //Xử lý logout
//       handleLogout();
//     } else {
//       //set token vào header của request
//       client.setToken(accessToken);
//       const { response, data } = await client.get("/auth/profile");
//       if (!response.ok) {
//         //Xử lý logout -> 401
//         // handleLogout();
//         const { data: newToken } = await requestRefesh(refeshToken)
//         requestRefesh(refeshToken)


//         if(newToken){
//           localStorage.setItem("login_token", JSON.stringify(newToken));
//           getProfile()
//         }else{
//           handleLogout()
//         }
//       } else {
//         const profileName = document.querySelector(".profile .name");
//         profileName.innerText = data.name;
//       }
//     }
//   }
// };





const eventSign_in = () => {
  const btn_SignIn = document.querySelector(".btn_sign-in")
  const goHome = document.querySelector(".go-home")
  btn_SignIn?.addEventListener("click", () => {
    sessionStorage.setItem('click-sign_in','click')
    render()
  })
  goHome?.addEventListener("click",(e) => {
    e.preventDefault()
    sessionStorage.removeItem('click-sign_in')
    sessionStorage.removeItem('click-sign_up')
    render()
  })
  const formSign_in = document.querySelector(".form-sign_in");
  if (formSign_in) {
    const btn_SignUp = formSign_in.querySelector(".btn-sign_up");
    formSign_in.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailEl = e.target.querySelector(".email");
      const passwordEl = e.target.querySelector(".password");

      const email = emailEl.value;
      const password = passwordEl.value;

      handleSignin({ email, password });
    });
    btn_SignUp.addEventListener("click",(e) => {
      e.preventDefault();
      sessionStorage.setItem('click-sign_up', 'click')
      render()
      const formSign_up = document.querySelector(".form-sign_up");
      if(formSign_up){
        // const btn_SignUp = formSign_up.querySelector(".btn-sign_up");
      formSign_up.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameEl = e.target.querySelector(".name");
        const emailEl = e.target.querySelector(".email");
        const passwordEl = e.target.querySelector(".password");

        const name = nameEl.value;
        const email = emailEl.value;
        const password = passwordEl.value;

        handleSignup({ email, password, name });
      });
      }
      const btn_SignInn =  formSign_up.querySelector(".btn-sign_in")
      btn_SignInn.addEventListener("click",(e) => {
        e.preventDefault()
        sessionStorage.removeItem('click-sign_up')
        render()
      })
    })
  }
};

const eventLogout = () => {
  const logout = document.querySelector("btn_sign-out");
  if (logout) {
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      handleLogout();
    });
  }
};

const render = () => {
  const clickSign_up = sessionStorage.getItem('click-sign_up');
  const login = sessionStorage.getItem('login');
  if (isSign_in()) {
    container.innerHTML = `<div id="sign-in">
    <div class="infor-left-sign_in">
      <h2 class="title-blog">Sign In</h2>
      <p class="request-title">Please enter your email and password.</p>
      <a class="go-home" href="#">Go to home</a>
    </div>
    <div class="infor-right-sign_in">
      <form action="" class="form form-sign_in">
        <label for="email">Enter Your email</label>
        <input class="email" type="email" id="email" placeholder="Please enter your email">
        <label for="password">Enter Your password</label>
        <input class="password" type="password" id="password" placeholder="Please enter your password">
        <div class="btn-control">
          <button class="btn btn-sign_in">Sign in</button>
          <button class="btn btn-sign_up">Sign up</button>
        </div>
      </form>
      <div class="msg"></div>
    </div>
  </div>
    `;
  } 
  if (!isSign_in()) {
    container.innerHTML = `<div class="header-blog">
    <h1>Welcom to my blog</h1>
    <div class="btn_sign-in">Sign-in</div>
  </div>
  <div class="main-blogs">
    <div class="blog-post">
      <div class="inner-post">
        <div class="timming">12:00</div>
        <div class="infor-post">
          <div class="infor-user-post">
            <div class="avatar-user">T</div>
            <div class="name-user">Kiều Tùng</div>
          </div>
          <div class="title-post">Hot Search</div>
          <div class="content-post">Nhậu nhậu</div>
        </div>
      </div>
      <hr />
    </div>
  </div>`;
  }
  if(clickSign_up){
    container.innerHTML = `<div id="sign-up">
    <div class="infor-left-sign_up">
      <h2 class="title-blog">Sign Up</h2>
      <p class="request-title">Please enter your name, email and password.</p>
      <a class = "go-home" href="#">Go to home</a>
    </div>
    <div class="infor-right-sign_up">
      <form action="" class="form form-sign_up">
        <label for="name">Enter Your email</label>
        <input class="name" type="text" id="name" placeholder="Please enter your name">
        <label for="email">Enter Your email</label>
        <input class="email" type="email" id="email" placeholder="Please enter your email">
        <label for="password">Enter Your email</label>
        <input class="password" type="password" id="password" placeholder="Please enter your password">
        <div class="btn-control">
          <button class="btn btn-sign_up">Sign up</button>
          <button class="btn btn-sign_in">Sign in</button>
        </div>
      </form>
      <div class="msg"></div>
    </div>
  </div>`
  }
  if(login){
    container.innerHTML = `
    <div id="ui-login">
    <div class="header-blog">
      <h1>bloger</h1>
      <div class="infor-user">
        <div class="infor-user-post">
          <div class="avatar-user">T</div>
          <div class="name-user">Kiều Tùng</div>
      </div>
    </div>
    <div class="main-blogs">
      <form class="create-post">
        <label for="title">Enter your title</label>
        <input id="title" type="text" placeholder="Please enter the title">
        <label for="content">Enter your content</label>
        <textarea id="content" cols="30" rows="10" placeholder="Content here"></textarea>
        <label for="time">Set time to post</label>
        <input id="time" type="datetime-local">
        <button class="btn wirite">Wirite</button>
      </form>
      <div class="btn btn-log-out">Sign out</div>
      <!-- <div class="btn btn_sign-out">Sign-out</div> -->
      <div class="blog-post">
        <div class="post">
          <div class="inner-post">
            <div class="timming">12:00</div>
            <div class="infor-post">
              <div class="infor-user-post">
                <div class="avatar-user">T</div>
                <div class="name-user">Kiều Tùng</div>
              </div>
              <div class="title-post">Hot Search</div>
              <div class="content-post">Nhậu nhậu</div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
    </div>`
  }

  eventSign_in()
  eventLogout()
};

render();






const loading = (mode = "add") => {
  const formSign_in = document.querySelector(".form-sign_in");
  if (formSign_in) {
    const btn_SignIn = formSign_in.querySelector(".btn-sign_in");
    if (mode === "add") {
      btn_SignIn.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Loading`;
      btn_SignIn.disabled = true;
    } else {
      btn_SignIn.innerText = "Sign in";
      btn_SignIn.disabled = false;
    }
  }

  const formSign_up = document.querySelector(".form-sign_up");
  if (formSign_up) {
    const btn_Signup = formSign_up.querySelector(".btn-sign_up");
    if (mode === "add") {
      btn_Signup.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Loading`;
      btn_Signup.disabled = true;
    } else {
      btn_Signup.innerText = "Sign in";
      btn_Signup.disabled = false;
    }
  }
};

const handleSignin = async ({ email,password}) => {
  const msg = document.querySelector(".msg");
  msg.innerText = ``;
  loading();
  const { data: tokens, response } = await client.post("/auth/login", {
    email,
    password,
  });
  if (response.ok) {
    //Cập nhật vào Storage (localStorage)
    sessionStorage.setItem("login","succses")
    sessionStorage.setItem("click-sign_up", JSON.stringify(tokens));

    // console.log("đăng nhập thành công");
    render(); //Render lại giao diện
    
  


  } else {
    msg.innerText = `Information incorect`;
  }
  loading("remove");
};

const handleSignup = async ({ email, password, name }) => {
  const msg = document.querySelector(".msg");
  msg.innerText = ``;
  loading();
  const { data: tokens, response } = await client.post("/auth/register", {
    name,
    email,
    password,
  
  });
  if (response.ok) {
    //Cập nhật vào Storage (localStorage)
    localStorage.setItem("login_token", JSON.stringify(tokens));
    sessionStorage.removeItem('click-sign_up');
    render(); //Render lại giao diện
    const formSign_in = document.querySelector(".form-sign_in");
    const emailEl = formSign_in.querySelector(".email")
    emailEl.value=email
  } else {
    msg.innerText = `lỗi`;
  }
  loading("remove");
};


