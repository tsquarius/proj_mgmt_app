import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import CommentShowContainer from '../comments/comment_show_container';

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
      <h4 key='comment-title'>Comments</h4>,

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

      <div className={active ? 'comment-form active' : 'comment-form'}  key='comment-form'>
        <textarea className='comment-textbox'
          value={comment}
          onChange={handleCommentChange}
        />
        <button className='button' 
          onClick={submitComment}>
            Post
        </button>
      </div>,

      <nav key='comment-add'>
        <button
          className={!active ? 'button comment' : 'hide'} 
          onClick={toggleCommentActive}
        >
          + Add comment
        </button>
      </nav>
    ]
};

export default CommentIndex;