import React from 'react';
import {Route, Link} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

import SignupFormContainer from '../components/session/signup_form_container';
import LoginFormContainer from '../components/session/login_form_container';
import UserNavContainer from '../components/nav/user_nav_container';
import NewCollectionFormContainer from '../components/collections/new_form_container';
import SideNav from '../components/nav/side_nav';


const App = () => (
 <div>
    <header className='header'>
      <h1 className='logo'><Link to='/'>Project Management App</Link></h1>
      <UserNavContainer />
    </header>
    <main className='main'>
      <section className='main-nav'>
        <SideNav />
      </section>
      <section className='main-body'>
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
      </section>      
    </main>


 </div> 
)

export default App;