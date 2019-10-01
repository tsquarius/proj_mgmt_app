import * as Util from '../util/board_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_SINGLE_BOARD = 'RECEIVE_SINGLE_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';

//regular actions

export const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards
});

export const receiveBoard = board => ({
  type: RECEIVE_SINGLE_BOARD,
  board
});

export const removeBoard = board => ({
  type: DELETE_BOARD,
  board
});

//thunk actions

export const fetchBoards = collectionId => dispatch => Util.fetchBoards(collectionId)
  .then(boards => dispatch(receiveBoards(boards)));

export const fetchBoard = boardId => dispatch => Util.fetchBoard(boardId)
  .then(board => dispatch(receiveBoard(board)));

export const createBoard = (collectionId, board) => dispatch =>
  Util.postBoard(collectionId, board)
    .then(board => dispatch(receiveBoard(board)));

export const updateBoard = (boardId, board) => dispatch =>
  Util.patchBoard(boardId, board)
    .then(board => dispatch(receiveBoard(board)));

export const deleteBoard = boardId => dispatch =>
  Util.deleteBoard(boardId)
    .then(board => dispatch(removeBoard(board)));