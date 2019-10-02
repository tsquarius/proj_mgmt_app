import {NEW_COLLECTION_FORM, UPDATE_COLLECTION_FORM, CLOSE_COLLECTION_FORM} from '../actions/form_actions';

const _defaultForm = {
  form: false,
  id: null
}

const collectionsFormReducer = (state = _defaultForm, action) => {
  Object.freeze(state);

  switch(action.type) {
    case NEW_COLLECTION_FORM:
      return {form: 'new', id: null};
    case UPDATE_COLLECTION_FORM:
      return {form: 'update', id: action.id};
    case CLOSE_COLLECTION_FORM:
      return _defaultForm;
    default:
      return state;
  }

};

export default collectionsFormReducer;