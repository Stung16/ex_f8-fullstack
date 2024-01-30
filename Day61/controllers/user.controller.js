const moment = require("moment");
const model = require("../models/index");
const User = model.User;
const Phone = model.Phone;
const Post = model.Post;
const Role = model.Role;
const Course = model.Course;
const { Op } = require("sequelize");
const { use } = require("../routes");
module.exports = {
  index: async (req, res) => {
    const { status, keyword } = req.query;
    const filters = {};
    if (status === "active" || status === "inactive") {
      filters.status = status === "active";
    }
    if (keyword) {
      filters[Op.or] = [
        {
          name: {
            [Op.iLike]: `%${keyword}%`,
          },
        },
        {
          email: {
            [Op.iLike]: `%${keyword}%`,
          },
        },
      ];
    }
    let { page = 1 } = req.query;
    if (!+page) {
      page = 1;
    }
    const limit = 3;
    const offset = (page - 1) * limit;
    let { rows: users, count } = await User.findAndCountAll({
      order: [
        ["id", "DESC"],
        ["created_at", "ASC"],
      ],
      where: filters,
      limit,
      offset,
      // include: {
      //   model: Phone,
      //   as: "phone",
      // },
    });
    const totalPage = Math.ceil(count / limit);

    /*
    - Lấy được page hiện tại: req.query
    - Xác định limit: config
    - Tính offset: (page - 1) * limit
    - Tính tổng số bản ghi
    - Tính tổng số trang: Tổng số bản ghi / limit --> Làm tròn lên
    - Hiển thị số trang: Sử dụng paginate của bootstrap
    */
    // for (let user of users) {
    //   const phone = await user.getPhone();
    //   user.dienthoai = phone?.phone;
    // }

    res.render("users/index", { users, moment, page, totalPage, req });
  },
  add: async (req, res) => {
    res.render("users/add", { req });
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
      res.render("users/edit", { user, req });
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
    const { id } = req.params;
    const roles = await Role.findAll({
      order: [["id", "desc"]],
    });
    const user = await User.findByPk(id, {
      include: {
        model: Role,
        as: "roles",
      },
    });
    res.render("users/permission", { roles, user, id, req });
  },

  handlePermission: async (req, res) => {
    // let { roles } = req.body;
    // const { id } = req.params;
    // const user = await User.findByPk(id);
    // roles = Array.isArray(roles) ? roles : [roles];
    // if (roles.length && user) {
    //   const rolesintern = await Promise.all(
    //     roles.map((roleId) => Roles.findByPk(roleId))
    //   );
    //   await User.setRoless(rolesintern);
    // }
    // return res.redirect("/users/permission/" + id);

    let { roles } = req.body;
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!roles) {
      roles = [];
    }
    roles = Array.isArray(roles) ? roles : [roles];

    if (roles.length) {
      const rolesIntern = await Promise.all(
        roles.map((roleId) => Role.findByPk(roleId))
      );
      await user.setRoles(rolesIntern);
      res.redirect("/users/permission/" + id);
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    const status = await User.destroy({
      where: { id },
      force: true,
    });
    return res.redirect(`/users`);
  },
};
