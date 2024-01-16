var express = require('express');
const accountController = require('../controllers/accountController');

var router = express.Router();

/* GET home page. */
router.get('/edit/:id',accountController.edit);
router.post('/edit/:id',accountController.handleEdit);
router.get('/pass/:id',accountController.editPass);
router.post('/pass/:id',accountController.handleEditPass);
router.get('/checkDevice/:id',accountController.checkDevice);
router.post('/checkDevice/:id',accountController.handleCheckDevice);



module.exports = router;
