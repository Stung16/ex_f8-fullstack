const { object, string, number } = require("yup");
const bcrypt = require("bcrypt");
const model = require("../models/index");
const { Op } = require("sequelize");
const User = model.User;
module.exports = {
  index: async (req, res) => {
    const login = req.session.login;
    if (!login) {
      res.redirect("/login");
    }
    const infor = req.session.username;
    res.render("index", { infor });
  },
  login: async (req, res) => {
    const msg = req.flash("msg");
    const dataOld = req.flash("dataOld");
    const login = req.session.login;
   

    // console.log(emaillogin);
    if (!login) {
      return res.render("login/index", {
        req,
        msg,
        data_Old: dataOld[0],
      });
    } else {
      return res.redirect("/");
    }
  },
  handleLogin: async (req, res) => {
    const { email, password } = req.body;
    const body = await req.validate(req.body, {
      email: string()
        .required("Email không được để trống")
        .email("Email không đúng định dạng!"),
      password: string().min(6, "Mật khẩu ít nhất có 6 ký tự"),
    });
    if (body) {
      let filters = {};
      filters = [
        {
          email: {
            [Op.iLike]: `%${email}%`,
          },
        },
      ];
      const user = await User.findAll({
        where: filters,
      });
      const status = user[0]?.status;
      if (
        user.length &&
        bcrypt.compareSync(password, user[0].password) &&
        status
      ) {
        req.session.username = user[0].name;
        req.session.login = true;
        return res.redirect("/");
      } else {
        if (
          !user.length ||
          !bcrypt.compareSync(password, user[0].password) ||
          !status
        ) {
          req.flash("msg", "email hoặc mật khẩu không đúng!");
        }
        req.session.login = false;
        req.flash("dataOld", req.body);
      }
    }

    return res.redirect("/login");
  },
  register: (req, res) => {
    const msg = req.flash("msg");
    const old = req.flash("old");
    res.render("register/index", { old: old[0], msg, req });
  },
  handleRegister: async (req, res) => {
    const { email, password, confirmPassword } = req.body;
    const body = await req.validate(req.body, {
      email: string()
        .required("Email không được để trống!")
        .email("Email không đúng định dạng!")
        .test("check-unique", "Email đã tồn tại!", async (value) => {
          const unique_user = await User.findAll({
            where: {
              email: value,
            },
          });
          return unique_user.length === 0;
        }),
      password: string().min(6, "Mật khẩu ít nhất có 6 ký tự!"),
      confirmPassword: string().required("Mật khẩu ít nhất có 6 ký tự!"),
    });
    if (body && password === confirmPassword) {
      const saltRounds = 10;
      function getNameFromEmail(value) {
        var name = value.substring(0, value.indexOf("@"));
        return name;
      }
      bcrypt.hash(password, saltRounds, async function (err, hash) {
        try {
          await User.create({
            name: getNameFromEmail(email),
            email,
            password: hash,
            status: true,
          });
        } catch (error) {
          return res.redirect("/register");
        }
        req.flash("msg", "Đăng kí thành công");
        return res.redirect("/login");
      });
      req.flash("emaillogin", email);
    } else {
      if (password !== confirmPassword) {
        req.flash("msg", "mật khẩu không khớp");
        req.flash("old", req.body);
        return res.redirect("/register");
      }
      //   req.flash("msg", "mật khẩu không khớp");
      req.flash("old", req.body);
      return res.redirect("/register");
    }
  },
  logout: (req, res) => {
    req.session.login = false;
    res.redirect("/login");
  },
};
