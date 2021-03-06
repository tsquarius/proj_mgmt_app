import React from 'react';
import {Switch, Link} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import UserNavContainer from './nav/user_nav_container';
import HomeContainer from './home_container';

import CollectionShowContainer from './collections/collection_show_container';
import CollectionIndexContainer from './collections/collection_index_container';

import CardShowContainer from './cards/cards_show_container';

const App = () => [
  <UserNavContainer key='main-nav' />,
  <header className='main-head' key='header'>
    <h1><Link to='/'>DASH.</Link> </h1>
  </header>,

  <React.Fragment key='fragment'>
    <Switch>
      <ProtectedRoute exact={true} path='/' component={HomeContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <AuthRoute path='/login' component={LoginFormContainer} />
      <ProtectedRoute 
        exact={true} 
        path='/collection/:collectionId' 
        component={CollectionShowContainer} />
    </Switch>
  </React.Fragment>,
  <ProtectedRoute path='/' component={CollectionIndexContainer} key='sidebar' />
 ,
  <div key='hamburger'></div>,

  <ProtectedRoute 
    exact={true}
    path='/collection/:collectionId/card/:cardId' 
    component={CardShowContainer}
    key='modal' />
  ,

  <footer className='main-footer' key='footer'>Project by Toan Tran</footer>
]

export default App;