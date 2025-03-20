const Post = require('../../models/postModel');

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
        return await Post.find({ author: author });
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
      try {
        const newPost = new Post({...input,
          createdAt: new Date().toISOString(),
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
