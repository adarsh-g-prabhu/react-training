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


const createPost = async (req, res) => {
    try {
      let postData = req.body;
  
      if (req.file) {
        postData.imageUrl = `/images/${req.file.filename}`;
      }
  
      if (req.files && req.files.photos) {
        postData.photos = req.files.photos.map((file) => ({
          url: `/images/${file.filename}`,
        }));
      }
  
      const postCreation = await postService.createPosts(postData);
      if (postCreation) return res.status(201).json({ message: "Post created successfully", post: postCreation });
    } catch (err) {
      console.error("Error creating post:", err);
      res.status(500).json({ message: "Server error" });
    }
  };



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

const postDelete=async(req,res)=>{
    try{
        console.log('post id',req.params.id)
        const postId=req.params.id;
    const posts=await postService.deletePostById(postId);
    if(!posts)
        res.status(400).json({message:'error fetching posts'})
    else
        res.status(200).json({message:'delete success'})
    }
    catch(err){
        console.log('error',err)
    }
}

const postUpdate=async(req,res)=> {
    try{
        const postId=req.params.id;
        const postData= req.body;
        console.log('updateData',postData)
        console.log('postId',postId)
    const posts=await postService.updatePostById(postId,postData);
    if(!posts)
        return res.status(400).json({message:'error fetching posts'})
    else
        return res.status(200).json({message:'update success'})
    }
    catch(err){
        console.log('error',err)
    }
 }

const getPostByAuthor=async(req,res)=>
    {
        try{
            // console.log('post id',req.params.id)
            const authorId=req.params.id;
        const posts=await postService.postsByAuthor(authorId);
        if(!posts)
            return res.status(400).json('error fetching posts')
        else
            return res.status(200).json(posts)
        }
        catch(err){
            console.log('error',err)
        }
    }

    const searchPosts=async(req,res)=>{
        try {
            console.log('hello')
            const { query } = req.query;
            console.log('query inside',query)
            if (!query) {
                return res.status(400).json({ message: "Search query is required" });
            }
            const posts=await postService.searchPosts(query);
            res.json(posts);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }




module.exports={getPostsFeed,createPost, getPostById, postDelete ,postUpdate , getPostByAuthor ,searchPosts}