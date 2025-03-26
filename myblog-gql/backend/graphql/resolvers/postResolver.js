const Post = require('../../models/postModel');
const fs = require("fs");
const path = require("path");

module.exports = {
  Query: {
    posts: async () => {
      try {
        return await Post.find();
      } catch (err) {
        throw new Error('Error fetching posts: ' + err.message);
      }
    },
    myPosts: async (_, { author }) => {
      try {
        return await Post.find({ author });
      } catch (err) {
        throw new Error('Error fetching author posts: ' + err.message);
      }
    },
    post: async (_, { id }) => {
      try {
        return await Post.findById(id);
      } catch (err) {
        throw new Error('Error fetching post: ' + err.message);
      }
    },
  },
  Mutation: {
    createPost: async (_, { input }) => {
      console.log("Received input:", {
        title: input.title,
        content: input.content,
        author: input.author,
        imagePresent: !!input.image,
        tags: input.tags,
      });
      try {
        let imageUrl = "";
  

        if (input.image) {
          const { createReadStream, filename } = await input.image;
          const stream = createReadStream();
          const uniqueFileName = Date.now() + "-" + filename;
          const filePath = path.join(__dirname, 'public/images', uniqueFileName);
          
          await new Promise((resolve, reject) => {
            const out = fs.createWriteStream(filePath);
            stream.pipe(out);
            out.on("finish", resolve);
            out.on("error", reject);
          });
        
          imageUrl = "/images/" + uniqueFileName;
        }

        const newPost = new Post({
          title: input.title,
          content: input.content,
          author: input.author,
          createdAt: new Date().toISOString(),
          imageUrl,
          tags: input.tags, 
        });

        return await newPost.save();
      } catch (err) {
        throw new Error('Error creating post: ' + err.message);
      }
    },

    updatePost: async (_, { postId, input }) => {
      try {
        return await Post.findByIdAndUpdate(postId, input, { new: true });
      } catch (err) {
        throw new Error('Error updating post: ' + err.message);
      }
    },

    deletePost: async (_, { postId }) => {
      try {
        await Post.findByIdAndDelete(postId);
        return postId;
      } catch (err) {
        throw new Error('Error deleting post: ' + err.message);
      }
    },
  },
};
