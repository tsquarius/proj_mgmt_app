import {
  RECEIVE_BOARDS, 
  RECEIVE_SINGLE_BOARD, 
  DELETE_BOARD
} from '../actions/board_actions';

import {
  RECEIVE_SINGLE_BOARD_COLUMN,
  DELETE_BOARD_COLUMN,
} from '../actions/board_column_actions';

const boardsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_BOARDS:
      return Object.assign({}, action.payload.boards);
    case RECEIVE_SINGLE_BOARD:
      return Object.assign({}, state, {[action.payload.board.id]: action.payload.board});
    case DELETE_BOARD:
      let deleteId = action.payload.board.id;
      delete newState[deleteId];
      return newState;
    case RECEIVE_SINGLE_BOARD_COLUMN:
      return Object.assign({}, state, action.payload.board);
    case DELETE_BOARD_COLUMN:
      return Object.assign({}, state, action.payload.board);
    default:
      return state;
  }
};

export default boardsReducer;