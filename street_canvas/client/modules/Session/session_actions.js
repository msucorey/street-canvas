import { registerd } from '../../../server/controllers/authentication';
import * as APIUtil from './session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
import { hashHistory } from 'react-router';

export const signup = user => dispatch => {
  register(user)
    .error((err) => (dispatch(receiveErrors(err.responseJSON))))
    .then((token) => (console.log(`success!!! ${token}`)));
  // return dispatch(receiveCurrentUser(user);
};

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(xuser => dispatch(receiveCurrentUser(xuser)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => dispatch(receiveCurrentUser(null))).then(hashHistory.push('/'))
);

export const demo = () => dispatch => (
  APIUtil.demo().then(user => dispatch(receiveCurrentUser(user)))
  .then(hashHistory.push('/login'))
);

export const refreshUser = (id) => dispatch => (
  APIUtil.refresh(id).then(user => dispatch(receiveCurrentUser(user)))
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});
