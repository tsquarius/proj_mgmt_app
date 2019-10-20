import React from 'react';

import { Draggable } from 'react-beautiful-dnd';
import CardsShowContainer from './cards_show_container';
import TagsIndex from '../tags/tags_index';
import Loading from '../loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Card,
  CommentIcon
} from '../../styled_components/card_styles';

const CardsIndex = props => {
  const { card, index, renderCardDetails, activeForm, home } = props;

  const toggleActive = e => {
    e.preventDefault();
    renderCardDetails(card.id);
  };

  const cardModal = () => (
    <div className={activeForm.id === card.id ? 'modal-screen active' : 'modal-screen'}>
      <div className={activeForm.id === card.id ? 'modal-content active' : 'modal-content'}>
        <CardsShowContainer card={card} />
      </div>
    </div>
  )

  if (!card) {
    return <Loading />
  } 

  if (home) {
    return[
      <Card className="card" onClick={toggleActive} key={card.id}>
        <p>{card.due_date}</p>
        <p>{card.title}</p>
      </Card>,
      <React.Fragment key='modal'>
        {cardModal()}
      </React.Fragment>
    ]
  }
  
  else {
    return [
      <Draggable draggableId={card.id} index={index} type='card' key={`card-${card.id}`}>
        {(provided, snapshot) => (
          <Card className="card"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <span onClick={toggleActive} >
              {card.title} 

              <div className='card-tags'>
                <TagsIndex tagsArray={card.tags} cardId={card.id} boardView={true} />
              </div>
            </span>

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
      <React.Fragment key='modal'>
        {cardModal()}
      </React.Fragment>
    ]
  }
}

export default CardsIndex;

