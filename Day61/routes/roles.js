var express = require("express");
var router = express.Router();
const rolesController = require("../controllers/roles.controller");

router.get("/", rolesController.index);
router.get("/add", rolesController.add);
router.post("/add", rolesController.handleAdd);
router.get("/edit/:id", rolesController.edit);
router.post("/edit/:id", rolesController.handleEdit);
router.post("/delete/:id", rolesController.handleDelete)

module.exports = router;
