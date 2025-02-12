
const express=require('express');
const app=express();
const debug = require('debug')('app'); 

app.use((req, res, next) => {
  debug(`Request received at ${req.url}`);
  next();
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});