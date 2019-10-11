import * as Util from '../util/comment_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_SINGLE_COMMENT = 'RECEIVE_SINGLE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

// action

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveSingleComment = payload => ({
  type: RECEIVE_SINGLE_COMMENT,
  payload
});

export const deleteComment = payload => ({
  type: DELETE_COMMENT,
  payload
});

// thunk actions

export const fetchComments = cardId => dispatch => Util.fetchComments(cardId)
  .then(comments => dispatch(receiveComments(comments)));

export const fetchComment = commentId => dispatch => Util.fetchComment(commentId)
  .then(payload => dispatch(receiveSingleComment(payload)));

export const postComment = (cardId, comment) => dispatch => 
  Util.postComment(cardId, comment)
    .then(payload => dispatch(receiveSingleComment(payload)));

export const patchComment = (commentId, comment) => dispatch =>
  Util.patchComment(commentId, comment)
    .then(payload => dispatch(receiveSingleComment(payload)));

export const destroyComment = commentId => dispatch => Util.deleteComment(commentId)
    .then(payload => dispatch(deleteComment(payload)));
