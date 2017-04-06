import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import LoginForm from '../../components/LoginForm/LoginForm';

// Import Actions
import { loginRequest } from '../../UserActions';

class LoginPage extends Component {
  handleLogin = (username, password) => {
      this.props.dispatch(loginRequest({ username, password }));
  };

  render() {
    return (
      <LoginForm login={this.handleLogin} />
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return state;
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(LoginPage);
