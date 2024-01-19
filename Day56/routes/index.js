var express = require("express");
const authController = require("../controllers/authController");
var router = express.Router();
const sendMail = require("../utils/mail");

/* GET home page. */
router.get("/", authController.index);
router.get("/login", authController.login);
router.post("/login", authController.handleLogin);
router.get("/register", authController.register);
router.post("/register", authController.handleRegister);
router.get("/logout", authController.logout);
router.get("/   ", async (req, res) => {
  const infor = await sendMail("nguyenntrung029@gmail.com", "hello f8", "hi");
  res.json(infor)
});

module.exports = router;
