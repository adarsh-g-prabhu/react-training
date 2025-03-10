const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    genre: String
    publishedYear: Int
  }

  type Query {
    books: [Book!]!
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!, genre: String, publishedYear: Int): Book!
    updateBook(id: ID!, title: String, author: String, genre: String, publishedYear: Int): Book
    deleteBook(id: ID!): Boolean
  }
`;

module.exports = typeDefs;