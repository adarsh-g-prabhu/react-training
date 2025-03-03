import commentService from '../services/commentService'

const addComment=async(req,res)=>{
    try{
        const postId=req.params.id;
        const {comment,userId}= req.body;
        console.log(comment);
       
        const postCreation= await commentService.createComment({postId,userId,comment});
        if (postCreation)
            return res.status(200).json({message:'created'});

    }
    catch(err)
    {
        console.log('error',err)
    }
}

const getComments=async(req,res)=>{
    try{
        const postId=req.params.id;

        const comments= await commentService.getComments({postId});
        if (comments)
            return res.status(200).json({message:'comments found'});
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