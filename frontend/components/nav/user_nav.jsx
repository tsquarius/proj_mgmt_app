import React from 'react';
import {Link} from 'react-router-dom';

const UserNav = ({currentUser, logout}) => {
  
  const navBar = currentUser ? (
    <ul>
      <li key="welcome-user">
        Welcome, {currentUser.username}
      </li>
      <li key="logout">
        <a className='button' onClick={logout}>Log out</a>
      </li>
    </ul>
  ) : (
    <React.Fragment>
      <ul>
        <li key="login">
          <Link className='button' to='/login'>Log in</Link>
        </li>
        <li key="logout">
          <Link className='button' to='/signup'>Sign up</Link>
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