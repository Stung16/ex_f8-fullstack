const moment = require("moment");
const model = require("../models/index");
const User = model.User;
const Phone = model.Phone;
const Post = model.Post;
const Roles = model.Roles;
const Course = model.Course;
const { Op } = require("sequelize");
const { use } = require("../routes");
module.exports = {
  index: async (req, res) => {
    const { page = 1 } = req.query;
    if (!+page) {
      page = 1;
    }
    const limit = 5;
    const offset = (page - 1) * limit;
    let { rows: users, count } = await User.findAndCountAll({
      order: [
        ["id", "DESC"],
        ["created_at", "ASC"],
      ],
      limit,
      offset,
    });
    const totalPage = Math.ceil(count / limit);
    /*
      -lấy đưuocj page hiện tại(req.query)
      -xác định limit(confing)
      -offset(page - 1) * limit
      -tính tổng sô bản ghi
      -tính tổng số trang: tổng số bản ghi / limit --> làm tròn lên
      -hiển thị số trang: sử dụng paginate của boostrap
      */
    // for(let i =0;i < users.length;i++){
    //   const phone = await users[i].getPhone()
    //   users[i].phone = phone?.phone
    // }

    res.render("users/index", { users, moment, page, totalPage });
  },
  add: async (req, res) => {
    res.render("users/add");
  },
  handleAdd: async (req, res) => {
    const body = req.body;
    body.status = +body.status === 1;
    const user = await User.create(body);
    return res.redirect("/users");
  },
  edit: async (req, res, next) => {
    const { id } = req.params;
    // const user = await User.findByPk(id);
    try {
      const user = await User.findOne({
        where: { id: id },
      });

      if (!user) {
        throw new Error("Người dùng không tồn tại");
      }
      // console.log(await user.getPhone());
      // const user2 = await model.Phone.getUser()
      res.render("users/edit", { user });
    } catch (e) {
      return next(e);
    }
  },
  handleEdit: async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    body.status = +body.status === 1;
    const status = await User.update(body, {
      where: { id },
    });
    // cập nhật bảng trung gian
    const courses = Array.from(body.courses);

    if (courses.length) {
      const courseList = await Promise.all(
        courses.map((courseId) => Course.findByPk(courseId))
      );
      const user = await User.findByPk(id);
      await user.setCourses(courseList);
    }

    return res.redirect("/users");
  },

  permission: async (req, res) => {
    const roles = await Roles.findAll({
      order: [["id", "desc"]],
    });
    res.render("users/permission", { roles });
  },
  handlePermisstion: (req, res) => {},

  delete: async (req, res) => {
    const { id } = req.params;
    const status = await User.destroy({
      where: { id },
      force: true,
    });
    return res.redirect(`/users`);
  },
};
