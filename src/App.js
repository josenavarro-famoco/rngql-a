import React, { Component } from 'react';

import LoginPage from './containers/LoginPage'
import HomePage from './containers/HomePage';

import { AUTH_TOKEN } from './constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
  }

  componentDidMount() {
    const token = localStorage.getItem(AUTH_TOKEN);
    if (token) {
      this.setState({ loggedIn: true });
    }
  }

  onLogin = (loginData) => {
    const accessToken = loginData.get('access_token')
    localStorage.setItem(AUTH_TOKEN, accessToken);
    this.setState({ loggedIn: true });
  }

  onLogout = () => {
    this.setState({ loggedIn: false });
  }

  render() {
    return this.state.loggedIn ?
      <HomePage onLogout={this.onLogout} /> :
      <LoginPage onLogin={this.onLogin} />;
  }
}

export default App;
