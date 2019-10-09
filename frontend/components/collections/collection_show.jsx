import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';

import BoardShowContainer from '../boards/board_show_container';
import Loading from '../loading';

//Styles
const Container = styled.div``;
const Title = styled.h2`
  padding: 10px;
  font-size: 30px;
  font-style: italic;
`;
const Boards = styled.section`
  display: flex;
  flex-direction: column;
`;

const PseudoBoard = styled.div`
  display: block
  padding: 10px;
  button {
    font-size: 20px;
  }
`;

// end

const CollectionShow = props => {
  
  const {fetchBoards, collectionId, patchCard,
    newBoard, collection, loading, boardColumns,
    reorderCards } = props;

  useEffect(() => { 
    fetchBoards(collectionId);
   }, [collectionId]);

  const createNewBoard = e => {
    e.preventDefault();
    newBoard(collectionId ,{title: 'New Board'});
  };
  
  const boardsList = () => collection.boards.map(id =>
    <BoardShowContainer key={id} boardId={id} />
  );

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    console.log(result);

    if (!destination) { return; }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) { return; }

    const sourceColumn = boardColumns[source.droppableId];
    const destColumn = boardColumns[destination.droppableId];

    const sourceCardIds = Array.from(sourceColumn.cards);
    const destCardIds = Array.from(destColumn.cards);

    // remove card from its starting point
    sourceCardIds.splice(source.index, 1);
    // drop card into new destination 
    if (destination.droppableId !== source.droppableId) {
      //if card moved to a new column:
      destCardIds.splice(destination.index, 0, draggableId);
      destCardIds.forEach((cardId, index) => {
        patchCard(cardId, { order: index, board_column_id: destColumn.id
        });
      });
      reorderCards({id: destination.droppableId, cards: destCardIds});
      
    } else {
      //if card moved within same column:
      sourceCardIds.splice(destination.index, 0, draggableId);
    }
    reorderCards({ id: source.droppableId, cards: sourceCardIds });
    // update order in original column
    sourceCardIds.forEach((cardId, index) => {
      patchCard(cardId, { order: index, board_column_id: sourceColumn.id
      });
    });

  };

  if (loading || !collection) {
    return (
      <Container>
        <Loading />
      </Container>
    )
  } else {
    return (
      <Container>
        <Title>{collection ? collection.title: ''}</Title>
          <Boards>
            <DragDropContext onDragEnd={onDragEnd}>
              {boardsList()}
            </DragDropContext>
          </Boards>
          <PseudoBoard>
            <button className='submit' onClick={createNewBoard}>Add Board...</button>
          </PseudoBoard>
      </Container>
    )
  }
}

export default CollectionShow;