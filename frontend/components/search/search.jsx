import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = props => {
  const {startSearch, clearSearch} = props;

  const [param, setParam] = useState('all');
  const [query, setQuery] = useState('');

  const assignParam = e => {
    e.preventDefault();
    setParam(e.target.value);
  };

  const searchObj = {
    param: param,
    query: query
  };

  const handleSearchInputChange = e => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSearch = e => {
    e.preventDefault();
    startSearch(searchObj);
  };

  const handleClearSearch = e => {
    e.preventDefault();
    setParam('');
    setQuery('');
    clearSearch();
  };


  return (
    <form className='search'>
      <select onChange={assignParam} defaultValue='--Filter by--'>
        <option value={undefined}>--Filter by--</option>
        <option value='all'>All</option>
        <option value='title'>Card Name</option>
        <option value='tag'>Tag</option>
      </select>
      <input type='text' value={query} onChange={handleSearchInputChange} placeholder='Filter cards...enter filter keyword' />
      <FontAwesomeIcon
        className='search-icon'
        title='filter cards'
        onClick={handleSearch}
        key='search'
        icon='search' />
      <button 
        title='clear filters' 
        className='button-nav' 
        onClick={handleClearSearch}>Clear</button>
    </form>
  )

};

export default Search;