var express = require('express');
const accountController = require('../controllers/accountController');
var router = express.Router();

/* GET users listing. */
router.get("/edit", accountController.edit);


module.exports = router;
