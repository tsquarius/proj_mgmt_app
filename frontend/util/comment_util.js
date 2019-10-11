export const fetchComments = cardId => (
  $.ajax({
    method: 'GET',
    url: `/api/cards/${cardId}/comments`
  })
);

export const fetchComment = commentId => (
  $.ajax({
    method: 'GET',
    url: `/api/comments/${commentId}`
  })
);

export const postComment = (cardId, comment) => (
  $.ajax({
    method: 'POST',
    url: `/api/cards/${cardId}/comments`,
    data: {comment}
  })
);

export const patchComment = (commentId, comment) => (
  $.ajax({
    method: 'GET',
    url: `/api/comments/${commentId}`,
    data: {comment}
  })
);

export const deleteComment = commentId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`,
  })
);
