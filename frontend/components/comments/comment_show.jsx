import React from 'react';
import Loading from '../loading';

import {
  Comment,
  CommentHeader,
  Author,
  DateTag
} from '../../styled_components/comment_styles';

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
      <Comment key={commentId} index={index}>
        <p>{comment.body}</p>
        
        <CommentHeader>
          <DateTag>{parseDate(comment.updated_at)}</DateTag>
          <Author>{comment.author}</Author>
        </CommentHeader>
        
      </Comment>
    )
  }

};

export default CommentShow;