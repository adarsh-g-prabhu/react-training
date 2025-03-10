// app/api/graphql/route.ts
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';

// In-memory data store for demonstration
let users = [
  { _id: "1", name: "Alice", age: 30, place: "Wonderland" },
  { _id: "2", name: "Bob", age: 25, place: "Builderland" }
];

// Define your GraphQL schema using SDL
const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    age: Int!
    place: String!
  }

  type Query {
    getUsers: [User!]!
  }

  type Mutation {
    addUser(name: String!, age: Int!, place: String!): User
    deleteUser(_id: ID!): Boolean
  }
`;

// Define resolvers to implement the schema fields
const resolvers = {
  Query: {
    getUsers: () => users,
  },
  Mutation: {
    addUser: (_: any, args: { name: string; age: number; place: string }) => {
      const newUser = { _id: String(users.length + 1), ...args };
      users.push(newUser);
      return newUser;
    },
    deleteUser: (_: any, args: { _id: string }) => {
      const initialLength = users.length;
      users = users.filter((user) => user._id !== args._id);
      return users.length < initialLength;
    },
  },
};

// Create an Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Integrate Apollo Server with Next.js
export default startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({ req, res }),
});

// Disable Next.js body parsing since Apollo Server handles it
export const config = {
  api: {
    bodyParser: false,
  },
};
