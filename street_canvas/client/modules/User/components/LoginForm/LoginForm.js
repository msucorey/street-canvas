import React, { Component, PropTypes } from 'react';
import styles from './LoginForm.css';
import { Link } from 'react-router';

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
      <div className={styles['form-content']} >
        <h2 className={styles['form-title']}>Log In</h2>
        <p className={styles['form-p']}>New users please <Link to="/register">sign up here</Link></p>
        <input className={styles['form-field']} ref="username" placeholder="Email" />
        <input ref="password" className={styles['form-field']} placeholder="Password" type="password" />
        <a className={styles['submit-button']} onClick={this.onLogin}>submit</a>
      </div>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginForm;
