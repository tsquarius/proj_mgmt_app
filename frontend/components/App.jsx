import React from 'react';
import {Switch, Link} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import styled from 'styled-components';

import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import UserNavContainer from './nav/user_nav_container';
import HomeContainer from './home_container';

import CollectionShowContainer from './collections/collection_show_container';
import CollectionIndexContainer from './collections/collection_index_container';

const Logo = styled.h1`
  color: rgb(233, 132, 0);
  font-size: 40px;
`;

const App = () => (
 <div>
    <header className='header'>
      <Logo><Link to='/'>Project Management App</Link></Logo>
      <UserNavContainer />
    </header>
    <main className='main'>
      <section className='main-nav'>
        <ProtectedRoute path='/' component={CollectionIndexContainer} />
      </section>
      <section className='main-body'>
        <Switch>
          <ProtectedRoute exact={true} path='/' component={HomeContainer} />
          <AuthRoute path='/login' component={LoginFormContainer} />
          <AuthRoute path='/signup' component={SignupFormContainer} />
          <ProtectedRoute 
            exact={true} 
            path='/collection/:collectionId' 
            component={CollectionShowContainer} />
        </Switch>
      </section>      
    </main>
 </div> 
)

export default App;