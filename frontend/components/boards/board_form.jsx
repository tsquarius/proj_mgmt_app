import React from 'react';

class BoardForm extends React.Component {
  constructor(props){
    super(props);
    const {board} = this.props;
    this.state = {title: board ? board.title : ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      updateBoard, 
      closeForm} = this.props;
    const board = Object.assign({}, this.state);
    
    updateBoard(this.props.board.id, board)
      .then(closeForm());
  }

  handleChange(type) {
    return e => {
      e.preventDefault();
      this.setState({[type]: e.target.value});
    };
  }

  handleClose(e) {
    e.preventDefault();
    this.props.closeForm();
  }

  render() {
    const {activeForm} = this.props;
    
    return (
      <form className={activeForm ? 'form' : 'hide'}>
        <label>
          Title:
          <input 
            type='text'
            value={this.state.title}
            onChange={this.handleChange('title')}
          />
        </label>
        <button className='submit' onClick={this.handleSubmit}>
          Update
        </button>
        <button className='submit' onClick={this.handleClose}>
          Close
        </button>
      </form>
    )
  }
}

export default BoardForm;