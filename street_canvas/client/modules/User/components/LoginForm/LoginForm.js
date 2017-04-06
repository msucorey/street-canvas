import React, { Component, PropTypes } from 'react';

export class LoginForm extends Component {
  onLogin = () => {
    const usernameRef = this.refs.username;
    const passwordRef = this.refs.password;
    if (usernameRef.value && passwordRef.value) {
      this.props.login(usernameRef.value, passwordRef.value);
      passwordRef.value = '';
    }
  };

  render() {
    return (
      <div >
        <h2>username</h2>
        <input ref="username" />
        <h2>password</h2>
        <input ref="password" type="password" />
        <a onClick={this.onLogin}>submit</a>
      </div>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginForm;
