import {
  RECEIVE_COLLECTIONS, 
  RECEIVE_SINGLE_COLLECTION, 
  DELETE_COLLECTION
} from '../actions/collection_actions';

import {
  RECEIVE_SINGLE_BOARD,
  DELETE_BOARD
} from '../actions/board_actions';

const collectionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  let targetCollectionId;

  switch(action.type) {
    case RECEIVE_COLLECTIONS:
      return action.collections;
    case RECEIVE_SINGLE_COLLECTION:
      return Object.assign({}, state, {[action.collection.id]: action.collection});
    case DELETE_COLLECTION:
      targetCollectionId = action.collection.id;
      delete newState[targetCollectionId];
      return newState;
    case RECEIVE_SINGLE_BOARD:
      return Object.assign({}, state, action.payload.collection);
    case DELETE_BOARD:
      return Object.assign({}, state, action.payload.collection);
    default:
      return state;
  }
};

export default collectionsReducer;