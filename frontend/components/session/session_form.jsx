import React, { useState } from 'react';

const SessionForm = props => {

  const { submit, errors, type } = props;

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [welcome, setWelcome] = useState(true);

  const collapseScreen = e => {
    e.preventDefault();
    setWelcome(false);
  };

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
    
  return (
    <article className='session'>
      <div className={welcome ? 'bg-image' : 'bg-image close'}></div>
      <section className={welcome ? 'session-content' : 'session-content close'}>
        <p> Welcome to Dash. ! </p>
        <p>
          Dash is an app meant to help organize your projects via the use
          of collections, boards, and cards (think kanban boards)
        </p>
        <a className='button welcome' onClick={collapseScreen}>Let's Get Started!</a>
      </section>
      <h2 id="signup" key='title'>{type}</h2>
      <ul className="errors-list">
        {renderErrors()}
      </ul>
      <form className='session-form'>
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
        </label>
        <nav>
          <button className='button' onClick={handleSubmitForm}>{type}</button>
          <button className='button' onClick={demoLogin}>Demo Login</button>
        </nav>

      </form>
    </article>
  )
}

export default SessionForm;