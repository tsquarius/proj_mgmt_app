import * as Util from '../util/collection_util';

export const RECEIVE_COLLECTIONS = 'RECEIVE_COLLECTION';
export const RECEIVE_SINGLE_COLLECTION = 'RECEIVE_SINGLE_COLLECTION';
export const DELETE_COLLECTION = 'DELETE_COLLECTION';
export const RECEIVE_COLLECTION_ERRORS = 'RECEIVE_COLLECTION_ERRORS';


//regular actions
export const receiveCollections = collections => ({
  type: RECEIVE_COLLECTIONS,
  collections
});

export const receiveSingleCollection = collection => ({
  type: RECEIVE_SINGLE_COLLECTION,
  collection
});

export const deleteCollection = collection => ({
  type: DELETE_COLLECTION,
  collection
});

export const receiveErrors = errors => ({
  type: RECEIVE_COLLECTION_ERRORS,
  errors
});

//thunk actions
export const fetchCollections = userId => dispatch => Util.fetchCollections(userId)
  .then(collections => dispatch(receiveCollections(collections)))
  .fail(errs => dispatch(receiveErrors(errs.responseJSON)));

export const fetchCollection = collectionId => dispatch => Util.fetchCollection(collectionId)
  .then(collection => dispatch(receiveSingleCollection(collection)))
  .fail(errs => dispatch(receiveErrors(errs.responseJSON)));

export const postCollection = collection => dispatch => Util.postCollection(collection)
  .then(collection => dispatch(receiveSingleCollection(collection)))
  .fail(errs => dispatch(receiveErrors(errs.responseJSON)));

export const updateCollection = collection => dispatch => Util.patchCollection(collection)
  .then(collection => dispatch(receiveSingleCollection(collection)))
  .fail(errs => dispatch(receiveErrors(errs.responseJSON)));

export const destroyCollection = collection => dispatch => Util.destroyCollection(collection)
  .then(collection => dispatch(deleteCollection(collection)))
  .fail(errs => dispatch(receiveErrors(errs.responseJSON)));


window.fetchCollections = fetchCollections;
window.fetchCollections = fetchCollection;