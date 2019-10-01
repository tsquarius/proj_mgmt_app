import {
  RECEIVE_COLLECTIONS, 
  RECEIVE_SINGLE_COLLECTION, 
  DELETE_COLLECTION} from '../actions/collection_actions';


const collectionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_COLLECTIONS:
      return Object.assign({}, state, action.collections);
    case RECEIVE_SINGLE_COLLECTION:
      return Object.assign({}, state, {[action.collection.id]: action.collection});
    case DELETE_COLLECTION:
      let deleteId = action.collection.id;
      newState = Object.assign({}, state);
      delete newState[deleteId];
      return newState;
    default:
      return state;
  }
};

export default collectionsReducer;