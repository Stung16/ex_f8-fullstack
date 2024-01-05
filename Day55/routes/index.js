var express = require("express");
var router = express.Router();
const homeControlller = require("../controllers/home.controlller");

/* GET home page. */
router.get("/", homeControlller.index);
router.get("/add", homeControlller.add);
router.post("/add", homeControlller.handleAdd);
router.get("/edit/:id", homeControlller.handleEdit);
router.post("/edit/:id", homeControlller.handleUpdate);
router.get("/delete/:id", homeControlller.handleDelete);

module.exports = router;
