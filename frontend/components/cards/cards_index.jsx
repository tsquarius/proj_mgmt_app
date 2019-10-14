import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import CardsShowContainer from './cards_show_container';
import TagsIndex from '../tags/tags_index';
import Loading from '../loading';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  CardName,
  ToggleCardDetails,
  Card,
  CommentIcon
} from '../../styled_components/card_styles';

const CardsIndex = props => {
  const { card, index, renderCardDetails, activeForm } = props;

  const toggleActive = e => {
    e.preventDefault();
    renderCardDetails(card.id);
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

              <div>
                <TagsIndex tagsArray={card.tags} cardId={card.id} boardView={true} />
              </div>

            </CardName>

            <CommentIcon active={card.comments.length > 0}>
              {card.comments.length}
              <FontAwesomeIcon 
                className='comment-icon'
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

export default CardsIndex;

