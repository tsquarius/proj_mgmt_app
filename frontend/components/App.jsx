import React from 'react';
import {Route} from 'react-router-dom';

import SignupFormContainer from '../components/session/signup_form_container';
import LoginFormContainer from '../components/session/login_form_container';


const App = () => (
 <div>
    <header>
      <h1>Project Management App</h1>

      <Route path='/login' component={LoginFormContainer} />
      <Route path='/signup' component={SignupFormContainer} />      
    </header>


 </div> 
)

export default App;