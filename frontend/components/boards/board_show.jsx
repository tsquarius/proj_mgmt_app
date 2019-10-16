import React, { useState, useEffect } from 'react';
import BoardColumnsContainer from '../board_columns/board_columns_show_container';
import Loading from '../loading';
import {
  BoardDiv,
  HeaderSection,
  ColumnsSection,
  PseudoColumn,
  ButtonToggle,
  FocusButton
} from '../../styled_components/board_styles';


const BoardShow = props => {

  const {deleteBoard, board, updateBoard, boardId, loading, createColumn} = props;
  const [title, setTitle] = useState(''); 
  const [focused, setFocused] = useState(false);

  const toggleFocus = e => {
    e.preventDefault();
    setFocused(true);
  };

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
      updateBoard(boardId, {title: title});
      setFocused(false);
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
      <BoardDiv>
        <Loading />
      </BoardDiv>
    )
  } else{

  return (
    <BoardDiv key={board.id}>
      <HeaderSection>
        <input 
          title='Click to edit the Board name'
          type='text' 
          value={title} 
          onFocus={toggleFocus}
          onChange={handleTitleChange} />
        <nav>
          <FocusButton 
            title='Save title name' 
            focused={focused} 
            onClick={handleUpdate(board.id)}>Save Change</FocusButton>
          <ButtonToggle title='Delete this board' onClick={handleDelete(board.id)}>Del</ButtonToggle>
        </nav>
      </HeaderSection>

        <ColumnsSection>
          {renderColumns()}
          
          <PseudoColumn>
            <button className='submit' onClick={addColumn}>Add Column...</button>
          </PseudoColumn>
          
        </ColumnsSection>

    </BoardDiv>
  )}
}

export default BoardShow;