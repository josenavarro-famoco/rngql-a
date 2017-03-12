import React, { Component } from 'react';

import LoginPage from './containers/LoginPage'
import HomePage from './containers/HomePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
    }
  }

  onLogin = () => {
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
