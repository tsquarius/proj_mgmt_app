import * as Util from '../util/board_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_SINGLE_BOARD = 'RECEIVE_SINGLE_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';
export const START_LOADING_ALL_BOARDS = 'START_LOADING_ALL_BOARDS';

//regular actions

export const receiveBoards = payload => ({
  type: RECEIVE_BOARDS,
  payload
});

export const receiveBoard = payload => ({
  type: RECEIVE_SINGLE_BOARD,
  payload
});

export const removeBoard = payload => ({
  type: DELETE_BOARD,
  payload
});

// loader

export const startLoadingAllBoards = () => ({
  type: START_LOADING_ALL_BOARDS
});


//thunk actions

export const fetchBoards = collectionId => dispatch => { 
  return Util.fetchBoards(collectionId)
    .then(payload => dispatch(receiveBoards(payload)));
};

export const fetchBoard = boardId => dispatch => Util.fetchBoard(boardId)
  .then(payload => dispatch(receiveBoard(payload)));

export const createBoard = (collectionId, board) => dispatch =>
  Util.postBoard(collectionId, board)
    .then(board => dispatch(receiveBoard(board)));

export const updateBoard = (boardId, board) => dispatch =>
  Util.patchBoard(boardId, board)
    .then(board => dispatch(receiveBoard(board)));

export const deleteBoard = boardId => dispatch =>
  Util.deleteBoard(boardId)
    .then(payload => dispatch(removeBoard(payload)));