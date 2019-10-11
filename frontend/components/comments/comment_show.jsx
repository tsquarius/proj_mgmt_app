import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Loading from '../loading';

const Comment = styled.li`
  font-size: 15px;
  margin-bottom: 5px;
  color: black;
  background: ${props => props.index % 2 === 0 ? 'white' : 'rgb(226, 226, 226)'};
  border-radius: 5px;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 5px;
`;

const Author = styled.span`
  font-size: 10px
`;

const DateTag = styled.span`
  font-size: 10px;
`;

const CommentShow = props => {
  const {comment, commentId, index} = props;
  console.log(props);
  
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