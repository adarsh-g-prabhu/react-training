const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth=require('../middlewares/auth')
const postController=require('../controllers/postController');
const commentController=require('../controllers/commentController')
const upload=require('../middlewares/multer')
const validateUser=require('../middlewares/validateUser')

router.get('/', function(req, res) {
  res.render('index');
});


router.get('/login', authController.getLogin);

router.post('/login', authController.postLogin);

// router.get('/register',authController.getRegister);
router.post('/register',validateUser,authController.postRegister);

// router.get('/adminDashboard',authController.adminDashboard);

// router.use(auth.verifyToken);

router.get('/viewUsers',authController.viewUsers);

router.get('/posts',postController.getPostsFeed)
router.get('/posts/:id',postController.getPostById)
router.post('/createPost',upload.single('image'),postController.createPost);
router.get('/myposts/:id',postController.getPostByAuthor);
router.put('/posts/:id',postController.postUpdate)
router.delete('/posts/:id',postController.postDelete)
router.get('/search',postController.searchPosts)
router.get('/comment/:id',commentController.getComments)
router.post('/comment/:id',commentController.addComment)
module.exports = router;
