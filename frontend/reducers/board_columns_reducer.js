import {
  RECEIVE_SINGLE_BOARD_COLUMN,
  DELETE_BOARD_COLUMN,
  RECEIVE_BOARD_COLUMNS,
  REORDER_CARDS
} from '../actions/board_column_actions';

import {
  RECEIVE_CARD,
  DELETE_CARD
} from '../actions/card_actions';

import {RECEIVE_BOARDS} from '../actions/board_actions';

const boardColumnsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  let bcId;

  switch(action.type) {
    case RECEIVE_BOARDS:
      return Object.assign({}, action.payload.boardColumns);
    case RECEIVE_BOARD_COLUMNS:
      return Object.assign({}, action.boardColumns);
    case RECEIVE_SINGLE_BOARD_COLUMN:
      bcId = action.payload.boardColumn.id;
      return Object.assign({}, state, {[bcId]: action.payload.boardColumn});
    case DELETE_BOARD_COLUMN:
      bcId = action.payload.boardColumn.id;
      delete newState[bcId];
      return newState;
    case RECEIVE_CARD:
      return Object.assign({}, state, action.payload.boardColumn);
    case DELETE_CARD:
      return Object.assign({}, state, action.payload.boardColumn);
    case REORDER_CARDS:
      bcId = action.cardArray.id; 
      newState[bcId].cards = action.cardArray.cards;
      return newState;
    default:
      return state;
  }
};

export default boardColumnsReducer;

