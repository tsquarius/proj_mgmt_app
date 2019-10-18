import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import {
  TagSelector,
  TagFormItems,
  TagNav
} from '../../styled_components/modal_styles';

const AddTag = styled.div`
  display: ${props => props.active ? 'flex' : 'none'}
`;

const TagButtonContainer = styled.nav`
  margin-left: 2px;
  padding-bottom: ${props => props.active ? '0px' : '10px'};
  justify-content: space-between;
  display: flex;
  button {
    display: ${props => props.active ? 'none' : 'inherit'};
    text-align: left;
    font-size: 14px;
  }
  margin-top: ${props => props.active ? '0px' : '10px'};
`;


const TagsForm = props => {
  const {cardId, addTag} = props;
  const [tagName, setTagName] = useState('');
  const [color, setColor] = useState('');
  const [active, setActive] = useState(false);

  const tagObj = {
    name: tagName,
    color: color
  };

  const handleColorChange = e => {
    e.preventDefault();
    setColor(e.target.value);
  }

  const handleTagNameChange = e => {
    e.preventDefault();
    setTagName(e.target.value);
  };

  const submitTag = e => {
    e.preventDefault();
    addTag(cardId, tagObj);
    setTagName('');
    setColor('');
  };

  const toggleActive = e => {
    e.preventDefault();
    setActive(!active);
  };

  return [
    <AddTag className='tag-form' key='form' active={active}>
      <li className='tag-form-items' key='tag-name'>
      <span>Tag:</span>
      <input 
        type='text' 
        value={tagName} 
        onChange={handleTagNameChange} 
      />
      </li>

      <li className='tag-form-items' key='tag-color'>
        <span>Color:</span>
        <select onChange={handleColorChange} defaultValue={color}>
          <option value='' >none</option>
          <option value='#a33301'>Dark Red</option>
          <option value='#e95e10'>Salmon</option>
          <option value='#0e0c40'>Night Blue</option>
          <option value='#beced0'>Pale Blue </option>
          <option value='#c3e1e5'>Light Blue </option>
          <option value='#1f8da6'>Dark Teal</option>
          <option value='#daa520'>Goldenrod</option>
        </select>
      </li>

      <FontAwesomeIcon
        className='tag-icon'
        style={{ color: color, margin: '4px 4px 0', background: 'black' }}
        icon='circle' />

      <nav key='tag-nav'>
        <button 
          className='button' 
          onClick={submitTag} >
          Save
        </button>
        <button className='button'
          onClick={toggleActive} >
          X
        </button>
      </nav>

    </AddTag>,
    <TagButtonContainer key='tag-add' active={active}>
      <button className='button' 
        onClick={toggleActive} >
          + Add Tag
      </button>
    </TagButtonContainer>
  ]

};

export default TagsForm;