import {
  SEARCH_CARDS,
  CLEAR_SEARCH
} from '../actions/search_actions';

const _default = ({
  param: undefined,
  query: undefined
});


const searchReducer = (state=_default, action) => {
  Object.freeze(state);

  switch(action.type) {
    case SEARCH_CARDS:
      return {
        param: action.search.param, 
        query: action.search.query };
    case CLEAR_SEARCH:
      return _default;
    default:
      return state;
  }

};

export default searchReducer;