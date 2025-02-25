const Post=require('../models/postModel')

const getAllPosts=async(req,res)=>{

   const posts = await Post.find();
   if (!posts)
    return res.json({message:'No posts Found'})
   else
    return posts;
}

const createPosts= async(postData)=>{
    try{
    // const author=req.body.email;
    // postData.author=author;
    console.log(postData)
    const posted=await Post.create(postData)
    console.log('posted')
    // posted?res.status(200).json({message:'successfully created Post'}):
    // res.status(400).json({message:'error creating post'})
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
module.exports={getAllPosts,createPosts,fetchPostById}