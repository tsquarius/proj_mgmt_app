import React from 'react';
import {Route, Link} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

import SignupFormContainer from '../components/session/signup_form_container';
import LoginFormContainer from '../components/session/login_form_container';
import UserNavContainer from '../components/nav/user_nav_container';

const App = () => (
 <div>
    <header>
      <h1>Project Management App</h1>
      <UserNavContainer />

      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />      
    </header>


 </div> 
)

export default App;