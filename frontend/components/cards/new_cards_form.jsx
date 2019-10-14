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

  return(
    <Form>
      <TextBox onChange={handleChange} value={title} />
      <nav>
        <FontAwesomeIcon
          className='btn-modal'
          onClick={handleSubmit}
          icon={['far', 'save']}
          style={{fontSize: '14px', marginLeft: '1px'}} />
        <FontAwesomeIcon
          className='btn-modal'
          style={{ marginLeft: '10px', fontSize: '14px' }}
          onClick={handleClose}
          icon={['far', 'trash-alt']} />
      </nav>
    </Form>
  )

}

export default CardsForm;