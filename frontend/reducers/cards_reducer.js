import {RECEIVE_BOARDS} from '../actions/board_actions';
import {
  RECEIVE_CARD, 
  DELETE_CARD,
  RECEIVE_CARDS
} from '../actions/card_actions';
import {
  RECEIVE_SINGLE_COMMENT,
  DELETE_COMMENT
} from '../actions/comment_actions';
import {
  RECEIVE_TAG,
  DELETE_TAG
} from '../actions/tag_actions';


const cardsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_BOARDS:
      return action.payload.cards || {};
    case RECEIVE_CARDS:
      return action.payload.cards;
    case RECEIVE_CARD:
      return Object.assign({}, state, {[action.payload.card.id]: action.payload.card});
    case DELETE_CARD:
      const deleteId = action.payload.card.id;
      delete newState[deleteId];
      return newState;
    case RECEIVE_SINGLE_COMMENT:
      return Object.assign({}, state, {[action.payload.card.id]: action.payload.card});
    case DELETE_COMMENT:
      return Object.assign({}, state, { [action.payload.card.id]: action.payload.card });
    case RECEIVE_TAG:
      return Object.assign({}, state, { [action.payload.card.id]: action.payload.card });
    case DELETE_TAG:
      return Object.assign({}, state, { [action.payload.card.id]: action.payload.card });
    default:
      return state;
  }
};

export default cardsReducer;