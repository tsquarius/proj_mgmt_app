import React from 'react';
import { withRouter } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';
import CardsShowContainer from './cards_show_container';
import styled from 'styled-components';
import Loading from '../loading';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardName = styled.span`
  display: flex;
  flex-direction: column;
  width: 85%;
`;

const ToggleCardDetails = styled.div`
  display: ${props => props.active.id === props.cardId ? 'flex' : 'none'}
`;

const Card = styled.div`
  cursor: pointer;
  background: ${props => props.isDragging ? 'orange' : 'rgba(255,255,255,0.1)'};
  color: ${props => props.isDragging ? 'white' : 'inherit'}
  margin-bottom: 3px;
  padding: 10px;
  :hover {
    background: orange;
    transition: background 0.3s;
  }
  min-height: 20px;
  justify-content: space-between;
  display: flex;
`;

const CommentIcon = styled.div`
  display: ${props => props.active ? 'flex' : 'none'};
  font-size: 12px;
`;

const CardsIndex = props => {
  const { card, index, deleteCard, renderCardDetails, activeForm } = props;

  const toggleActive = e => {
    e.preventDefault();
    renderCardDetails(card.id);
  };

  const handleDelete = e => {
    e.preventDefault();
    deleteCard(card.id);
  };

  if (!card) {
    return <Loading />
  } else {

    return [
      <Draggable draggableId={card.id} index={index} type='card' key={`card-${card.id}`}>
        {(provided, snapshot) => (
          <Card
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >

            <CardName onClick={toggleActive}>
              {card.title} 
              <FontAwesomeIcon 
                style={card.color ? {color: card.color, 'margin-top': '2px', opacity: 0.6} : {display: 'none'}} 
                icon='circle' />
            </CardName>
            <CommentIcon active={card.comments.length > 0}>
              {card.comments.length}
              <FontAwesomeIcon 
                style={{'margin-left': '3px', 'font-size': '15px'}} 
                onClick={toggleActive} 
                icon={['far', 'comment']} />
            </CommentIcon>
          </Card>
        )}
      </Draggable>,

      <ToggleCardDetails key="card-details" active={activeForm} cardId={card.id}>
        <div className='modal-screen'>
          <div className='modal-content'>
            <CardsShowContainer  card={card}/>
          </div>
        </div>
      </ToggleCardDetails>

    ]
  }
}

export default withRouter(CardsIndex);

