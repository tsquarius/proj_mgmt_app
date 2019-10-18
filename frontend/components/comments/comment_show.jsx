import React from 'react';
import Loading from '../loading';
import styled from 'styled-components';

const Comment = styled.li`
  background: ${props => props.index % 2 === 0 ? 'white' : 'rgb(226, 226, 226)'};
`;

const CommentShow = props => {
  const {comment, commentId, index} = props;
  
  const parseDate = commentDate => {
    let date = new Date(commentDate);
    return (
      date.getMonth() + '-' + date.getDate() + '-' + date.getFullYear() + ' ' +
       date.getHours()%12 + ':' + date.getMinutes() + 
       (date.getHours() > 12 && date.getHours() < 24 ? 'PM' : 'AM' ) );
  };

  if (!comment) {
    return (
      <Loading />
    )
  } else {
    return (
      <Comment className='comment-box' key={commentId} index={index}>
        <p>{comment.body}</p>
        
        <div className='comment-signed'>
          <span>{parseDate(comment.updated_at)}</span>
          <span>{comment.author}</span>
        </div>
        
      </Comment>
    )
  }

};

export default CommentShow;