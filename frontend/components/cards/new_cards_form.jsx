import React, { useState } from 'react';

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
    <form>
      <textarea onChange={handleChange} value={title} />
      <button className='submit' onClick={handleSubmit}>save</button>
      <button className='submit' onClick={handleClose}>x</button>
    </form>
  )

}

export default CardsForm;