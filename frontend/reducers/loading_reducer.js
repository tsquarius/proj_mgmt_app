import {
  START_LOADING_ALL_BOARDS, 
  RECEIVE_BOARDS, 
  RECEIVE_SINGLE_BOARD,
  DELETE_BOARD

} from '../actions/board_actions';

import {
  COLLECTION_LOADING,
  RECEIVE_COLLECTIONS,
  RECEIVE_SINGLE_COLLECTION,
  DELETE_COLLECTION
} from '../actions/collection_actions';

const initialState = {
  loading: false,
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOARDS:
      return Object.assign({}, state, { loading: false });
    case RECEIVE_SINGLE_BOARD:
      return Object.assign({}, state, { loading: false });
    case DELETE_BOARD:
      return Object.assign({}, state, { loading: false });
    case START_LOADING_ALL_BOARDS:
      return Object.assign({}, state, { loading: true });

    case COLLECTION_LOADING:
      return Object.assign({}, {loading: true});
    case RECEIVE_COLLECTIONS:
      return Object.assign({}, state, { loading: false });
    case RECEIVE_SINGLE_COLLECTION:
      return Object.assign({}, state, { loading: false });
    case DELETE_COLLECTION:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
};

export default loadingReducer;
