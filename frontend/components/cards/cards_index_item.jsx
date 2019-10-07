import React from 'react';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid lightgray;
  background: ${props => (props.isDragging ? 'orange' : 'white')};
  margin-bottom: 3px;
  padding: 10px 5px;
  :hover {
    background: orange;
    transition: background 0.3s;
  }
`;

const CardsIndexItem = props => {
  const { card, index, collectionId } = props;

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <Card
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Link to={`/collection/${collectionId}/card/${card.id}`}>
            {card.title}
          </Link>
        </Card>
      )}
    </Draggable>
  )

};

export default CardsIndexItem;