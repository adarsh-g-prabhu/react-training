const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth=require('../middlewares/auth')
router.get('/', function(req, res) {
  res.render('index');
});


router.get('/login', authController.getLogin);

router.post('/login', authController.postLogin);

router.get('/register',authController.getRegister);
router.post('/register',authController.postRegister);

router.get('/adminDashboard',authController.adminDashboard);
router.get('/viewUsers',auth.verifyToken,authController.viewUsers);


module.exports = router;
