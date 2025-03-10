const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolver');

async function startServer() {
 
  const app = express();
  
  
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });


  await server.start();
  
 
  server.applyMiddleware({ app });
  
  // Start Express server
  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();