import React, { useState, useEffect } from 'react';
import BoardColumnsContainer from '../board_columns/board_columns_show_container';
import Loading from '../loading';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
  display: block
  padding-left: 12px;
  border-bottom: 2px dashed gray;
  width: 90%;
  margin-left: 10px;
`;

const HeaderSection = styled.header`
  display: flex;
  width: 35%;
  input {
    font-size: 20px;
    padding: 8px 10px;;
    :focus {
      border-bottom: 1px solid white;
    }
  }
`;

const ColumnsSection = styled.section`
  min-width: 1100px;
  min-height: 200px;
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;

const PseudoColumn = styled.div`
  width: 200px;
  border: 1px solid green;
  margin-right: 10px;
  background: inherit;
  border: none;
  }
`;

const ButtonToggle = styled.button`
  display: none;
  margin-top: 5px;
  font-size: 13px;
  :hover {
    text-decoration: underline;
  }
  ${HeaderSection}:hover & {
    display: block;
    cursor: pointer;
  }
`;

const BoardShow = props => {

  const {deleteBoard, board, updateBoard, boardId, fetchBoard, loading, createColumn} = props;
  const [title, setTitle] = useState('');

  useEffect(() => { 
    if (board) {setTitle(board.title);} 
  }, [board ? board.title : '']);


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

  const addColumn = e => {
    e.preventDefault();
    createColumn(boardId, { title: 'New Column' });
  };


  const renderColumns = () => board.columns.map((bcId, index) =>
    <BoardColumnsContainer bcId={bcId} key={bcId} index={index} />
  )

  if (!board || loading) {
    return (
      <Container>
        <Loading />
      </Container>
    )
  } else{

  return (
    <Container key={board.id}>
      <HeaderSection>
        <input 
          type='text' 
          value={title} 
          onChange={handleTitleChange} />
        <nav>
          <ButtonToggle onClick={handleUpdate(board.id)}>Save Change</ButtonToggle>
          <ButtonToggle onClick={handleDelete(board.id)}>Del</ButtonToggle>
        </nav>
      </HeaderSection>

        <ColumnsSection>
          {renderColumns()}
          
          <PseudoColumn>
            <button className='submit' onClick={addColumn}>Add Column...</button>
          </PseudoColumn>
          
        </ColumnsSection>

    </Container>
  )}
}

export default BoardShow;