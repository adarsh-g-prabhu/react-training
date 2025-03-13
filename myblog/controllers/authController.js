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
    res.cookie("refreshToken", loginResult.refresh, {
      httpOnly: true
    });

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

  const refreshToken = async (req, res) => {
    try {
      const token = req.cookies.refreshToken;
      console.log('rf',token)
      if (!token) return res.status(401).json({ message: "No token provided" });
      const result = await services.refreshAccessToken(token);
      console.log('res',result);
      if (!result.success) return res.status(403).json({ message: result.message });
      res.status(200).json({ token: result.token });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
  

  
  


  module.exports = { getLogin, postLogin, postRegister , getRegister , viewUsers ,refreshToken};
  