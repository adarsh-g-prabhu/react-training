var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users',{title:'users'})
  console.log('sdhjfsdfskj')
  res.send('respond with a resource hbdjahdkj');
});

module.exports = router;
