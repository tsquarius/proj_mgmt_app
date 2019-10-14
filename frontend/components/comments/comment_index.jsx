import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import CommentShowContainer from '../comments/comment_show_container';

import { ButtonContainer } from '../../styled_components/modal_styles';

import {
  AddComment,
  TextBox,
  Button
} from '../../styled_components/comment_styles';

const CommentIndex = props => {
  const { commentsArr, postComment, cardId } = props;

  const [comment, setComment] = useState('');
  const [active, setActive] = useState(false);

  const commentObj = { body: comment };

  const toggleCommentActive = e => {
    e.preventDefault();
    setActive(!active);
  };

  const submitComment = e => {
    e.preventDefault();
    postComment(cardId, commentObj);
    setComment('');
    setActive(!active);
  };

  const handleCommentChange = e => {
    setComment(e.target.value);
  };

  const renderComments = () => commentsArr.map((id, index) =>
    <CommentShowContainer key={`comment-${id}`} commentId={id} index={index} />
  )

  return [
      <h4 className='subtitle' key='comment-title'>Comments</h4>,

      <Scrollbars
        autoHeight
        autoHeightMin={0}
        autoHeightMax={100}
        hideTracksWhenNotNeeded={true}
        className='scroll-card-comments'
        key='comment-scroll'
      >
        {renderComments()}
      </Scrollbars>,

      <AddComment key='comment-form' active={active}>
        <TextBox
          value={comment}
          onChange={handleCommentChange}
        />
        <Button 
          onClick={submitComment}>
            Post
        </Button>
      </AddComment>,

      <ButtonContainer key='comment-add'>
        <Button
          className={!active ? '' : 'hide'} 
          onClick={toggleCommentActive}
        >
          + Add comment
        </Button>
      </ButtonContainer>
    ]
};

export default CommentIndex;