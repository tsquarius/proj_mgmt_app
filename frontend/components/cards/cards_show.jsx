// this will open up a detail view of the card
import React, {useState, useEffect, useRef} from 'react';
import {withRouter} from 'react-router-dom';

const CardsShow = (props) => {
  const {card, fetchCard, patchCard, deleteCard} = props;  
  const cardId = props.match.params.cardId;
  const collectionId = props.match.params.collectionId;
  
  useEffect(() => {
    fetchCard(props.match.params.cardId);
    localStorage.setItem('state', JSON.stringify(card));
  }, []);

  // const mounted = useRef();
  // useEffect(() => {
  //   if (!mounted.current) {
  //     mounted.current = true;
  //   } else {
  //     fetchCard(props.match.params.cardId);
  //   }
  // });
  
  window.props = props;

  const [title, setTitle] = useState(card ? card.title : localStorage.getItem('state').title);
  const [color, setColor] = useState(card ? card.color : '');
  const [dueDate, setDueDate] = useState(card ? card.due_date : '');
  const [description, setDescription] = useState(card ? card.description : '');
  
  const cardObj = {
    title: title,
    color: color,
    due_date: dueDate,
    description: description
  };

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  function handleDueDateChange(e) {
    setDueDate(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    patchCard(cardId, cardObj)
      .then(props.history.push(`/collection/${collectionId}`));
  }

  function handleDelete(e) {
    e.preventDefault();
    deleteCard(cardId)
      .then(props.history.push(`/collection/${collectionId}`));
  }

  console.log(cardId);

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
          Color
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

export default withRouter(CardsShow);