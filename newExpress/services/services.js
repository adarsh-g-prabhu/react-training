
const User=require('../models/model')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const viewUsers =async(req,res)=>
{
   const users = await User.find();
   if (!users)
    return res.json({message:'users not found'})
   else
    return users;
}
const generateToken= (userid,userEmail)=>
{
   const token= jwt.sign(
    { id: userid, email: userEmail}, 
    process.env.JWT_SECRET_KEY, 
    { expiresIn: "1h" } 
  );
  return token;

}


const loginAuthentication = async (userEmail, password) => {
   
    try {
      
      const userData = await User.findOne({ email: userEmail });
      if (!userData) {
        return { success: false, message: "Invalid email" };
      }
  
      const passwordMatch = await bcrypt.compare(password, userData.password);
      console.log('bycry',passwordMatch)
      if (!passwordMatch) {
        return { success: false, message: "Invalid password" };
      }
  
      const token = generateToken(userData.email, userData.password);
      localStorage.setItem("token", response.data.token);
      return { success: true, token, user: userData };
    } catch (error) {
      return { success: false, message: "Authentication error", error };
    }
  };

module.exports={
    viewUsers,
    generateToken,
    loginAuthentication
}