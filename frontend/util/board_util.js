export const fetchBoards = collectionId => (
  $.ajax({
    method: 'GET',
    url: `/api/collections/${collectionId}/boards`
  })
);

export const fetchBoard = boardId => (
  $.ajax({
    method: 'GET',
    url: `/api/boards/${boardId}`
  })
);

export const postBoard = (collectionId, board) => (
  $.ajax({
    method: 'POST',
    url: `/api/collections/${collectionId}/boards`,
    data: {board}
  })
);

export const patchBoard = (boardId, board) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/boards/${boardId}`,
    data: {board}
  })
);

export const deleteBoard = boardId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/boards/${boardId}`,
  })
);