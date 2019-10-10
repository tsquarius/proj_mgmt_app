// this will open up a detail view of the card
import React, {useState, useEffect} from 'react';
import Loading from '../loading';
import {withRouter} from 'react-router-dom';

const CardsShow = (props) => {
  const {card, fetchCard, patchCard, deleteCard} = props;  
  const cardId = props.match.params.cardId;
  const collectionId = props.match.params.collectionId;
  
  const [title, setTitle] = useState(card ? card.title : '');
  const [color, setColor] = useState(card ? card.color : '');
  const [dueDate, setDueDate] = useState(card ? card.due_date : '');
  const [description, setDescription] = useState(card ? card.description : '');
  
  useEffect(() => {
    fetchCard(cardId);
    if (card) {
      setTitle(card.title);
      setColor(card.color);
      setDueDate(card.due_date);
      setDescription(card.description);
    }
  }, [card ? card.title : '']);
  
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
    patchCard(cardId, cardObj)
      .then(props.history.push(`/collection/${collectionId}`));
  };

  const handleDelete = e => {
    e.preventDefault();
    deleteCard(cardId)
      .then(props.history.push(`/collection/${collectionId}`));
  };

  if (!card) {
    return (
      <Loading />
    )
  } else {

    return (
      <section className='card-details'>
        <ul>
          <li>
            <input  
              value={title || ''} 
              onChange={handleTitleChange}/>
          </li>
          <li>
            Due: 
            <input
              value={dueDate || ''}
              onChange={handleDueDateChange} />
          </li>
          <li>
            Description: 
            <input
              value={description || ''}
              onChange={handleDescriptionChange} />
          </li>
          <li>
            Color:
            <input
              value={color || ''}
              onChange={handleColorChange}
            />
          </li>
          <button onClick={handleSubmit}>Save</button>
          <button onClick={handleDelete}>Delete</button>
        </ul>
      </section>
    )
  }

}

export default withRouter(CardsShow);