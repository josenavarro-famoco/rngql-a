import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import { AUTH_TOKEN } from './constants';
import App from './App';
import './index.css';

const networkInterface = createNetworkInterface({ uri: 'http://10.111.4.12:8080/graphql' });
networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    const token = localStorage.getItem(AUTH_TOKEN);
    console.log('token', token)
    if (token) {
      console.log('we have auth')
      // Get the authentication token from local storage if it exists
      req.options.headers.Authorization = `Bearer ${token}`;
    }
    next();
  }
}]);

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
