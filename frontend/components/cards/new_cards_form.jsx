import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, TextBox } from '../../styled_components/card_styles';

const CardsForm = props => {

  const {postCard, bcId, closeForm} = props;
  const [title, setTitle] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const card = {title: title};
    postCard(bcId, card)
      .then(() => {
        setTitle(''); closeForm();
      });
  };

  const handleClose = e => {
    e.preventDefault();
    closeForm();
  };

  return[
      <textarea className='textbox' key='addcard-textbox' onChange={handleChange} value={title} />,
      <nav className='icon-nav' key='addcard icons'>
        <FontAwesomeIcon
          className='button'
          onClick={handleSubmit}
          icon={['far', 'save']} />
        <FontAwesomeIcon
          className='button'
          onClick={handleClose}
          icon={['far', 'trash-alt']} />
      </nav>
    ]

}

export default CardsForm;