import React, {useState, useEffect} from 'react';
import Loading from '../loading';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

import CommentShowContainer from '../comments/comment_show_container';

const CardTitle = styled.h3`
  input {
    font-size: 25px;
  }
  padding-bottom: 5px;
  border-bottom: 2px solid white;
  margin-bottom: 20px;
`;

const CardFormItems = styled.li`
  font-size: 15px;
  margin-bottom: 10px;
  color: black;
  background: white;
  border-radius: 5px;
  padding: 10px 5px;
  input {
    padding: 5px;
    margin: 0 0 5px 5px;;
    :focus {
      border-bottom: 2px solid darkgray;
    }
  }
`;

const ButtonContainer = styled.nav`
  font-size: 15px;
  font-weight: 700;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  button {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;

const CardsShow = (props) => {
  const {card, closeCardDetails, patchCard, deleteCard} = props;  
  
  const [title, setTitle] = useState(card ? card.title : '');
  const [color, setColor] = useState(card ? card.color : '');
  const [dueDate, setDueDate] = useState(card ? card.due_date : '');
  const [description, setDescription] = useState(card ? card.description : '');  

  const handleCloseCardDetails = e => {
    e.preventDefault();
    closeCardDetails();
  };

  const cardObj = {
    title: title,
    color: color,
    due_date: dueDate,
    description: description
  };

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleColorChange = e => {
    setColor(e.target.value);
  };

  const handleDueDateChange = e => {
    setDueDate(e.target.value);
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    patchCard(card.id, cardObj)
      .then(closeCardDetails());
  };

  const handleDelete = e => {
    e.preventDefault();
    deleteCard(card.id)
      .then(closeCardDetails());
  };

  const renderComments = () => card.comments.map(id => 
    <CommentShowContainer key={`comment-${id}`} commentId={id} />
  )

  if (!card) {
    return (
      <Loading />
    )
  } else {

    return (
      <section className='card-details'>
        <CardTitle><input
          value={title || ''}
          type='text'
          onChange={handleTitleChange} /></CardTitle>
        <ul>
          <CardFormItems key='duedate'>
            Due: 
            <input
              value={dueDate || ''}
              type='date'
              onChange={handleDueDateChange} />
          </CardFormItems>
          <CardFormItems key='description'>
            Description: 
            <input
              value={description || ''}
              type='text'
              onChange={handleDescriptionChange} />
          </CardFormItems>
          <CardFormItems key='color'>
            Color:
            <input
              value={color || ''}
              onChange={handleColorChange}
            />
          </CardFormItems>
          
          {renderComments()}

          <ButtonContainer key='nav'>
            <button onClick={handleSubmit}>Save/Close</button>
            <button onClick={handleDelete}>Delete</button>
          </ButtonContainer>
        </ul>
      </section>
    )
  }

}

export default withRouter(CardsShow);