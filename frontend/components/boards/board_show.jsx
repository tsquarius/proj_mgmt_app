import React, { useState } from 'react';
import BoardColumnsContainer from '../board_columns/board_columns_show_container';
import styled from 'styled-components';

const Container = styled.div`
  display: block
  padding-left: 12px;
`;

const Header = styled.header`
  display: flex;
  input {
    font-size: 20px;
    padding: 5px 0;
    :focus {
      border: 1px solid black;
    }
  }
`;

const ButtonToggle = styled.button`
  display: none;
  :hover {
    color: orange;
    transition: color 0.3s;
  }
  ${Header}:hover & {
    display: block;
    background: inherit;
    border: none;
    cursor: pointer;
  }
`;

const BoardShow = props => {

  const {deleteBoard, board, updateBoard} = props;
  const [title, setTitle] = useState(board.title);

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleDelete = boardId => {
    return e => {
      e.preventDefault();
      deleteBoard(boardId);
    };
  };

  const handleUpdate = boardId => {
    return e => {
      e.preventDefault();
      const newBoard = Object.assign({}, board);
      updateBoard(boardId, newBoard);
    };
  };

  return (
    <Container key={board.id}>
      <Header>
        <input 
          type='text' 
          value={title} 
          onChange={handleTitleChange} />
        <nav>
          <ButtonToggle onClick={handleUpdate(board.id)}>Save Change</ButtonToggle>
          <ButtonToggle onClick={handleDelete(board.id)}>Del</ButtonToggle>
        </nav>
      </Header>
        <BoardColumnsContainer boardId={board.id} />
    </Container>
  )
}

export default BoardShow;