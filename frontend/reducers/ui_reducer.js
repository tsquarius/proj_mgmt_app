import {combineReducers} from 'redux';
import forms from './forms_reducer';
import loader from './loading_reducer';

export default combineReducers({
  forms,
  loader
});