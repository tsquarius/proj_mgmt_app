import React from 'react';
import {Link} from 'react-router-dom';

const UserNav = ({currentUser, logout}) => {
  
  const navBar = currentUser ? (
    <React.Fragment>
      <p>
        Welcome, {currentUser.username}
      </p>
      <button className='btn-nav' onClick={logout}>Log out</button>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Link className='btn-nav' to='/login'>Log in</Link>
      <Link className='btn-nav' to='/signup'>Sign up</Link>
    </React.Fragment>
  )

  return (
    <nav className='nav-bar'>
      {navBar}
    </nav>
  )
};


export default UserNav;