const Comment=require('../models/commentModel');
const mongoose= require('mongoose');

const getComment = async (postId) => {
    try {
      console.log("post ID:", postId);
  
      const comments = await Comment.aggregate([
        { $match: { postId: new mongoose.Types.ObjectId(postId) } },
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "userDetails",
          },
          
        },
        {$unwind: "$userDetails" }
      ]);
  
      if (!comments.length) {
        return { message: "No comments found" };
      }
  
      return comments;
    } catch (err) {
      console.error("Error fetching comments:", err);
      throw err;
    }
  };
  

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
