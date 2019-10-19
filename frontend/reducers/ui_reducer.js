import {combineReducers} from 'redux';
import forms from './forms_reducer';
import loader from './loading_reducer';
import redirect from './redirect_reducer';
import search from './search_reducer';

export default combineReducers({
  search,
  forms,
  loader,
  redirect
});