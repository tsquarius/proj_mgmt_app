import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';

import BoardShowContainer from '../boards/board_show_container';
import Loading from '../loading';

//Styles
const Container = styled.div``;
const Title = styled.h2`
  display: flex;
  padding: 10px;
  font-size: 30px;
  font-weight: 700;
  width: 90%
  border-bottom: 2px solid gray; 
  justify-content: space-between;
  button {
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
  }
`;

const TitleInput = styled.input`
  :focus {
    border-radius: 5px;
    background: rgba(255,255,255,0.4);
    margin-right: 5px;
  }
`;

const Button = styled.button`
  ${Title}:hover & {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s linear;
  }
  :hover {
    text-decoration: underline;
  }
`;

const Boards = styled.section`
  display: flex;
  flex-direction: column;
`;

const PseudoBoard = styled.div`
  display: block
  padding: 10px;
  margin-left: 10px;
  button {
    font-size: 20px;
  }
`;

// end

const CollectionShow = props => {
  
  const {fetchBoards, collectionId, patchCard,
    newBoard, collection, loading, boardColumns,
    reorderCards, deleteCollection, updateCollection, history } = props;

  const [title, setTitle] = useState(collection ? collection.title : '')

  const handleTitleChange = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleDeleteCollection = e => {
    e.preventDefault();
    deleteCollection(collectionId)
      .then(history.push('/'));
  };

  const submitTitleChange = e => {
    e.preventDefault();
    updateCollection({title: title}, collectionId);
  };

  useEffect(() => { 
    fetchBoards(collectionId);
    if (collection) {
      setTitle(collection.title);
    }
   }, [collectionId, collection ? collection.title : '']);

  const createNewBoard = e => {
    e.preventDefault();
    newBoard(collectionId ,{title: 'New Board'});
  };
  
  const boardsList = () => collection.boards.map(id =>
    <BoardShowContainer key={id} boardId={id} />
  );


  // Drag-drop functionality
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
        <Title>
          <div>
            <TitleInput type='text' value={title} onChange={handleTitleChange} />
            <Button onClick={submitTitleChange}>save</Button>
          </div>
          <div>
            <Button onClick={handleDeleteCollection}>Delete</Button>
          </div>
        </Title>
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