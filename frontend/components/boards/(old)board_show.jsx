import React from 'react';
import BoardFormContainer from './board_form_container';
import BoardColumnsContainer from '../board_columns/board_columns_show_container';
import styled from 'styled-components';

const Container = styled.div`
  display: block
`;

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
    };
  }

  render() {
    const {board, formId, active} = this.props;
    return (
      <Container key={board.id}>
        <header>
          <div>
            <h3>{board.title}</h3>
            <nav>
              <button className='submit' onClick={this.renderUpdate(board.id)}>Edit</button>
              <button className='submit' onClick={this.handleDelete(board.id)}>Del</button>
            </nav>
          </div>
          <section className={(formId === board.id && active) ? '' : 'hide'}>
            <BoardFormContainer board={board} />
          </section>
        </header>

        <BoardColumnsContainer boardId={board.id} />
      </Container>
    )
  }
}

export default BoardShow;