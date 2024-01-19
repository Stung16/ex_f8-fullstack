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
router.get('/send-mail/:id',accountController.mail);
router.post('/send-mail/:id',accountController.handleSendmail);
router.get('/history-mail/:id',accountController.historyMail);


module.exports = router;
