import { connect } from 'react-redux';
import AuthForm from './auth_form';

const mapStateToProps = ({ session }) => {
  let currentErrors = session.errors || [];
  return {
  loggedIn: Boolean(session.currentUser),
  errors: currentErrors,
  currentUser: session.currentUser
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
