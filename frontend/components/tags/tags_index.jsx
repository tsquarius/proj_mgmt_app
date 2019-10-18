import React from 'react';
import TagIndexItemContainer from './tag_index_item_container';
import TagsFormContainer from '../tags/tags_form_container';

import { TagsList } from '../../styled_components/modal_styles';

const TagsIndex = ({tagsArray, cardId, boardView}) => {
  const renderTags = () => tagsArray.map(tagId =>
    <TagIndexItemContainer 
      boardView={boardView} 
      key={`tag-${tagId}`} 
      tagId={tagId} />
  )

  if (boardView) {
    return (
      <ul className='tag-list board' key='tags-list'>
        {renderTags()}
      </ul>
    )
  } else {
    return [
      <ul className='tag-list' key='tags-list'>
        {renderTags()}
      </ul>,
      <TagsFormContainer key='tag-form' cardId={cardId} />
    ];
  }
};

export default TagsIndex;