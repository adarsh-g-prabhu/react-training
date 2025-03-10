const User =require('../models/model')
const services=require('../services/services')

const getLogin = (req, res) => {
    console.log('login')
    // res.render('login', { message: null });
  };
  


    const postLogin = async (req, res) => {
      try{
    const { email, password } = req.body;
      console.log('poster')
    const loginResult = await services.loginAuthentication(email, password);

    if (!loginResult.success) {
      return res.status(400).json({ message: loginResult.message });
    }

    res.status(200).json({ token: loginResult.token, user: loginResult.user });
  }
  catch(err)
  {
    console.log('error at login')
  }
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
      try{
      const userBody = req.body;
      if (await User.isEmailTaken(userBody.email)) {
        return res.json({message:'error happened'})
      }
      return await User.create(userBody);
      // return res.redirect('/');
    }catch(err)
    {
      console.log('error- register',err)
    }

    };

  // const adminDashboard=(req,res)=>{
  //   res.render('adminDashboard')
  // }


  const viewUsers = async(req,res)=>
  {
    // console.log('hi')
    try{
    const viewUser= await services.viewUsers();
    console.log(viewUser);
    if(!viewUser)
      res.status(400).json({message:'error fetch'})
    else
      res.status(200).json(viewUser);
}
catch(err)
{
  console.log('error',err);
}
  }

  
  


  module.exports = { getLogin, postLogin, postRegister , getRegister , viewUsers};
  