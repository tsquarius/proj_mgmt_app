import * as Util from '../util/tags_util';

export const RECEIVE_TAG = 'RECEIVE_TAG';
export const DELETE_TAG = 'DELETE_TAG';

// actions

export const receiveTag = payload => ({
  type: RECEIVE_TAG,
  payload
});

export const deleteTag = payload => ({
  type: DELETE_TAG,
  payload
});


// thunk actions

export const fetchTag = tagId => dispatch => Util.fetchTag(tagId)
  .then(payload => dispatch(receiveTag(payload)));

export const addTag = (cardId, tag) => dispatch => Util.addTag(cardId, tag)
  .then(payload => dispatch(receiveTag(payload)));

export const destroyTag = tagId => dispatch => Util.deleteTag(tagId)
  .then(payload => dispatch(deleteTag(payload)));

  