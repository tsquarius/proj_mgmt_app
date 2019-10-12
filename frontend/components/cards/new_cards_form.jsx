import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const TextBox = styled.textarea`
  border-radius: 5px;
  padding: 5px;
  background: rgba(255, 255, 255, .6);
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  nav {
    margin-top: 2px;
  }
`;

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

  return(
    <Form>
      <TextBox onChange={handleChange} value={title} />
      <nav>
        <FontAwesomeIcon
          className='btn'
          onClick={handleSubmit}
          icon={['far', 'save']}
          style={{fontSize: '14px', marginLeft: '1px'}} />
        <FontAwesomeIcon
          className='btn'
          style={{ marginLeft: '10px', fontSize: '14px' }}
          onClick={handleClose}
          icon={['far', 'trash-alt']} />
      </nav>
    </Form>
  )

}

export default CardsForm;