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

const BoardColumnsShow = props => {

  const { destroyBoardColumn, boardColumn, 
    updateBoardColumn, activeForm, newCard, bcId, filter } = props;

  const [title, setTitle] = useState('');

  useEffect(() => {
    if (boardColumn) {
      setTitle(boardColumn.title);
    }
  }, [boardColumn ? boardColumn.title : ''] );


  const handleTitleChange = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleSubmitTitle = e => {
    e.preventDefault();
    updateBoardColumn(boardColumn.id, {title: title});
  };

  const removeColumn = e => {
    e.preventDefault();
    if (window.confirm('Are you sure you wish to delete this column?')) {
      destroyBoardColumn(boardColumn.id);
    }
  };

  const renderNewCardForm = e => {
    e.preventDefault();
    newCard(boardColumn.id);
  };

  const applyCardFilters = () => {
    if (!filter) {
      return boardColumn.cards;
    } else {
      return boardColumn.cards.filter(cardId => 
        filter.includes(cardId)
      );
    }
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
   
            {applyCardFilters().map((cardId,index) => 
              <CardsIndexContainer cardId={cardId} key={cardId} index={index} />)}
            
            <div className={activeForm.bcId === boardColumn.id ? 'hide' : 'card-placeholder'}>
              {provided.placeholder}
            </div>
            
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
      <Column className='board-column'>
        <h3>
          <input title='Click to edit column title' 
            type='text' 
            value={title} 
            onChange={handleTitleChange} />

          <div className='dropdown'>
            <button className='drop-button'>...</button>
            <ul className='dropdown-content'>
              <li title='Save title name' onClick={handleSubmitTitle}>Save</li>
              <li title='Delete Column' onClick={removeColumn}>Del</li>
            </ul>
          </div>
        </h3>

          {renderCards()}

          <form className={activeForm.bcId === boardColumn.id ? '' : 'hide'}>
            <NewCardsFormContainer bcId={boardColumn.id} />
          </form>

          <CardButton
            className='button'
            onClick={renderNewCardForm}>
            Add card...
          </CardButton>
      </Column>
    )
  }
}

export default BoardColumnsShow;