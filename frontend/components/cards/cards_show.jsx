import React, { useState } from 'react';

import CommentIndexContainer from '../comments/comment_index_container';
import TagsIndex from '../tags/tags_index';
import Loading from '../loading';

import { Scrollbars } from 'react-custom-scrollbars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardsShow = props => {
  const {card, closeCardDetails, patchCard, deleteCard} = props;  

  const [title, setTitle] = useState(card ? card.title : '');
  const [dueDate, setDueDate] = useState(card ? card.due_date : '');
  const [description, setDescription] = useState(card ? card.description : '');

  const cardObj = {
    title: title,
    due_date: dueDate,
    description: description
  };

  const handleTitleChange = e => {
    setTitle(e.target.value);
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
    if (window.confirm('Are you sure you wish to delete this card?')) {
      deleteCard(card.id)
        .then(closeCardDetails());
    }
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
      <section className='modal-details'>
        <h3>
          <input
            title='Click to change card name'
            value={title || ''}
            type='text'
            onChange={handleTitleChange} />
        </h3>

        <a className='button modal' onClick={handleCloseCardDetails}>x</a>

        <TagsIndex key='tags-index' tagsArray={card.tags} cardId={card.id} />
        <ul>
          <h4 key='card-details'>Card Details</h4>

          <Scrollbars 
            autoHeight
            autoHeightMin={0}
            autoHeightMax={175}
            hideTracksWhenNotNeeded={true}
            key='card-scroll'
          >
            <li className='modal-form-item' key='duedate'>
              <span>Due:</span> 
              <input
                value={dueDate || ''}
                type='date'
                onChange={handleDueDateChange} />
            </li>

            <li className='modal-form-item' key='description'>
              <span>Description:</span> 
              <textarea
                value={description || ''}
                onChange={handleDescriptionChange} />
            </li>

          </Scrollbars>

          <nav key='nav'>
            <FontAwesomeIcon
              title = 'Save updates and close'
              className='button icon'
              onClick={handleSubmit}
              icon={['far', 'save']} />
            <FontAwesomeIcon
              title = 'Delete this card'
              className='button icon'
              onClick={handleDelete}
              icon={['far', 'trash-alt']} />
          </nav>

          <CommentIndexContainer cardId={card.id} key='new-comment' />
          
        </ul>
      </section>
    )
  }

}

export default CardsShow;