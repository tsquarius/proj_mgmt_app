import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Loading from '../loading';

const Comment = styled.li`
  font-size: 15px;
  margin-bottom: 10px;
  color: black;
  background: white;
  border-radius: 5px;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 3px;
  border-bottom: 1px solid gray;
  margin-bottom: 5px;

`;


const CommentShow = props => {
  const {comment, commentId} = props;
  console.log(props);
  
  const parseDate = commentDate => {
    let date = new Date(commentDate);
    return (date.getMonth() + '-' + date.getDate() + '-' + date.getFullYear());
  };

  if (!comment) {
    return (
      <Loading />
    )
  } else {
    return (
      <Comment key={commentId}>
        <CommentHeader>
          <span>{comment.author}</span>
          <span>{parseDate(comment.updated_at)}</span>
        </CommentHeader>
        <p>{comment.body}</p>
      </Comment>
    )
  }

};

export default CommentShow;