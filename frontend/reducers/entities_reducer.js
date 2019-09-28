import {combineReducers} from 'redux';

import users from './users_reducer';
import collections from './collections_reducer';

export default combineReducers({
  users,
  collections
});