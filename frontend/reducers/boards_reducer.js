import {
  RECEIVE_BOARDS, 
  RECEIVE_SINGLE_BOARD, 
  DELETE_BOARD
} from '../actions/board_actions';


const boardsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_BOARDS:
      return Object.assign({}, action.boards);
    case RECEIVE_SINGLE_BOARD:
      return Object.assign({}, state, {[action.board.id]: action.board});
    case DELETE_BOARD:
      let deleteId = action.board.id;
      delete newState[deleteId];
      return newState;
    default:
      return state;
  }
};

export default boardsReducer;