const { object, string, number } = require("yup");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const model = require("../models/index");
const moment = require("moment");
const { Op } = require("sequelize");
const User = model.User;
const Device = model.Device;
module.exports = {
  index: async (req, res) => {
    const token = req.cookies.token;
    const success = req.flash("success");
    if (!token) {
      res.redirect("/login");
    }
    const device = await Device.findOne({
      where: { token: token },
      attributes: ["user_id", "status"],
    });
    if (!device.status) {
      return res.redirect("/login");
    }
    const user = await User.findByPk(device?.user_id);
    res.render("index", { user, success });
  },

  login: async (req, res) => {
    const msg = req.flash("msg");
    const dataOld = req.flash("dataOld");
    const token = req.cookies.tokenc;
    if (!token) {
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
    const userAgent = req.headers["user-agent"];
    const body = await req.validate(req.body, {
      email: string()
        .required("Email không được để trống")
        .email("Email không đúng định dạng!"),
      password: string().min(6, "Mật khẩu ít nhất có 6 ký tự"),
    });
    if (body) {
      const user = await User.findOne({ where: { email } });
      const status = user?.status;
      if (user && bcrypt.compareSync(password, user.password) && status) {
        const token = crypto.randomBytes(50).toString("hex");
        const device = await Device.create({
          browser: userAgent,
          token,
          status: true,
          user_id: user.id,
          login_time: moment().format("YYYY-MM-DD HH:mm:ss"),
          login_last: moment().format("YYYY-MM-DD HH:mm:ss"),
        });
        res.setHeader(
          "Set-Cookie",
          `token=${token};path=/;max-age=86400;HttpOnly`
        );
        return res.redirect("/");
      } else {
        if (!user || !bcrypt.compareSync(password, user.password) || !status) {
          req.flash("msg", "email hoặc mật khẩu không đúng!");
        }

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
    res.redirect("/login");
  },
};
