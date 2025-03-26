const { gql } = require('apollo-server-express');

const postSchema = gql`
  scalar Upload

type Post {
  _id: ID!
  title: String!
  content: String!
  author: ID!
  createdAt: String!
  imageUrl: String
  tags: [String!]
}

input PostInput {
  title: String!
  content: String!
  author: ID!
  image: Upload
  tags: [String!]
}

type Query {
  posts: [Post!]!
  myPosts(author: ID!): [Post!]!
  post(id: ID!): Post
}

type Mutation {
  createPost(input: PostInput!): Post!
  updatePost(postId: ID!, input: PostInput!): Post!
  deletePost(postId: ID!): ID!
}
`;

module.exports = postSchema;
