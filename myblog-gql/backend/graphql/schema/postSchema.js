const { gql } = require('apollo-server-express');

const postSchema = gql`
  type Post {
    _id: ID!
    title: String!
    content: String!
    author: String!
    createdAt: String!
    imageUrl: String!
  }

  input PostInput {
    title: String!
    content: String!
    author: String!
    imageUrl: String!
  }

  type Query {
    posts: [Post!]!
    myPosts(author: String!): [Post!]!
    post(id: ID!): Post
  }

  type Mutation {
    createPost(input: PostInput!): Post!
    updatePost(postId: ID!, input: PostInput!): Post!
    deletePost(postId: ID!): ID!
  }
`;

module.exports = postSchema; 
