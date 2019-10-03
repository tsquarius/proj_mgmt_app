import {
  NEW_CARD_FORM, 
  UPDATE_CARD_FORM, 
  CLOSE_CARD_FORM} from '../actions/form_actions';

const _defaultForm = {
  form: false,
  id: null,
  bcId: null
};

const cardFormReducer = (state=_defaultForm, action) => {
  Object.freeze(state);

  switch(action.type) {
    case NEW_CARD_FORM:
      return {form: 'new', id: null, bcId: action.bcId};
    case UPDATE_CARD_FORM:
      return {form: 'update', id: action.id, bcId: null};
    case CLOSE_CARD_FORM:
      return _defaultForm;
    default:
      return state;
  }
};

export default cardFormReducer;