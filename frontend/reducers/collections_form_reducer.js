import {
  COLLECTION_DETAILS,
  CLOSE_COLLECTION_DETAILS
} from '../actions/form_actions';

const _defaultForm = {
  active: false,
};

const collectionsFormReducer = (state = _defaultForm, action) => {
  Object.freeze(state);

  switch(action.type) {
    case COLLECTION_DETAILS:
      return {active: true};
    case CLOSE_COLLECTION_DETAILS:
      return _defaultForm;
    default:
      return state;
  }

};

export default collectionsFormReducer;