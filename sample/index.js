const express= require('express');
const route  = require('./routes');
const cors=require('cors')
const app=express();
require('dotenv').config();
const mongoConnect=require('./utils/mongoConnect');

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

mongoConnect();
app.use(express.json());
app.use('/',route)

app.listen(process.env.SERVER_PORT,()=>{
    console.log('app is listening in ',`port ${process.env.SERVER_PORT}`)
});