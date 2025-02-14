const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    console.log(req.files);
    console.log(req.body);
})

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  console.log(req.files);
  console.log(req.body);
})

const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {
   console.log( req.files['avatar'][0])
  
})

app.listen(3000);