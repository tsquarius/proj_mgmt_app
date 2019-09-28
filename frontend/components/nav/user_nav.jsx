import React from 'react';
import {Link} from 'react-router-dom';

const UserNav = ({currentUser, logout}) => {
  
  const navBar = currentUser ? (
    <nav>
      <p>
        Welcome, {currentUser.username}
      </p>
      <button onClick={logout}>Log out</button>
    </nav>

  ) : (
    <nav>
      <Link className='btn-nav' to='/login'>Log in</Link>
      <Link className='btn-nav' to='/signup'>Sign up</Link>
    </nav>
  )

  return (
    <header className='nav-bar'>
      {navBar}
    </header>
  )
};


export default UserNav;