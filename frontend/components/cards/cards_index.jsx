import React from 'react';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Loading from '../loading';


const Card = styled.div`
  cursor: pointer;
  border: 1px solid lightgray;
  background: ${props => props.isDragging ? 'orange' : 'white'};
  color: ${props => props.isDragging ? 'white' : 'inherit'}
  margin-bottom: 3px;
  padding: 10px 5px;
  :hover {
    background: orange;
    transition: background 0.3s;
  }
  min-height: 20px;
`;

const CardsIndex = props => {
  const { card, index, deleteCard } = props;
  
  const handleDelete = e => {
    e.preventDefault();
    deleteCard(card.id);
  };

  if (!card) {
    return <Loading />
  } else {

    return (
      <Draggable draggableId={card.id} index={index} type='card'>
        {(provided, snapshot) => (
          <Card
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {card ? card.title : ''}
            <button className='submit' onClick={handleDelete}>Del</button>
          </Card>
        )}
      </Draggable>
    )
  }
}

export default CardsIndex;

