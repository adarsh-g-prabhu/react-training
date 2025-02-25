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

