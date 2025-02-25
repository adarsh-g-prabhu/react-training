var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const mongoose=require('mongoose');
const jwt= require('jsonwebtoken');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const routes = require('./routes');
const cors= require('cors')
var app = express();

const connectDb= async()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URL);
  }
  catch(err)
  {
    console.error('mongo db connect error', err);
    process.exit(1);
  }
}

connectDb();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors({
  origin: "http://localhost:5173", // Change this to match your React frontend URL
  credentials:true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type, Authorization"],
}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/',routes);



app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
