export const fetchTag = tagId => (
  $.ajax({
    method: 'GET',
    url: `/api/tags/${tagId}`
  })
);

export const addTag = (cardId, tag) => (
  $.ajax({
    method: 'POST',
    url: `/api/cards/${cardId}/tags`,
    data: { tag }
  })
);

export const deleteTag = tagId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/tags/${tagId}`
  })
);
