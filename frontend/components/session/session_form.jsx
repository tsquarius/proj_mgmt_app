import React from 'react';
import styled from 'styled-components';


const Title = styled.h2`
  display: flex;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 700;
  width: 90%
  border-bottom: 2px solid gray;  
`;

const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  width: 70px;
  padding: 4px 0px;
  :hover {
    background: rgb(233, 132, 0);
  }
`;



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
            className='session-input'
            type='email'
            value={this.state.email}
            onChange={this.updateState('email')}
          />
        </label>
      )
    };
    
    return (
      <div className='session-form'>
        <Title>{this.props.type}</Title>
        <ul className="errors-list">
          {this.renderErrors()}
        </ul>
        <form>
          <label>
            Username:
            <input
              className='session-input'
              type='text'
              value={this.state.username}
              onChange={this.updateState('username')}
            />
          </label>
          {email}
          <label>
            Password:
            <input
              className='session-input'
              type='password'
              value={this.state.password}
              onChange={this.updateState('password')}
            />
          </label>
          <Button onClick={this.handleClick}>{this.props.type}</Button>
        </form>
      </div>
    )
  }

}

export default SessionForm;