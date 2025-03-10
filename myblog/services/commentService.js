const Comment=require('../models/commentModel');
const mongoose= require('mongoose')
const getComment=async(postId)=>{
    try{
        console.log('getting id',postId)
    const comments= await Comment.find({postId:postId});
    if(comments)
        return comments;
    }
    catch(err)
    {
        console.log('error fetch',err)
    }
}

const createComment=async(postId,userId,comment)=>{
    try{
        console.log('the comment in service',comment,userId,postId);

        const comments= await Comment.create({postId:postId,userId:userId,comment:comment});
        if(comments)
            return comments
        }
        
        catch(err)
        {
            console.log('error posting comments',err)
        }
}

module.exports={
    getComment, createComment
}
