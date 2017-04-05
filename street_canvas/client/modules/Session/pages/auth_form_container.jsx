import { connect } from 'react-redux';
import { login, logout, signup } from '../session_actions';
import AuthForm from './auth_form';

const mapStateToProps = state => {
  const currentErrors = state.session.errors || [];
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: currentErrors,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    logout: () => dispatch(logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
