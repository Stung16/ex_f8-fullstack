const model = require("../models/index");
const { object, string, number } = require("yup");
const moment = require("moment");
const bcrypt = require("bcrypt");
const sendMail = require("../utils/mail");
const { Op } = require("sequelize");
const User = model.User;
const Email = model.Email;
const Device = model.Device;

module.exports = {
  edit: async (req, res) => {
    const body = req.flash("body");
    const { id } = req.params;
    const user = await User.findOne({
      where: { id },
    });
    return res.render("account/edit", { user, req, body });
  },
  handleEdit: async (req, res) => {
    const { id } = req.params;
    const { email, name } = req.body;
    const user = await User.findOne({
      where: { id },
    });
    const body = await req.validate(req.body, {
      name: string()
        .required("tên không được để trống!")
        .test("check-unique", "Email đã tồn tại!", async (value) => {
          const unique_user = await User.findAll({
            where: {
              name: value,
            },
          });
          return unique_user.length === 0;
        }),
      email: string()
        .required("Email không được để trống!")
        .email("Email không đúng định dạng!")
        .test("check-unique", "Tên đã tồn tại!", async (value) => {
          const unique_user = await User.findAll({
            where: {
              email: value,
            },
          });
          return unique_user.length === 0;
        }),
    });
    req.flash("body", req.body);
    if (body) {
      req.flash("success", "Cập nhật thông tin thành công!");
      const status = await User.update(body, {
        where: { id },
      });
      return res.redirect("/");
    }

    return res.redirect(`/account/edit/${id}`);
  },
  editPass: (req, res) => {
    const body = req.flash("body");
    const Erpassold = req.flash("Erpassold");
    const retypePass = req.flash("retypePass");
    res.render("account/password", { body, req, Erpassold, retypePass });
  },
  handleEditPass: async (req, res) => {
    const { id } = req.params;
    const token = req.cookies.token;
    const { passOld, passNew, retypePass } = req.body;
    const user = await User.findOne({
      where: { id },
    });
    if (!user && token) {
      return res.redirect("/login");
    }
    const body = await req.validate(req.body, {
      passOld: string().required("trường này không được để trống!"),
      passNew: string().required("trường này không được để trống!"),
      retypePass: string().required("trường này không được để trống!"),
    });
    req.flash("body", req.body);
    if (body) {
      if (!bcrypt.compareSync(passOld, user.password)) {
        req.flash("Erpassold", "Mật khẩu cũ không đúng");
        return res.redirect(`/account/pass/${id}`);
      }
      if (passNew !== retypePass) {
        req.flash("retypePass", "Mật khẩu không khớp");
        return res.redirect(`/account/pass/${id}`);
      }
      const hashPassword = await bcrypt.hash(passNew, 10);
      const status = await User.update(
        { password: hashPassword },
        {
          where: { id },
        }
      );
      req.flash("success", "Đổi mật khẩu thành công!");
      const device = await Device.findOne({
        where: { token: token },
        attributes: ["id"],
      });
      const idDevice = device.id;
      await Device.update(
        { status: false },
        { where: { user_id: id, id: { [Op.ne]: idDevice } } }
      );
      return res.redirect("/");
    }
    return res.redirect(`/account/pass/${id}`);
  },
  checkDevice: async (req, res) => {
    const { id } = req.params;
    const devices = await Device.findAll({
      where: { user_id: id },
    });
    res.render("account/checkDevice", { devices, moment });
  },
  handleCheckDevice: async (req, res) => {
    const { id } = req.params;
    const status = await Device.update({ status: false }, { where: { id } });
    return res.redirect("/");
  },
  mail: (req, res) => {
    console.log(req.errors);
    return res.render("account/mail");
  },
  handleSendmail: async (req, res) => {
    const { to, title, message } = req.body;
    const { id } = req.params;
    const body = await req.validate(req.body, {
      to: string().required("trường này không được để trống!"),
      title: string().required("trường này không được để trống!"),
      message: string().required("trường này không được để trống!"),
    });
    if (body) {
      const email = await Email.create({
        status: false,
        user_id: id,
        to: to,
        title: title,
        message: message,
        createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      });
      const infor = await sendMail(to, title, message);
      req.flash("body", req.body);
      req.flash(
        "success",
        "Gửi email thành công! muốn biết thêm thông tin vui lòng kiểm tra lịch sử!!!"
      );
      return res.redirect("/");

      // res.json(infor);
    }
    req.flash("body", req.body);
    res.redirect(`/account/send-mail/${id}`);
  },
  historyMail: async (req, res) => {
    const { id } = req.params;
    const emails = await Email.findAll({
      where: { user_id: id },
    });
    res.render("account/history",{emails,moment});
  },
};
