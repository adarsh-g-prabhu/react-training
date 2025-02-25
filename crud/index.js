const express= require('express');
const app=express();
const router=require('./router');
const mongoose=require('mongoose')
const path=require('node:path')
const MONGODB_URL= 'mongodb://127.0.0.1:27017/crudSample'
const connectDb= async()=>{
    try{
      await mongoose.connect(MONGODB_URL);
    }
    catch(err)
    {
      console.error('mongo db connect error', err);
      process.exit(1);
    }
  }
  
  connectDb();
  app.use(express.json())
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
// app.get('/',(req,res)=>{
//     res.send('<h1>hello world</h1>');
//     res.status(200).json()
// })

app.use('/',router);

app.listen(3000,()=>{
    console.log('http://localhost:3000');
})

