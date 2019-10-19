import React from 'react';
import {Link} from 'react-router-dom';

const UserNav = (props) => {
  const { currentUser, logout } = props;

  const navBar = currentUser ? (
    <ul>
      <li key="welcome-user">
        Welcome, {currentUser.username}
      </li>
      <li key="logout">
        <a className='button-nav' onClick={logout}>Log out</a>
      </li>
    </ul>
  ) : (
    <React.Fragment>
      <ul>
        <li key="login">
          <Link className='button-nav' to='/login'>Log in</Link>
        </li>
        <li key="logout">
          <Link className='button-nav' to='/signup'>Sign up</Link>
        </li>
      </ul>
    </React.Fragment>
  )

  return (
    <nav className='main-nav'>
      {navBar}
    </nav>
  )
};


export default UserNav;