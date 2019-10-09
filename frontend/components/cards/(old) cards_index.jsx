import React from 'react';
import { withRouter } from 'react-router-dom';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import NewCardsFormContainer from './new_cards_form_container';
import CardsIndexItem from './cards_index_item';

const CardsContainer = styled.article`
  padding: 10px;
  background: ${props => (props.isDraggingOver ? 'gray' : 'inherit')}
  display: flex;
  flex-direction: column;
`;

const Placeholder = styled.div`
  height: ${props => (props.isDraggingOver ? '20px' : '0px')};
`;

const Form = styled.div`
  padding: 0px 10px 10px 10px;
`;

const CardsIndex = props => {
  const { activeForm, bcId, newCard, cards } = props;
  const collectionId = props.match.params.collectionId;

  const renderNewCardForm = e => {
    e.preventDefault();
    newCard(bcId);
  };

  const renderCards = cards.map((card,index) => 
    <CardsIndexItem 
      card={card} 
      index={index}
      key={card.id} 
      collectionId={collectionId} />
  );

  return [
    <Droppable droppableId={bcId}>
      {(provided, snapshot) => (
        <CardsContainer
          ref={provided.innerRef}
          {...provided.droppableProps}
          isDraggingOver={snapshot.isDraggingOver}
        >  
          {renderCards}
          <Placeholder isDraggingOver={snapshot.isDraggingOver}>{provided.placeholder}</Placeholder>
        </CardsContainer>
      )}
    </Droppable>,
    
    <Form>
      <div className = {activeForm.bcId === bcId ? '' : 'hide'}>
        <NewCardsFormContainer bcId={bcId} />
      </div>
    </Form>,

    <button 
      className='submit' 
      onClick={renderNewCardForm}>
          Add card...
    </button>
  ]
}

export default withRouter(CardsIndex);

