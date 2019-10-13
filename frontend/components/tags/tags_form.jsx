import React, {useState} from 'react';
import styled from 'styled-components';

const AddTag = styled.div`
  display: ${props => props.active ? 'flex' : 'none'}
  font-size: 12px;
  flex-direction: row;
  margin-top: 10px;
`;

const ButtonContainer = styled.nav`
  margin-left: 2px;
  padding-bottom: 10px;
  border-bottom: 1px dashed white;
  justify-content: space-between;
  display: flex;
`;

const Selector = styled.select`
  margin-left: 2px;
`;

const CardFormItems = styled.li`
  display: flex;
  flex-direction: row;
  width: 105px;
  margin-bottom: 10px;
  color: black;
  background: white;
  border-radius: 5px;
  span {
    font-weight: 700;
    padding: 2px 0 0 2px;
  }
  input {
    margin-left: 5px;
  }
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
    <AddTag key='form' active={active}>
      <CardFormItems key='tag-name'>
      <span>Tag:</span>
      <input 
        type='text' 
        value={tagName} 
        onChange={handleTagNameChange} 
      />
      </CardFormItems>

      <CardFormItems key='tag-color' style={{marginLeft: '2px'}}>
      <span>Color:</span>
      <Selector onChange={handleColorChange} defaultValue={color}>
        <option value='' >none</option>
        <option value='red' >Red</option>
        <option value='yellow' >Yellow</option>
        <option value='deepskyblue'>Blue</option>
        <option value='magenta' >Magenta</option>
      </Selector>
      </CardFormItems>
      <ButtonContainer key='tag-nav'>
        <button 
          className='btn' 
          onClick={submitTag}
          style={{fontSize: '12px', marginLeft: '10px'}}>
          Save
        </button>
        <button className='btn'
          onClick={toggleActive}
          style={{fontSize: '12px', marginLeft: '20px'}}>
          X
        </button>
      </ButtonContainer>
    </AddTag>,
    <ButtonContainer key='tag-add' style={active ? {display: 'none'} : {display: 'flex', marginTop: '10px'} }>
      <button className='btn' 
        onClick={toggleActive} 
        style={{ textAlign: 'left', fontSize: '12px' }}>
          + Add Tag
      </button>
    </ButtonContainer>
  ]

};

export default TagsForm;