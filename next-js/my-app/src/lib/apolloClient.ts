// lib/apolloClient.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // Point to the GraphQL API endpoint we just created.
  uri: '/api/graphql',
  cache: new InMemoryCache(),
});

export default client;
