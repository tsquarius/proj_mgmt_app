import {
  RECEIVE_SINGLE_BOARD_COLUMN,
  DELETE_BOARD_COLUMN,
  RECEIVE_BOARD_COLUMNS
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
      bcId = action.boardColumn.id;
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


//    case RECEIVE_CARD:
// bcId = action.card.board_column_id;
// newState[bcId].ordered_cards = action.card.ordered_cards;
// return newState;
//     case DELETE_CARD:
// bcId = action.card.board_column_id;

// const cardArrayFilter = newState[bcId].ordered_cards
//   .filter(cardId => cardId !== action.card.id);

// newState.ordered_cards = cardArrayFilter;
// return newState;