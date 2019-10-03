import * as Util from '../util/board_columns_util';

// export const RECEIVE_BOARD_COLUMNS = 'RECEIVE_BOARD_COLUMNS';
export const RECEIVE_SINGLE_BOARD_COLUMN = 'RECEIVE_SINGLE_BOARD_COLUMN';
export const DELETE_BOARD_COLUMN = 'DELETE_BOARD_COLUMN';

// regular actions

export const receiveSingleBoardColumn = boardColumn => ({
  type: RECEIVE_SINGLE_BOARD_COLUMN,
  boardColumn
});

export const deleteBoardColumn = boardColumn => ({
  type: DELETE_BOARD_COLUMN,
  boardColumn
});

// thunk actions

export const fetchBoardColumn = boardId => dispatch =>
  Util.fetchBoardColumn(boardId)
  .then(boardColumn => dispatch(receiveSingleBoardColumn(boardColumn)));

export const createBoardColumn = (boardId, boardColumn) => dispatch =>
  Util.postBoardColumn(boardId, boardColumn)
  .then(boardColumn => dispatch(receiveSingleBoardColumn(boardColumn)));

export const updateBoardColumn = (boardColumnId, boardColumn) => dispatch =>
  Util.patchBoardColumn(boardColumnId, boardColumn)
  .then(boardColumn => dispatch(receiveSingleBoardColumn(boardColumn)));

export const destroyBoardColumn = boardColumnId => dispatch =>
  Util.deleteBoardColumn(boardColumnId)
  .then(boardColumn => dispatch(deleteBoardColumn(boardColumn)));
