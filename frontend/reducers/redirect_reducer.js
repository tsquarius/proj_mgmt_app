import {RECEIVE_SINGLE_COLLECTION} from '../actions/collection_actions';

const redirectReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SINGLE_COLLECTION:
      return action.collection.id;
    default:
      return state;
  }
};

export default redirectReducer;