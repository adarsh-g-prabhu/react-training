const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");


const users = [
  { id: "1", name: "Adarsh", email: "adarsh@example.com" },
  { id: "2", name: "John Doe", email: "john@example.com" },
  { id: "3", name: "Jane Smith", email: "jane@example.com" }
];

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User]       # Get all users
    user(id: ID!): User # Get user by ID
  }
`;


const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find(user => user.id === id),
  },
};


async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("🚀 Server ready at http://localhost:4000/graphql");
  });
}

startServer();
