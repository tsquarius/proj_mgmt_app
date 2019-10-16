// search will only impact cards
// but can search by tag associated with cards
// cards should be converted to array?

import React, { useState, useEffect } from 'react';

const Search = props => {

  const { cards } = props;

  const [filter, setFilter] = useState('');

  const handleFilterInput = e => {
    e.preventDefault();
    setFilter(e.target.value);
  };


  // should make it render the actual cards
  const renderCards = cardArray => {
    cardArray.map((card) => {
      return(
        <li key={card.id} onClick={showCard(card.id)}>
          {card.title}
        </li>
      );
    });
  };

  const showMatchesFromFilter = () => {
    const matches = [];

  }
  


};

export default Search;