import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {
  AddTag,
  TagButtonContainer,
  TagSelector,
  TagFormItems,
  TagNav
} from '../../styled_components/modal_styles';

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
    <AddTag key='form' active={active}>
      <TagFormItems key='tag-name'>
      <span>Tag:</span>
      <input 
        type='text' 
        value={tagName} 
        onChange={handleTagNameChange} 
      />
      </TagFormItems>

      <TagFormItems key='tag-color'>
        <span>Color:</span>
        <TagSelector onChange={handleColorChange} defaultValue={color}>
          <option value='' >none</option>
          <option value='#a33301'>Dark Red</option>
          <option value='#e95e10'>Salmon</option>
          <option value='#0e0c40'>Night Blue</option>
          <option value='#beced0'>Pale Blue </option>
          <option value='#c3e1e5'>Light Blue </option>
          <option value='#1f8da6'>Dark Teal</option>
          <option value='#daa520'>Goldenrod</option>
        </TagSelector>
      </TagFormItems>

      <FontAwesomeIcon
        style={{ color: color, marginTop: '2px', background: 'black' }}
        icon='circle' />

      <TagNav key='tag-nav'>
        <button 
          className='btn-modal' 
          onClick={submitTag} >
          Save
        </button>
        <button className='btn-modal'
          onClick={toggleActive} >
          X
        </button>
      </TagNav>

    </AddTag>,
    <TagButtonContainer key='tag-add' active={active}>
      <button className='btn-modal' 
        onClick={toggleActive} >
          + Add Tag
      </button>
    </TagButtonContainer>
  ]

};

export default TagsForm;

// <option value='' >none</option>
// <option value='red' >Red</option>
// <option value='yellow' >Yellow</option>
// <option value='deepskyblue'>Blue</option>
// <option value='magenta' >Magenta</option>