import React from 'react';
import styled from 'styled-components';

const Tag = styled.li`
  border-radius: 5px;
  font-size: 12px;
  background: ${props => props.color}
  min-width: 30px;
  height: 13px;
  padding: 3px 5px;
  display: flex;
  margin-right: 1px;
  justify-content: space-between;
  color: ${props => props.offSet ? 'black' : 'white' };
`;


const TagIndexItem = props => {
  const {tag, deleteTag, tagId, boardView} = props;

  const submitDeleteTag = e => {
    e.preventDefault();
    deleteTag(tagId);
  };

  return(
    <Tag color={tag.color} offSet={tag.color === 'yellow' || tag.color === 'deepskyblue' }>
      {tag.name}
      <button 
        className='btn'
        onClick={submitDeleteTag}
        style={boardView ? {display : 'none'} : {fontSize: '12px', marginLeft: '10px'}}>
          x
      </button>
    </Tag>
  );

};

export default TagIndexItem;