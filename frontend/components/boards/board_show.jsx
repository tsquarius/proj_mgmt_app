import React from 'react';
import BoardFormContainer from './board_form_container';

class BoardShow extends React.Component {

  handleDelete(boardId) {
    return e => {
      e.preventDefault();
      this.props.deleteBoard(boardId);
    };
  }

  renderUpdate(boardId) {
    return e => {
      e.preventDefault();
      this.props.updateForm(boardId);
    }
  }


  render() {
    const {board, formId, active} = this.props;
    return (
      <li key={board.id}>
        <h3>{board.title}</h3>
        <button onClick={this.renderUpdate(board.id)}>Edit</button>
        <button onClick={this.handleDelete(board.id)}>Delete</button>
        <section className={(formId === board.id && active) ? '' : 'hide' }>
          <BoardFormContainer board={board} />
        </section>
      </li>


    )

  }

}

export default BoardShow;