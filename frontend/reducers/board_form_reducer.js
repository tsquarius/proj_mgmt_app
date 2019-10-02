import {
  NEW_BOARD_FORM, 
  UPDATE_BOARD_FORM, 
  CLOSE_BOARD_FORM
} from '../actions/form_actions';

const _defaultBoardForm = {
  form: false,
  id: null
};

const boardFormReducer = (state = _defaultBoardForm, action) => {
  Object.freeze();

  switch(action.type) {
    case NEW_BOARD_FORM:
      return {form: 'new', id: null};
    case UPDATE_BOARD_FORM:
      return {form: 'update', id: action.id};
    default:
      return state;
  }

};

export default boardFormReducer;