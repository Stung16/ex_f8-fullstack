const { Role, Permission, User } = require("../models/index");
const { isPermission } = require("../utils/permisstion");
module.exports = {
  index: async (req, res) => {
    const roles = await Role.findAll({
      order: [["id", "desc"]],
    });
    res.render("roles/index", { roles, req });
  },
  add: (req, res) => {
    res.render("roles/add", { req });
  },
  handleAdd: async (req, res) => {
    let { name, permissions } = req.body;
    if (!permissions) {
      permissions = [];
    }
    permissions = Array.isArray(permissions) ? permissions : [permissions];

    const roleRequie = await Role.findOne({ where: { name } });
    if (roleRequie) {
      req.flash("errRole", "Role đã tồn tại!");
      return res.redirect("/roles/add");
    }
    const role = await Role.create({ name });

    if (permissions.length) {
      const permissionIntance = await Promise.all(
        permissions.map(async (permission) => {
          const [permissionItem] = await Permission.findOrCreate({
            where: { value: permission.trim() },
            defaults: { value: permission.trim() },
          });
          return permissionItem;
        })
      );
      await role.addPermissions(permissionIntance);
    }
    return res.redirect("/roles");
  },
  edit: async (req, res) => {
    const { id } = req.params;
    const role = await Role.findOne({
      where: { id },
      include: {
        model: Permission,
        as: "permissions",
      },
    });
    res.render("roles/edit", { role, isPermission ,req});
  },
  handleEdit: async (req, res) => {
    const { id } = req.params;
    let { name, permissions } = req.body;
    if (!permissions) {
      permissions = [];
    }
    permissions = Array.isArray(permissions) ? permissions : [permissions];
    // const role = await Role.create({ name });
    await Role.update(
      { name },
      {
        where: { id },
      }
    );
    const role = await Role.findByPk(id);
    if (permissions.length && role) {
      const permissionIntance = await Promise.all(
        permissions.map(async (permission) => {
          const [permissionItem] = await Permission.findOrCreate({
            where: { value: permission.trim() },
            defaults: { value: permission.trim() },
          });
          return permissionItem;
        })
      );
      await role.setPermissions(permissionIntance);
    }
    return res.redirect("/roles");
  },

  delete: async (req, res) => {
    const { id } = req.params;
    const role = await Role.findOne({
      where: { id },
      include: {
        model: Permission,
        as: "permissions",
      },
    });
    const usersRole = await role.getUsers();
    if (usersRole.length) {
      for (const user of usersRole) {
        await user.removeRole(id);
      }
    }
    if (role) {
      await role.removePermissions(role.permissions);
      await role.destroy();
    }
    return res.redirect("/roles");
  },
};
