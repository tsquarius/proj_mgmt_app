import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

//redirect to root if already logged in
const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props => !loggedIn ?
      <Component {...props} /> : <Redirect to="/" />
    }
  />
);

//redirect to login page if not logged in
const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props => loggedIn ?
      <Component {...props} /> : <Redirect to="/signup" />
    }
  />
);

//return loggedIn: true if there is a session id present
const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.userId) };
}

export const AuthRoute = withRouter(
  connect(mapStateToProps)(Auth)
);

export const ProtectedRoute = withRouter(
  connect(mapStateToProps)(Protected)
);