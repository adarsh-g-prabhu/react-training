const { gql } = require('apollo-server-express');

const userSchema = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    userRole: String!
    password: String!
    createdAt: String!
  }

  input RegisterInput {
    name: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    register(input: RegisterInput!): AuthPayload!
    login(input: LoginInput!): AuthPayload!
    deleteUser(id: ID!): ID!
  }
`;

module.exports = userSchema;
