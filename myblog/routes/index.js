const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth=require('../middlewares/auth')
const postController=require('../controllers/postController')
router.get('/', function(req, res) {
  res.render('index');
});


router.get('/login', authController.getLogin);

router.post('/login', authController.postLogin);

router.get('/register',authController.getRegister);
router.post('/register',authController.postRegister);

router.get('/adminDashboard',authController.adminDashboard);
router.get('/viewUsers',auth.verifyToken,authController.viewUsers);

router.get('/posts',auth.verifyToken,postController.getPostsFeed)
router.get('/posts/:id',auth.verifyToken,postController.getPostById)
router.post('/createPost',auth.verifyToken,postController.createPost)

module.exports = router;
