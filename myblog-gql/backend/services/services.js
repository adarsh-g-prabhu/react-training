const User=require('../models/model')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const {generateAccessToken, generateRefreshToken}=require('../utils/jwt')

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

      const accessToken = generateAccessToken(userData);
      const refreshToken = generateRefreshToken(userData);
  
      // const token = await generateToken(userData.email, userData._id, userData.name,userData.userRole);

      return { success: true, token: accessToken,refresh: refreshToken, user: userData };
    } catch (error) {
      console.error(error)
      return { success: false, message: "Authentication error", error };
    }
  };

  const refreshAccessToken = async (refreshToken) => {
    try {
      const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
      const userData = {
        _id: payload.userId,
        email: payload.email,
        username: payload.username,
        userRole: payload.userRole
      };
      const newAccessToken = generateAccessToken(userData);
      return { success: true, token: newAccessToken };
    } catch (error) {
      return { success: false, message: "Invalid token" };
    }
  };

module.exports={
    viewUsers,
    generateToken,
    loginAuthentication,
    refreshAccessToken
}