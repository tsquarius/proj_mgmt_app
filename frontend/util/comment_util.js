const fetchComments = cardId => (
  $.ajax({
    method: 'GET',
    url: `/api/cards/${cardId}/comments`
  })
);

const fetchComment = commentId => (
  $.ajax({
    method: 'GET',
    url: `/api/comments/${commentId}`
  })
);

const postComment = (cardId, comment) => (
  $.ajax({
    method: 'POST',
    url: `/api/cards/${cardId}/comments`,
    data: {comment}
  })
);

const patchComment = (commentId, comment) => (
  $.ajax({
    method: 'GET',
    url: `/api/comments/${commentId}`,
    data: {comment}
  })
);

const deleteComment = commentId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`,
  })
);
