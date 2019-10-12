import {combineReducers} from 'redux';

import users from './users_reducer';
import collections from './collections_reducer';
import boards from './boards_reducer';
import boardColumns from './board_columns_reducer';
import cards from './cards_reducer';
import comments from './comments_reducer';
import tags from './tags_reducer';

export default combineReducers({
  users,
  collections,
  boards,
  boardColumns,
  cards,
  comments,
  tags
});