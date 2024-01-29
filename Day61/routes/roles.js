var express = require("express");
var router = express.Router();
const rolesController = require("../controllers/role.controller");
const permission = require("../middlewares/permission.middleware");


router.get("/", permission("roles.read"), rolesController.index);
router.get("/add", permission("roles.create"), rolesController.add);
router.post("/add", permission("roles.create"), rolesController.handleAdd);
router.get("/edit/:id", permission("roles.update"), rolesController.edit);  
router.post("/edit/:id", permission("roles.update"), rolesController.handleEdit);
router.post("/delete/:id", permission("roles.delete"), rolesController.delete)

module.exports = router;