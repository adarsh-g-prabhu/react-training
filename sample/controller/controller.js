const service = require('../services/services');

const register=async(req,res)=>{
    try{
    const {name,email,password}=req.body;
    const response= await service.register({name,email,password}); 
    if (response)
    return res.status(200).json({message:'registeration successful'});
    else
    return res.status(200).json({message:'registeration failed'})
    }
    catch(error){
        console.log('error',error);
    }
}
const login=async(req,res)=>{
    try{
    const {email,password}=req.body;
    const response=await service.login({email,password});
    // console.log("resp",response)
    if (response)
        return res.status(200).json({message:'login successful',data:response});
        else
        return res.status(400).json({message:'login failed'})
}
catch(error){
    console.log('error',error);
}
}



module.exports={register,login}