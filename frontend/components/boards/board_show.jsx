import React from 'react';
import BoardFormContainer from './board_form_container';
// pass in deleteForm and board
import {Route} from 'react-router-dom';

class BoardShow extends React.Component {

  handleDelete(boardId) {
    return e => {
      e.preventDefault();
      this.props.deleteBoard(boardId);
    };
  }


  render() {
    const {board} = this.props;
    return (
      <li key={board.id}>
        <h3>{board.title}</h3>
        <button>edit</button>
        <button onClick={this.handleDelete(board.id)}>Delete</button>
        <BoardFormContainer board={board} />
      </li>


    )

  }

}

export default BoardShow;