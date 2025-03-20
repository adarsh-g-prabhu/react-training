const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { typeDefs, resolvers } = require('./index');

const createApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      require('@apollo/server-plugin-landing-page-graphql-playground')
        .ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });

  await server.start();
  return server;
};

module.exports = { createApolloServer, expressMiddleware };
