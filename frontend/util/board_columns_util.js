export const fetchBoardColumns = boardId => (
  $.ajax({
    method: 'GET',
    url: '/api/board_columns/',
    data: {board_id: boardId}  
  })
);