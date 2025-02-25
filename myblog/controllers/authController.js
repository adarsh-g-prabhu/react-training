const User =require('../models/model')
const services=require('../services/services')

const getLogin = (req, res) => {
    console.log('login')
    // res.render('login', { message: null });
  };
  


    const postLogin = async (req, res) => {
    const { email, password } = req.body;
      console.log('poster')
    const loginResult = await services.loginAuthentication(email, password);

    if (!loginResult.success) {
      return res.status(400).json({ message: loginResult.message });
    }

    res.status(200).json({ token: loginResult.token, user: loginResult.user });
    };



    const getRegister = (req, res) => {
      console.log('register')
    //   res.render('register');
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
    console.log('hi')
    const viewUser= await services.viewUsers();
    console.log(viewUser);
    if(!viewUser)
      res.status(400).json({message:'error fetch'})
    else
      res.status(200).json(viewUser);
  }

  
  


  module.exports = { getLogin, postLogin, postRegister , getRegister , adminDashboard, viewUsers};
  