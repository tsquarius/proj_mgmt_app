//need to track boardId via props

export const fetchBoardColumns = boardId => (
  $.ajax({
    method: 'GET',
    url: `/api/boards/${boardId}/board_columns/`, 
  })
);

export const fetchBoardColumn = boardId => (
  $.ajax({
    method: 'GET',
    url: `/api/board_columns/${boardId}`,
  })
);

export const postBoardColumn = (bcId, board_column) => (
  $.ajax({
    method: 'POST',
    url: `/api/boards/${bcId}/board_columns`,
    data: {board_column}
  })
);

export const patchBoardColumn = (bcId, board_column) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/board_columns/${bcId}`,
    data: {board_column}
  })
);

export const deleteBoardColumn = bcId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/board_columns/${bcId}`
  })
);