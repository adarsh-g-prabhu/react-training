const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { typeDefs, resolvers } = require('./index');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { applyMiddleware } = require('graphql-middleware');
const { permissions } = require('../guards/index'); 

const createApolloServer = async () => {

 
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  
  const schemaWithMiddleware = applyMiddleware(schema, permissions);

  const server = new ApolloServer({
    schema: schemaWithMiddleware,
    plugins: [
      require('@apollo/server-plugin-landing-page-graphql-playground')
        .ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });

  await server.start();
  return server;
};

module.exports = { createApolloServer, expressMiddleware };
