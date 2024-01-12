var express = require('express');
const authController = require('../controllers/authController');
var router = express.Router();

/* GET home page. */
router.get('/',authController.index);
router.get('/login',authController.login);
router.post('/login',authController.handleLogin);
router.get('/register',authController.register);
router.post('/register',authController.handleRegister);
router.get("/logout", authController.logout);

module.exports = router;
