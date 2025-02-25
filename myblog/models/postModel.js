const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      // type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    //   required: true,
    },
    imageUrl: { type: String },
    photos: [
      {
        url: { type: String, required: true },
      },
    ],
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
