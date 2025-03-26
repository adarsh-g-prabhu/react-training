
import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { setContext } from "@apollo/client/link/context";

// Middleware to add the Authorization header
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Upload link without headers
const uploadLink = createUploadLink({
  uri: import.meta.env.VITE_GRAPHQL_URI || "http://localhost:3001/graphql",
});

// Combine authLink and uploadLink
const client = new ApolloClient({
  link: from([authLink, uploadLink]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;
