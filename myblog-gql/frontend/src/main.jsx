import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from 'react-redux'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import store from './redux/store.js'
import App from './App.jsx'

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', 
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>

  <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    
  </Provider>
  </StrictMode>,
)
