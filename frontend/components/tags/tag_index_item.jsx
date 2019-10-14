import React from 'react';
import { 
  Tag,
  CloseTag } from '../../styled_components/tag_styles';

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

  return(
    <Tag 
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