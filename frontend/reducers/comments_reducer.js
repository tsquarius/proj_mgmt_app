import { RECEIVE_BOARDS } from '../actions/board_actions';
import {
  RECEIVE_COMMENTS, 
  RECEIVE_SINGLE_COMMENT, 
  DELETE_COMMENT
} from '../actions/comment_actions';
import { RECEIVE_CARDS } from '../actions/card_actions';

const commentsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_BOARDS:
      return action.payload.comments || {};
    case RECEIVE_CARDS:
      return action.payload.comments || {};
    case RECEIVE_COMMENTS:
      return Object.assign(state, action.comments);
    case RECEIVE_SINGLE_COMMENT:
      return Object.assign({}, state, {[action.payload.comment.id]: action.payload.comment});
    case DELETE_COMMENT:
      targetId = action.payload.comment.id;
      delete newState[targetId];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;