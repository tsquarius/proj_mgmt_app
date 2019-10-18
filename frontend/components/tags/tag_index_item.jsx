import React from 'react';
import Loading from '../loading';
import styled from 'styled-components';

export const Tag = styled.li`
  background: ${props => props.color}
  color: ${props => props.offSet};
`;

export const CloseTag = styled.button`
  visibility: hidden;
  color: inherit;
  margin-left: 5px;
  ${props => props.boardView ? '' : `
    ${Tag}:hover & {
      visibility: visible;
      display: inherit;
      font-weight: bold;
    }`
  }
`;

const TagIndexItem = props => {
  const {tag, deleteTag, tagId, boardView} = props;

  const submitDeleteTag = e => {
    e.preventDefault();
    deleteTag(tagId);
  };

  const offSetColor = () => {
    if (tag.color === '#beced0') {
      return(
        'black'
      );
    } else if (tag.color === '#c3e1e5') {
      return (
        '#bf3415'
      );
    } else {
      return 'white';
    }
  };

  if (!tag) {
    return(
      <Loading />
    )
  }

  return(
    <Tag 
      className='tag'
      color={tag.color} 
      offSet={offSetColor()}
    >
      {tag.name}
      <CloseTag 
        boardView={boardView}
        onClick={submitDeleteTag}>
          x
      </CloseTag>
    </Tag>
  );

};

export default TagIndexItem;