var express = require("express");
var router = express.Router();
const userController = require("../controllers/user.controller");
const permisstion = require("../middlewares/permission.middleware");

/* GET users listing. */
router.get("/", permisstion("users.read"), userController.index);
router.get("/add", permisstion("users.create"), userController.add);
router.post("/add", permisstion("users.create"), userController.handleAdd);
router.get("/edit/:id", permisstion("users.update"), userController.edit);
router.post("/edit/:id", permisstion("users.update"), userController.handleEdit);
router.get("/permission/:id", permisstion("users.update"), userController.permission); //users.update
router.post("/permission/:id", permisstion("users.update"), userController.handlePermission);
router.post("/delete/:id", permisstion("users.delete"), userController.delete);

module.exports = router;
