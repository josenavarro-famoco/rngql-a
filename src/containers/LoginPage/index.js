import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import { fromJS } from 'immutable';
import { Wrapper } from './wrappers';
import LoginForm from '../../components/LoginForm';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        username: '',
        password: ''
      },
      error: []
    }
  }

  handleErrors = (error = '') => {
    if (error.message.indexOf('GraphQL error:') > -1) {
      this.setState({ error: [ error.message.replace('GraphQL error: ', '')]})
    } else {
      // TODO handle string error
    }
  }

  onSubmit = () => {
    this.props.mutate({ variables: this.state.values })
      .then(({ data: { logIn } }) => {
        console.log(logIn)
        this.props.onLogin(fromJS(logIn));
      })
      .catch(error => {
        this.handleErrors(error);
      });
  }

  onChangeField = (key, value) => {
    const values = Object.assign({}, this.state.values);
    values[key] = value;
    this.setState({ values });
  }

  render() {
    console.log(this.props.mutate)
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

const LoginMutation = gql`
  mutation Login($username: String!, $password: String!) {
    logIn(username: $username, password: $password) {
      access_token
      expires_in
      token_type
    }
  }
`;

const LoginPageWithMutation = graphql(LoginMutation)(LoginPage);
export default LoginPageWithMutation;
