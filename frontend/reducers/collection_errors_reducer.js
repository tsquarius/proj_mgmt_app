import {RECEIVE_COLLECTION_ERRORS} from '../actions/collection_actions';

const collectionErrorsReducer = (state=[], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_COLLECTION_ERRORS:
      return action.errors || ["Something went wrong here..."];
    default:
      return state;
  }
};

export default collectionErrorsReducer;
