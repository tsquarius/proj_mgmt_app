import React, { useState } from 'react';
import { Title, Button } from '../../styled_components/home_styles';

const SessionForm = props => {

  const { submit, errors, type } = props;

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userObj = {
    username: username,
    email: email,
    password: password
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    submit(userObj);
  };

  const demoLogin = e => {
    e.preventDefault();
    submit({username: 'demo', password: 'password'});
  };

  const handleUsernameChange = e => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handleEmailChange = e => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const renderErrors = () => {
    const errorsList = errors.map(error =>
      <li key={error}>
        {error}
      </li>)
    return errorsList;
  };

  const promptEmail = () => {
    if (type === 'Sign Up') {
      return (
        <label>
          <span> Email:</span>
            <input
            className='session-input'
            type='email'
            value={email}
            onChange={handleEmailChange}
          />
        </label>
      )
    } else {
      return;
    }
  };
    
  return [
    <div className='session-form'>
      <Title>{type}</Title>

      <form>

        <label>
          <span> Username: </span>
          <input
            className='session-input'
            type='text'
            value={username}
            onChange={handleUsernameChange}
          />
        </label>

        {promptEmail()}
        <label>
          <span>Password: </span>
          <input
            className='session-input'
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
          <Button className='form-button' onClick={handleSubmitForm}>{type}</Button>
          <Button className='demo' onClick={demoLogin}>Demo Login</Button>
          <ul className="errors-list">
            {renderErrors()}
          </ul>
        </label>
      </form>
    </div>
  ]
}

export default SessionForm;