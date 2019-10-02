import React from 'react';

class BoardForm extends React.Component {
  constructor(props){
    super(props);
    const {board} = this.props;
    this.state = {title: board ? board.title : ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {updateBoard, createBoard, collectionId} = this.props;
    const board = Object.assign({}, this.state);
    
    if (this.props.board) {
      updateBoard(this.props.board.id, board);
    } else {
      createBoard(collectionId, board);
    }
  }

  handleChange(type) {
    return e => {
      e.preventDefault();
      this.setState({[type]: e.target.value});
    };
  }

  render() {
    const formType = this.props.board ? 'Update' : 'Create';

    return (
      <form className='form'>
        <label>
          Title:
          <input 
            type='text'
            value={this.state.title}
            onChange={this.handleChange('title')}
          />
        </label>
        <button 
          className='submit'
          onClick={this.handleSubmit}
        >{formType}</button> 
      </form>
    )
  }


}

export default BoardForm;