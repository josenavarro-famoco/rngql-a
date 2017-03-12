import React, { Component } from 'react';
// import { gql, graphql } from 'react-apollo';

import { Wrapper } from './wrappers';
import LoginForm from '../../components/LoginForm';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        username: '',
        password: ''
      }
    }
  }

  onSubmit = () => {
    console.log('on submit')
    this.props.onLogin();
  }

  onChangeField = (key, value) => {
    const values = Object.assign({}, this.state.values);
    values[key] = value;
    this.setState({ values });
  }

  render() {
    return (
      <Wrapper>
        <LoginForm
          onChangeField={this.onChangeField}
          onSubmit={this.onSubmit}
          values={this.state.values}
        />
      </Wrapper>
    );
  }
}

export default LoginPage;
