import React, {useState, useEffect} from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Loading from '../loading';

import CardsIndexContainer from '../cards/cards_index_container';
import NewCardsFormContainer from '../cards/new_cards_form_container';

import {
  Column,
  HeaderSection,
  ToggleNav,
  CardsSection,
  PseudoCard,
  CardButton,
  Form,
  HiddenButton
} from '../../styled_components/board_column_styles';

import { FocusButton } from '../../styled_components/board_styles';

const BoardColumnsShow = props => {

  const { destroyBoardColumn, boardColumn, 
    updateBoardColumn, activeForm, newCard, bcId } = props;

  const [title, setTitle] = useState('');
  const [focused, setFocused] = useState(false);

  
  useEffect(() => {
    if (boardColumn) {
      setTitle(boardColumn.title);
    }
  }, [boardColumn ? boardColumn.title : ''] );

  const toggleFocus = e => {
    e.preventDefault();
    setFocused(true);
  };

  const handleTitleChange = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleSubmitTitle = e => {
    e.preventDefault();
    updateBoardColumn(boardColumn.id, {title: title});
    setFocused(false);
  };

  const removeColumn = e => {
    e.preventDefault();
    destroyBoardColumn(boardColumn.id);
  };

  const renderNewCardForm = e => {
    e.preventDefault();
    newCard(boardColumn.id);
  };

  const renderCards = () => {
    return (
      <Droppable droppableId={bcId} type='card'>
        {(provided, snapshot) => (
          <CardsSection 
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {boardColumn.cards.map((cardId,index) => 
              <CardsIndexContainer cardId={cardId} key={cardId} index={index} />)}
            
            <PseudoCard>
              {provided.placeholder}
            </PseudoCard>
            
          </CardsSection>      
        )}
      </Droppable>
    )
  };

  if (!boardColumn) {
    return (
      <Loading />
    )
  } else {

    return(
      <ul className='board-column'>
        <h3>
          <input title='Click to edit column title' 
            onFocus={toggleFocus} 
            type='text' 
            value={title} 
            onChange={handleTitleChange} />
          <ToggleNav>
            <FocusButton title='Save title name' focused={focused} onClick={handleSubmitTitle}>Save</FocusButton>
            <HiddenButton title='Delete Column' onClick={removeColumn}>Del</HiddenButton>
          </ToggleNav>
        </h3>

          {renderCards()}

          <Form>
            <div className={activeForm.bcId === boardColumn.id ? '' : 'hide'}>
              <NewCardsFormContainer bcId={boardColumn.id} />
            </div>
          </Form>

          <CardButton
            onClick={renderNewCardForm}>
            Add card...
          </CardButton>
      </ul>
    )
  }
}

export default BoardColumnsShow;