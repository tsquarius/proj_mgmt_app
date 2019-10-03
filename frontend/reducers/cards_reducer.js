import {RECEIVE_BOARDS} from '../actions/board_actions';
import {RECEIVE_CARD, DELETE_CARD} from '../actions/card_actions';


const cardsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_BOARDS:
      return action.payload.cards;
    case RECEIVE_CARD:
      return Object.assign({}, state, {[action.card.id]: action.card});
    case DELETE_CARD:
      const deleteId = action.card.id;
      delete newState[deleteId];
      return newState;
    default:
      return state;
  }
};

export default cardsReducer;