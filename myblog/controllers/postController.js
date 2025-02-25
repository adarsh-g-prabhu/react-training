const postService=require('../services/postService')

const getPostsFeed=async(req,res)=>{
    try{
        console.log('poost')
    const posts=await postService.getAllPosts();
    if(!posts)
        res.status(400).json('error fetching posts')
    else
        res.status(200).json(posts)
    }
    catch(err){
        console.log('error',err)
    }
}

const createPost=async(req,res)=>{
    try{
        const postData= req.body;
        console.log(postData);
       
        const postCreation= await postService.createPosts(postData);
        if (postCreation)
            return res.status(200).json({message:'created'});

    }
    catch(err)
    {
        console.log('error',err)
    }
}


const getPostById=async(req,res)=>
{
    try{
        console.log('post id',req.params.id)
        const postId=req.params.id;
    const posts=await postService.fetchPostById(postId);
    if(!posts)
        res.status(400).json('error fetching posts')
    else
        res.status(200).json(posts)
    }
    catch(err){
        console.log('error',err)
    }
}
module.exports={getPostsFeed,createPost, getPostById}