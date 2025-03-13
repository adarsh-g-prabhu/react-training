const Post=require('../models/postModel')
const mongoose= require('mongoose')
const getAllPosts = async () => {
    try {
      const posts = await Post.aggregate([
        {
          $lookup: {
            from: "users",      
            localField: "author", 
            foreignField: "_id",  
            as: "authorDetails"   
          }
        },
        {
          $unwind: "$authorDetails" 
        }
      ]);
  
      return posts.length > 0 ? posts : null;
    } catch (error) {
      throw new Error(error.message); 
    }
  };


const createPosts= async(postData)=>{
    try{
    
    const posted=await Post.create(postData)
    console.log('posted',posted)
    return(posted)
    }
    catch(err)
    {
        console.error(err)
    }
}

const fetchPostById=async(postId)=>{
    // const postId=req.params.id;
    // console.log('id:',postId)
    const posts = await Post.find({_id:postId});
    if (!posts)
     return res.json({message:'No posts Found'})
    else
     return posts;
 }

 const deletePostById=async(postId)=>{
 
    const posts = await Post.deleteOne({_id:postId});
    if (!posts)
     return res.json({message:'No posts Found'})
    else
     return posts;
 }

 const updatePostById =async(postId,postData)=>{
    console.log(postId, 'dataaa', postData)
    const posts = await Post.findOneAndUpdate({_id:postId},postData,{new:true});
    if (!posts)
     console.log('error in updatation')
    else
     return posts;
 }

 const postsByAuthor= async(authorId)=>{
    
    const posts=await Post.find({ author: new mongoose.Types.ObjectId(authorId) }).sort({ createdAt: -1 });
 
    if (!posts)
     return res.json({message:'No posts Found'})
    else
     return posts;
 }

 const searchPosts=async(query)=>{
    try{
        console.log('query is',query)
    const result=await Post.find({ title: { $regex: query, $options: "i" }});
    console.log(result);

    if (result)
    return result

    }
    catch(err)
    {
        console.log('error fetching',err)
    }
 }

module.exports={getAllPosts,createPosts,
    fetchPostById , deletePostById , 
    updatePostById , postsByAuthor , searchPosts}