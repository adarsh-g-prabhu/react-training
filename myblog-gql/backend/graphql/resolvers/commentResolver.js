const Comment = require("../../models/commentModel");
const mongoose = require("mongoose");

module.exports = {
  Query: {
    comments: async (_, { postId }) => {
      try {
        if (!mongoose.Types.ObjectId.isValid(postId)) {
          throw new Error("Invalid postId format");
        }

        const comments = await Comment.find({ postId })
          .populate("userId", "name") 
          .exec();

        console.log("Fetched Comments:", comments);

        return comments.map(comment => ({
          ...comment.toObject(), 
          userDetails: comment.userId
            ? { _id: comment.userId._id, name: comment.userId.name }
            : { _id: "unknown", name: "Unknown User" }, 
          createdAt: new Date(comment.createdAt).toISOString(),
        }));
      } catch (err) {
        throw new Error("Error fetching comments: " + err.message);
      }
    },
  },

  Mutation: {
    addComment: async (_, { input }) => {
      try {
        const newComment = new Comment({
          ...input,
          createdAt: new Date().toISOString(),
        });

        await newComment.save();

        // Populate userId with `name`
        const populatedComment = await Comment.findById(newComment._id)
          .populate("userId", "name")
          .exec();

        if (!populatedComment.userId) {
          console.error("❌ User not found for comment:", newComment._id);
          populatedComment.userId = { _id: "unknown", name: "Unknown User" };
        }

        return {
          ...populatedComment.toObject(),
          userDetails: populatedComment.userId, // Return populated user details
        };
      } catch (err) {
        throw new Error("Error adding comment: " + err.message);
      }
    },
  },
};
