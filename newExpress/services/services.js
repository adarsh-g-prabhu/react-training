
const User=require('../models/model')

const viewUsers =async(res,req)=>
{
   const users = await User.find();
   if (!users)
    return res.json({message:'users not found'})
   else
    return users;
}

module.exports={
    viewUsers
}