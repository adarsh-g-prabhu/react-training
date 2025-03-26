const User=require('../models/schema');
const hashPassword = require('../utils/hashPassword');
const bcrypt=require('bcryptjs')

const register=async(userData)=>{
    try{
    const hashedPassword= await hashPassword(userData.password)
    const result=await User.create({name:userData.name,email:userData.email,password:hashedPassword});
    return result;
    }
    catch(error){
        console.log('error',error);
    }
}

const login=async(userData)=>{
    // const hashedPassword= hashPassword(userData.password);
    try{
        console.log('user',userData)
    const result=await User.findOne({email:userData.email})
    if(!result)
        return false;
    else
    {
    const isPass= bcrypt.compare(userData.password,result.password)
    if (isPass){
        return result;
    }
    
   
    }
}
catch(err)
{
    console.log('error',err)
}

}
module.exports={register , login}