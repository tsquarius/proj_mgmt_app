import * as Util from '../util/board_columns_util';

export const RECEIVE_BOARD_COLUMNS = 'RECEIVE_BOARD_COLUMNS';
export const RECEIVE_SINGLE_BOARD_COLUMN = 'RECEIVE_SINGLE_BOARD_COLUMN';
export const DELETE_BOARD_COLUMN = 'DELETE_BOARD_COLUMN';
export const REORDER_CARDS = 'REORDER_CARDS';


// regular actions
export const receiveBoardColumns = boardColumns => ({
  type: RECEIVE_BOARD_COLUMNS,
  boardColumns
});

export const receiveSingleBoardColumn = payload => ({
  type: RECEIVE_SINGLE_BOARD_COLUMN,
  payload
});

export const deleteBoardColumn = payload => ({
  type: DELETE_BOARD_COLUMN,
  payload
});


// cardArray format: {id: bcId, cards: [array]}
export const reorderCards = cardArray => ({
  type: REORDER_CARDS,
  cardArray
});

// thunk actions

export const fetchBoardColumns = boardId => dispatch =>
  Util.fetchBoardColumns(boardId)
  .then(boardColumns => dispatch(receiveBoardColumns(boardColumns)));

export const fetchBoardColumn = boardId => dispatch =>
  Util.fetchBoardColumn(boardId)
  .then(payload => dispatch(receiveSingleBoardColumn(payload)));

export const createBoardColumn = (boardId, boardColumn) => dispatch =>
  Util.postBoardColumn(boardId, boardColumn)
  .then(payload => dispatch(receiveSingleBoardColumn(payload)));

export const updateBoardColumn = (boardColumnId, boardColumn) => dispatch =>
  Util.patchBoardColumn(boardColumnId, boardColumn)
  .then(payload => dispatch(receiveSingleBoardColumn(payload)));

export const destroyBoardColumn = boardColumnId => dispatch =>
  Util.deleteBoardColumn(boardColumnId)
  .then(payload => dispatch(deleteBoardColumn(payload)));
