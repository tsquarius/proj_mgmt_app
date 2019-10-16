import React, {useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import BoardShowContainer from '../boards/board_show_container';
import Loading from '../loading';
import MemberIndexContainer from '../members/member_index_container';

import {
  Title, 
  TitleInput, 
  BoardSection, 
  PseudoBoardSection,
  FocusButton
} from '../../styled_components/collection_styles';

import {
  DropButton,
  DropDownContent,
  DropDown
} from '../../styled_components/dropdown_styles';

const CollectionShow = props => {
  
  const {fetchBoards, collectionId, patchCard,
    newBoard, collection, loading, boardColumns,
    reorderCards, deleteCollection, updateCollection, history,
    openDetails } = props;

  const [title, setTitle] = useState(collection ? collection.title : '');
  const [focused, setFocused] = useState(false);
  const [active, setActive] = useState(false);

  const toggleActive = e => {
    e.preventDefault();
    setActive(!active);
  };
  
  const openCollectionDetails = e => {
    e.preventDefault();
    openDetails();
    setActive(false);
  };

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
    setFocused(false);
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

  const toggleFocus = e => {
    e.preventDefault();
    setFocused(true);
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
      <div key='collection-container'>
        <Title className='h2'>
          <div>
            <TitleInput
              title='Click to edit the collection title'
              onFocus={toggleFocus}
              type='text' 
              value={title} 
              onChange={handleTitleChange} />
            <FocusButton title='Save title name' focused={focused} onClick={submitTitleChange}>save</FocusButton>
          </div>

          <DropDown>
            <DropButton onClick={toggleActive}>...</DropButton>
            <DropDownContent active={active}>
              <button onClick={openCollectionDetails}>Manage Members</button>
              <button onClick={handleDeleteCollection}>Delete</button>
            </DropDownContent>
          </DropDown>
        </Title>

        <BoardSection>
          <DragDropContext onDragEnd={onDragEnd}>
            {boardsList()}
          </DragDropContext>
        </BoardSection>

        <PseudoBoardSection>
          <button className='submit' onClick={createNewBoard}>Add Board...</button>
        </PseudoBoardSection>
      </div>,

      <MemberIndexContainer key='member-details' title={title} collectionId={collection.id} /> 
    ]
  }
}

export default CollectionShow;