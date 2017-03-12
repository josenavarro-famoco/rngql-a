import React, { PropTypes } from 'react';
import { Textfield, Button } from 'react-mdl'
import { Wrapper } from './wrappers';

const LoginForm = ({ onChangeField, onSubmit, values: { username, password } }) => {
  return (
    <Wrapper className="mdl-shadow--4dp">
      <Textfield
        key="username"
        value={username}
        onChange={({ target: { value } }) => onChangeField('username', value)}
        label="Username"
        floatingLabel
      />
      <Textfield
        key="password"
        value={password}
        onChange={({ target: { value } }) => onChangeField('password', value)}
        label="Password"
        floatingLabel
        type="password"
      />
      <Button
        raised
        colored
        ripple
        onClick={onSubmit}
      >
        Log In
      </Button>
    </Wrapper>
  );
};

LoginForm.propTypes = {
  onChangeField: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  values: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
}

export default LoginForm;
