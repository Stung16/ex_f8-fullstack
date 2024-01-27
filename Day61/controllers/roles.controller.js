const model = require("../models/index");
const User = model.User;
const Roles = model.Roles;
const Permissions = model.Permissions;

module.exports = {
  index: async (req, res) => {
    const roles = await Roles.findAll({
      order: [["id", "desc"]],
    });
    const success = req.flash("success");
    res.render("roles/index", { roles, success });
  },
  add: (req, res) => {
    const errRole = req.flash("errRole");
    res.render("roles/add", { errRole });
  },
  handleAdd: async (req, res) => {
    const { name, permissions } = req.body;
    const role = await Roles.findOne({ where: { name } });
    if (role) {
      req.flash("errRole", "Role đã tồn tại!");
      return res.redirect("/roles/add");
    }
    const newRole = await Roles.create({ name });
    if (!permissions) {
      req.flash("success", "Thêm role thành công!");
      return res.redirect("/roles");
    }

    if (!Array.isArray(permissions)) {
      permissions = [permissions];
    }
    for (const permission of permissions) {
      let permissionValue = await Permissions.findOne({
        where: { value: permission },
      });
      if (!permissionValue) {
        permissionValue = await Permissions.create({
          value: permission,
        });
      }
      await newRole.addPermission(permissionValue);
      req.flash("success", "thêm Role thành công!!!");
    }
    return res.redirect("/roles");
  },
  edit: async (req, res) => {
    const success = req.flash("success");
    const { id } = req.params;
    const role = await Roles.findByPk(id, {
      include: [
        {
          model: Permissions,
          as: "permissions",
        },
      ],
    });
    const roles = await Roles.findAll({ order: ["name"] });
    // console.log(roles);
    res.render("roles/edit", {
      permissions: role.permissions,
      name: role.name,
      roles,
      id,
      success,
    });
  },
  handleEdit: async (req, res) => {
    const { name, permissions } = req.body;
    const { id } = req.params;
    const role = await Roles.findByPk(id);
    if (!role) {
      console.log(`Role with id ${id} not found.`);
      return;
    }
    if (!permissions) {
      await role.setPermissions([]);
      req.flash("success", "Cập nhật role thành công!");
      return res.redirect("/roles");
    }
    if (!Array.isArray(permissions)) {
      permissions = [permissions];
    }
    await Roles.update(
      { name },
      {
        where: { id },
      }
    );
    const permissionList = await Promise.all(
      permissions.map((item) => Permissions.findOne({ where: { value: item } }))
    );
    await role.setPermissions(permissionList);
    req.flash("success", "Cập nhật role thành công!");
    return res.redirect(`/roles/edit/${id}`);
  },
  handleDelete: async(req,res) => {
    const { id } = req.params
    const role = await Roles.findByPk(id)
    await role.setPermissions([])
    const del = await role.destroy()
    req.flash("success", "Xóa role thành công!")
    return res.redirect("/roles")
  }
};
