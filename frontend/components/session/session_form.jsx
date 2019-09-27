import React from 'react';
import {Link} from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state);
    this.props.submit(user);
      // .then(this.props.history.push('/'));
  }

  updateState(type) {
    return e => this.setState({[type]: e.target.value});
  }

  renderErrors() {
    const errors = this.props.errors.map(error =>
      <li key={error}>
        {error}
      </li>)
    
    return errors
  }

  render() {

    let email;
    if (this.props.type === 'Sign Up') {
      email = (
        <label>
          Email:
            <input
            type='email'
            value={this.state.email}
            onChange={this.updateState('email')}
          />
        </label>
      )
    };
    
    return (
      <div className='session-form'>
        <h3>{this.props.type}</h3>
        <ul>
          {this.renderErrors()}
        </ul>
        <form>
          <label>
            Username:
            <input
              type='text'
              value={this.state.username}
              onChange={this.updateState('username')}
            />
          </label>
          {email}
          <label>
            Password:
            <input
              type='password'
              value={this.state.password}
              onChange={this.updateState('password')}
            />
          </label>
          <button onClick={this.handleClick}>{this.props.type}</button>
        </form>
      </div>
    )
  }

}

export default SessionForm;