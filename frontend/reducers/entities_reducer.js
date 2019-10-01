import {combineReducers} from 'redux';

import users from './users_reducer';
import collections from './collections_reducer';
import boards from './boards_reducer';

export default combineReducers({
  users,
  collections,
  boards
});