const Comment = require('../../models/commentModel');


module.exports = {
  Query: {

    comment: async (_, { postID }) => {
      try {
        return await Comment.find({ postID: postID });
      } catch (err) {
        throw new Error('Error fetching author posts: ' + err.message);
      }
    },
  },

    Mutation: {

        createComment: async (_, { input }) => {
        try {
            const newComment = new Comment({...input,
            createdAt: new Date().toISOString(),
            }); 
            return await newComment.save();
        } catch (err) {
            throw new Error('Error creating comment: ' + err.message);
        }
        },
    }
}