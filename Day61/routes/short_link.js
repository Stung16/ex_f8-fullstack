var express = require("express");
var router = express.Router();
const short_linkController = require("../controllers/short_link.controller");

router.get("/", short_linkController.index);
router.post("/", short_linkController.handleShortLink);
router.get("/:id", short_linkController.handleOptionUrl)
router.post("/:id", short_linkController.handleCheckPass)
router.post("/delete/:id", short_linkController.delete)
module.exports = router;
