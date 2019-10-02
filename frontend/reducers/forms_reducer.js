import {combineReducers} from 'redux';
import collections from './collections_form_reducer';
import boards from './board_form_reducer';

export default combineReducers({
  collections,
  boards
});