import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled-components';
import CommentShowContainer from '../comments/comment_show_container';

const SubTitle = styled.h3`
  margin: 10px 0;
  text-decoration: underline;
`;

const AddComment = styled.div`
  display: ${props => props.active ? 'flex' : 'none'}
  font-size: 15px;
  flex-direction: column;

`;

const TextBox = styled.textarea`
  border-radius: 5px;
  padding: 5px;
`;

const ButtonContainer = styled.nav`
  margin: 10px 0;
  padding-bottom: 10px;
  border-bottom: 1px dashed white;
`;

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
      <SubTitle key='comment-title'>Comments</SubTitle>,

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
        <button 
          className='btn' 
          style={{textAlign: 'left', fontSize: '15px'}} 
          onClick={submitComment}>
            Post
        </button>
      </AddComment>,

      <ButtonContainer key='comment-add'>
        <button 
          style={{fontSize: '17px'}} 
          className={!active ? 'btn' : 'hide'} 
          onClick={toggleCommentActive}>+ Add comment</button>
      </ButtonContainer>
    ]
};

export default CommentIndex;