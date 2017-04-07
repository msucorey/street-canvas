import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './RegisterForm.css';

export class RegisterForm extends Component {
  onRegister = () => {
    const usernameRef = this.refs.username;
    const passwordRef = this.refs.password;
    if (usernameRef.value && passwordRef.value) {
      this.props.register(usernameRef.value, passwordRef.value);
      passwordRef.value = '';
    }
  };

  render() {
    return (
      <div className={styles['form-content']}>
        <h2 className={styles['form-title']}>Sign Up</h2>
        <p className={styles['form-p']}>Existing users please <Link to="/login">log in here</Link></p>
        <input className={styles['form-field']} ref="username" placeholder="Email" />
        <input className={styles['form-field']} ref="password" type="password" placeholder="Password"  />
        <a className={styles['submit-button']} onClick={this.onRegister}>Submit</a>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterForm;
