
const User=require('../models/model')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const viewUsers =async(req,res)=>
{
  console.log('hey')
   const users = await User.find();
   if (!users)
    return res.json({message:'users not found'})
   else
    return users;
}
const generateToken=  async (userEmail,userId,name,userRole)=>
{
   const token= jwt.sign(
    { userId: userId, email: userEmail,username:name,userRole:userRole}, 
    process.env.JWT_SECRET_KEY, 
    { expiresIn: "1h" } 
  );
  return token;

}


const loginAuthentication = async (userEmail, password) => {
   
    try {
      const userData = await User.findOne({ email: userEmail });
      console.log(userData)
      if (!userData) {
        return { success: false, message: "Invalid email" };
      }
  
      const passwordMatch = await bcrypt.compare(password, userData.password);
      if (!passwordMatch) {
        return { success: false, message: "Invalid password" };
      }
  
      const token = await generateToken(userData.email, userData._id, userData.name,userData.userRole);

      return { success: true, token, user: userData };
    } catch (error) {
      console.error(error)
      return { success: false, message: "Authentication error", error };
    }
  };

module.exports={
    viewUsers,
    generateToken,
    loginAuthentication
}