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
      createBoard, 
      collectionId,
      closeForm} = this.props;
    const board = Object.assign({}, this.state);
    
    if (this.props.board) {
      updateBoard(this.props.board.id, board)
        .then(closeForm());
    } else {
      createBoard(collectionId, board)
        .then(closeForm());
    }
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
    const {activeForm, board} = this.props;
    const formType = board ? 'Update' : 'Create';
    
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
          {formType}
        </button>
        <button className='submit' onClick={this.handleClose}>
          Close
        </button>
      </form>
    )
  }
}

export default BoardForm;