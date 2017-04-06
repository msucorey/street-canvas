import React, { Component, PropTypes } from 'react';

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
        <h2 className={styles['form-title']}>Title</h2>
        <input className={styles['form-field']} ref="username" />
        <input className={styles['form-field']} ref="password" type="password" />
        <a className={styles['submit-button']} onClick={this.onRegister}>Submit</a>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterForm;
