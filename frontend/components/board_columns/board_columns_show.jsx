import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import CardsIndexContainer from '../cards/cards_index_container';
import styled from 'styled-components';
import {DragDropContext} from 'react-beautiful-dnd';

const ColumnsContainer = styled.section`
  width: 1100px;
  min-height: 200px;
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;

const Column = styled.div`
  width: 200px;
  border: 1px solid green;
  margin-right: 10px;
  background: lightgray;
  :last-of-type {
    background: inherit;
    border: none;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  h4 {
    font-size: 20px;
    padding: 5px;
  }
`;

const BoardColumnsShow = props => {

  const { boardId, createColumn, destroyBoardColumn, 
    boardColumns, fetchBoardColumns, patchCard } = props;
  const [bcArray, setBcArray] = useState(boardColumns);
  
  // useEffect(() => {
  //   fetchBoardColumns(boardId);
  // },[]);


  const handleUpdateBcArray = col => {
    let filteredArr = bcArray.filter(bc => bc.id !== col.id);
    setBcArray([...filteredArr, col]);
  };

  const addColumn = e => {
    e.preventDefault();
    const _defaultColumn = {
      title: 'New Column',
      order: 0
    };
    createColumn(boardId, _defaultColumn);
  };

  const removeColumn = bcId => {
    return e => {
      e.preventDefault();
      destroyBoardColumn(bcId);
    };
  };

  const renderCardOrder = bcId => {
    const col = bcArray.filter(bc => bc.id === bcId)[0];
    return col.ordered_cards;
  };

  const renderColumns = () => {
    const columns = boardColumns.map((column,index) =>
      <Column key={index}>
        <Header>
          <h4>{column.title}</h4>
          <button onClick={removeColumn(column.id)} className='submit'>Del</button>        
        </Header>
        <CardsIndexContainer bcId={column.id} cardArray={renderCardOrder(column.id)} />
      </Column>
    )
    return columns;
  }

  const onDragEnd = result => {
    console.log(result);
    const {destination, source, draggableId} = result;
    if (!destination) { return; }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceColumn = [...bcArray].find(bc => bc.id === source.droppableId);
    const destColumn = [...bcArray].find(bc => bc.id === destination.droppableId);

    const sourceCardIds = Array.from(sourceColumn.ordered_cards);
    const destCardIds = Array.from(destColumn.ordered_cards);

    // remove card from its starting point
    sourceCardIds.splice(source.index, 1);

    // drop card into new destination 
    if (destination.droppableId !== source.droppableId) {
      //if card moved to a new column:
      destCardIds.splice(destination.index, 0, draggableId)
      destCardIds.forEach((cardId, index) => {
        patchCard(cardId, {
          order: index, 
          board_column_id: destColumn.id});
      })
      destColumn.ordered_cards = destCardIds;
      handleUpdateBcArray(destColumn);
    } else {
      //if card moved within same column:
      sourceCardIds.splice(destination.index, 0, draggableId);
    }

    // update order in original column
    sourceCardIds.forEach((cardId, index) => {
      patchCard(cardId, {
        order: index,
        board_column_id: sourceColumn.id
      });
    })

    sourceColumn.ordered_cards = sourceCardIds;
    handleUpdateBcArray(sourceColumn);
  }

  return(
    <DragDropContext onDragEnd={onDragEnd}>
      <ColumnsContainer>
        {renderColumns()}
        <Column>
          <button className='submit' onClick={addColumn}>Add Column...</button>
        </Column>
      </ColumnsContainer>
    </DragDropContext>
  )
  

}

export default withRouter(BoardColumnsShow);