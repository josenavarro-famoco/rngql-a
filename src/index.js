import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import App from './App';
import './index.css';

const networkInterface = createNetworkInterface({ uri: 'http://localhost:8080/graphql' });
const client = new ApolloClient({
  networkInterface,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
