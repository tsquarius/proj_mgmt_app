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
      if (window.confirm('Are you sure you wish to delete this board?')) {
        deleteBoard(boardId);
      }
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
      <div className='board'>
        <Loading />
      </div>
    )
  } else{

  return (
    <div className='board' key={board.id}>
      <h2 className='board-title'>
        <input 
          title='Click to edit the Board name'
          type='text' 
          value={title} 
          onFocus={toggleFocus}
          onChange={handleTitleChange} />
        <div className='dropdown'>
          <button className='drop-button'>...</button>
          <ul className='dropdown-content'>
            <li 
              title='Save title name' 
              onClick={handleUpdate(board.id)}>Save</li>
            <li 
              title='Delete this board' 
              onClick={handleDelete(board.id)}>Delete</li>
          </ul>
        </div>
      </h2>

        <div className='board-content'>
          {renderColumns()}
          
          <ul className='board-column'>
            <button className='button' onClick={addColumn}>Add Column...</button>
          </ul>
          
        </div>

    </div>
  )}
}

export default BoardShow;