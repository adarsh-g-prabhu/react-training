const commentService =require('../services/commentService')

const addComment=async(req,res)=>{
    try{
        const postId=req.params.id;
        const {comment,userId}= req.body;
        console.log('the comment',comment,userId,postId);
       
        const commentCreation= await commentService.createComment(postId,userId,comment);
        if (commentCreation)
            return res.status(200).json({message:'created'});   
        else
            return res.status(400).json({message:'commenting failed'})

    }
    catch(err)
    {
        console.log('error',err)
    }
}

const getComments=async(req,res)=>{
    try{
        const postId=req.params.id;
        console.log('commentid',postId)
        const comments= await commentService.getComment(postId);
        console.log('comments is:',comments)
        if (comments)
            return res.status(200).json(comments);
        else
            return res.status(400).json({message:'comments not found'})
    }
    catch(err)
    {
        console.log('error',err)
    }
}

module.exports={
    addComment,getComments
}