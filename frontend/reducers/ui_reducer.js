import {combineReducers} from 'redux';
import forms from './forms_reducer';
import loader from './loading_reducer';
import redirect from './redirect_reducer';

export default combineReducers({
  forms,
  loader,
  redirect
});