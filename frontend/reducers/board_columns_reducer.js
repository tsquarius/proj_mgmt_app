import {
  RECEIVE_SINGLE_BOARD_COLUMN,
  DELETE_BOARD_COLUMN
} from '../actions/board_column_actions';

import {RECEIVE_BOARDS} from '../actions/board_actions';


const boardColumnsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_BOARDS:
      return Object.assign({}, action.payload.boardColumns);
    case RECEIVE_SINGLE_BOARD_COLUMN:
      let bcId = action.boardColumn.id;
      return Object.assign({}, state, {[bcId]: action.boardColumn});
    case DELETE_BOARD_COLUMN:
      let deleteId = action.boardColumn.id;
      delete newState[deleteId];
      return newState;
    default:
      return state;
  }
};

export default boardColumnsReducer;