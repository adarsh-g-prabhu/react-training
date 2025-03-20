import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_URI || "http://localhost:3001/graphql",  
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;
