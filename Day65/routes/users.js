var express = require("express");
const userController = require("../controller/user.controller");
var router = express.Router();

/* GET users listing. */
router.get("/", userController.getListUser);
router.get("/:id", userController.getDetailUser);


module.exports = router;
