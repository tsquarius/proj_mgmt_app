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
          Email:
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
    
  return (
    <div className='session-form'>
      <Title>{type}</Title>
      <ul className="errors-list">
        {renderErrors()}
      </ul>
      <form>
        <label>
          Username:
          <input
            className='session-input'
            type='text'
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        {promptEmail()}
        <label>
          Password:
          <input
            className='session-input'
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <Button onClick={handleSubmitForm}>{type}</Button>
      </form>
    </div>
  )
}

export default SessionForm;