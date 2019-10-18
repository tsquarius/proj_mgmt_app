import React, {useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import BoardShowContainer from '../boards/board_show_container';
import Loading from '../loading';
import MemberIndexContainer from '../members/member_index_container';

const CollectionShow = props => {
  
  const {fetchBoards, collectionId, patchCard,
    newBoard, collection, loading, boardColumns,
    reorderCards, deleteCollection, updateCollection, history,
    openDetails } = props;

  const [title, setTitle] = useState(collection ? collection.title : '');

  const [active, setActive] = useState(false);
  
  const openCollectionDetails = e => {
    e.preventDefault();
    openDetails();
  };

  const handleTitleChange = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleDeleteCollection = e => {
    e.preventDefault();
    if (window.confirm('Are you sure you wish to delete this collection?')) {
      deleteCollection(collectionId)
      .then(history.push('/'));
    }
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
      <div>
        <Loading />
      </div>
    )
  } else {
    return [
      <article className='collection' key='collection'>
        <h2 className='collection-title'>
          <input
            title='Click to edit the collection title'
            type='text' 
            value={title} 
            onChange={handleTitleChange} />

          <div className='dropdown'>
            <button className='drop-button'>...</button>
            <ul className='dropdown-content'>
              <li title='save title name' onClick={submitTitleChange}>Save</li>
              <li title='manage members' onClick={openCollectionDetails}>Members</li>
              <li title='delete' onClick={handleDeleteCollection}>Delete</li>
            </ul>
          </div>
        </h2>
        
        <DragDropContext onDragEnd={onDragEnd}>
          {boardsList()}
        </DragDropContext>
        
        <div className='board'>
          <button className='button' onClick={createNewBoard}>Add Board...</button>
        </div>
        <MemberIndexContainer key='member-details' title={title} collectionId={collection.id} /> 
      </article>
    ]
  }
}

export default CollectionShow;