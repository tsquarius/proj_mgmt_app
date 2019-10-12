import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';

import CommentIndexContainer from '../comments/comment_index_container';
import Loading from '../loading';

import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardTitle = styled.h2`
  input {
    font-size: 25px;
    width: 70%;
  }
  button {
    cursor: pointer;
    :hover {
      color: black;
      transition: color 0.3s ease;
    }
  }
  padding-bottom: 5px;
  border-bottom: 2px solid white;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const SubTitle = styled.h3`
  margin: 10px 0;
  text-decoration: underline;
`;

const CardFormItems = styled.li`
  font-size: 15px;
  margin-bottom: 10px;
  color: black;
  background: white;
  border-radius: 5px;
  padding: 5px;
  span {
    font-weight: 700;
  }
  input {
    margin-left: 5px;
  }
  textarea {
    font-size: 13px;
    padding: 5px 0 ;
    margin: 0 0 5px 0px;
    width: 90%;
    :focus {
      border: 2px solid darkgray;
    }
  }
`;

const ButtonContainer = styled.nav`
  margin: 10px 0;
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px dashed white;
  }
`;

const Selector = styled.select`
  margin-left: 5px; 
`;

const CardsShow = props => {
  const {card, closeCardDetails, patchCard, deleteCard} = props;  

  const [title, setTitle] = useState(card ? card.title : '');
  const [color, setColor] = useState(card ? card.color : '');
  const [dueDate, setDueDate] = useState(card ? card.due_date : '');
  const [description, setDescription] = useState(card ? card.description : '');

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

  const handleCloseCardDetails = e => {
    e.preventDefault();
    closeCardDetails();
  };

  if (!card) {
    return (
      <Loading />
    )
  } else {

    return (
      <section className='card-details'>
        <CardTitle key='card-title'>
          <input
            value={title || ''}
            type='text'
            onChange={handleTitleChange} />
          <button onClick={handleCloseCardDetails}>
            x
          </button>
        </CardTitle>
        <ul>
          <SubTitle key='card-details'>Card Details</SubTitle>
          <Scrollbars 
            autoHeight
            autoHeightMin={0}
            autoHeightMax={175}
            hideTracksWhenNotNeeded={true}
            key='card-scroll'
          >
            <CardFormItems key='duedate'>
              <span>Due:</span> 
              <input
                value={dueDate || ''}
                type='date'
                onChange={handleDueDateChange} />
            </CardFormItems>

            <CardFormItems key='color'>
              <span>Color:</span>
              <Selector onChange={handleColorChange} defaultValue={color}>
                <option value='' >none</option>
                <option value='red' >Red</option>
                <option value='yellow' >Yellow</option>
                <option value='deepskyblue'>Blue</option>
                <option value='magenta' >Magenta</option>
              </Selector>
            </CardFormItems>

            <CardFormItems key='description'>
              <span>Description:</span> 
              <textarea
                value={description || ''}
                onChange={handleDescriptionChange} />
            </CardFormItems>

          </Scrollbars>

          <ButtonContainer key='nav'>
            <FontAwesomeIcon
              className='btn'
              style={{ marginRight: '20px' }}
              onClick={handleSubmit}
              icon={['far', 'save']}
              alt='save' />
            <FontAwesomeIcon
              className='btn'
              style={{marginLeft: '20px'}}
              onClick={handleDelete}
              alt='delete'
              icon={['far', 'trash-alt']} />
          </ButtonContainer>

          <CommentIndexContainer cardId={card.id} key='new-comment' />
          
        </ul>
      </section>
    )
  }

}

export default withRouter(CardsShow);