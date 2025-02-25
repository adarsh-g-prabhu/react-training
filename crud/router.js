
const express=require('express');
const router=express.Router();
const User=require('./model')

router.get('/user',async(req,res)=>{
    const response=await User.find();
    if (!response)
        return res.status(400).json({message:'error user'})

    return res.status(200).json(response)
})
router.get('/adduser',(req,res)=>{
    res.render('user');
})
router.post('/adduser',async(req,res)=>{
    try{const data=req.body
    console.log('dat',data)
    const response=await User.create(data);
    if (!response)
        return res.status(400).json({message:'error user'})

    return res.status(200).json({message:'done '})}
    catch{
        console.log('error')
    }
})



module.exports= router