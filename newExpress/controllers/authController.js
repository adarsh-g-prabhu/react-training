const User =require('../models/model')
const bcrypt= require('bcryptjs')
const services=require('../services/services')

const getLogin = (req, res) => {
    console.log('login')
    res.render('login', { message: null });
  };
  
  const postLogin = async (req, res) => {
    const { email, password } = req.body;
    const userData= await User.findOne({email: email});
    if(!userData)
    {
      return res.status(400).json({message:'invalid email'})
    }

    const passwordMatch= await bcrypt.compare(password,userData.password);
    if(passwordMatch)
    {
      if (userData.email='admin@gmail.com')
        return res.status(300).redirect('/adminDashboard')
      else
        return res.status(300).redirect('/')
    }
    else
    {
      res.status(400).json({message:'inavlid password'})
    }
  };

  const getRegister = (req, res) => {
 
    res.render('register');
  };

  /**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
  const postRegister = async (req, res) => {
    const userBody = req.body;
    if (await User.isEmailTaken(userBody.email)) {
      return res.json({message:'error happened'})
    }
     await User.create(userBody);
     return res.redirect('/');
  };

  const adminDashboard=(req,res)=>{
    res.render('adminDashboard')
  }
  const viewUsers = async(req,res)=>
  {
    const viewUsers= await services.viewUsers();
    if(!viewUsers)
      res.status(400).json({message:'error fetch'})
    else
      res.render('view-user',{userData:viewUsers})
  }

  


  module.exports = { getLogin, postLogin, postRegister , getRegister , adminDashboard, viewUsers};
  