import { RECEIVE_TAG, DELETE_TAG } from '../actions/tag_actions';
import { RECEIVE_BOARDS } from '../actions/board_actions';

const tagsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  let tag;

  switch(action.type) {
    case RECEIVE_BOARDS:
      return action.payload.tags || {};
    case RECEIVE_TAG:
      tag = action.payload.tag;
      return Object.assign({}, state, {[tag.id]: tag} );
    case DELETE_TAG:
      tag = action.payload.tag;
      delete newState[tag.id];
      return newState;
    default:
      return state;
  }
};

export default tagsReducer;