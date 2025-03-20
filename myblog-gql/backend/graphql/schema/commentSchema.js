const { gql } = require('apollo-server-express');

const commentSchema = gql`

type User {
  _id: ID!
  name: String!
}
  type Comment {
    _id: ID!
    postId: ID!
    userId: User!
    comment: String!
    createdAt: String!
  }


  input CommentInput {
    postId: ID!
    userId: ID!
    comment: String!
  }

  type Query {
    comments(postId: ID!): [Comment!]!
  }

  type Mutation {
    addComment(input: CommentInput!): Comment!
  }
`;

module.exports = commentSchema;
