import React from 'react';
import TagIndexItemContainer from './tag_index_item_container';
import TagsFormContainer from '../tags/tags_form_container';

import styled from 'styled-components';

const TagsList = styled.ul`
  display: flex;
  height: 30px
  flex-wrap: wrap;
`;

const TagsIndex = ({tagsArray, cardId, boardView}) => {
  const renderTags = () => tagsArray.map(tagId =>
    <TagIndexItemContainer boardView={boardView} key={`tag-${tagId}`} tagId={tagId} />
  )

  if (boardView) {
    return (
      <TagsList style={{marginTop: '5px', opacity: 0.7}} key='tags-list'>
        {renderTags()}
      </TagsList>
    )
  } else {
    return [
      <TagsList key='tags-list'>
        {renderTags()}
      </TagsList>,
      <TagsFormContainer key='tag-form' cardId={cardId} />
    ];
  }
};

export default TagsIndex;