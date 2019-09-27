import * as Util from '../util/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

//regular actions
export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

//thunk actions
export const login = user => dispatch => Util.postSession(user)
  .then(user=> dispatch(receiveCurrentUser(user)))
  .fail(err => dispatch(receiveErrors(err)));

export const logout = () => dispatch => Util.deleteSession()
  .then(() => dispatch(logoutCurrentUser()))
  .fail(err => dispatch(receiveErrors(err)));

export const signup = user => dispatch => Util.postUser(user)
  .then(user => dispatch(receiveCurrentUser(user)))
  .fail(err => dispatch(receiveErrors(err)));


window.login = login;
window.logout = logout;