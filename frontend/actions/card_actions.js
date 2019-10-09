import * as Util from '../util/card_util';

export const RECEIVE_CARD = 'RECEIVE_CARD';
export const DELETE_CARD = 'DELETE_CARD';

// regular actions

export const receiveCard = payload => ({
  type: RECEIVE_CARD,
  payload
});

export const deleteCard = payload => ({
  type: DELETE_CARD,
  payload
});


// thunk actions

export const fetchCard = cardId => dispatch => Util.fetchCard(cardId)
  .then(payload => dispatch(receiveCard(payload)));

export const postCard = (bcId, card) => dispatch => Util.postCard(bcId, card)
  .then(payload => dispatch(receiveCard(payload)));

export const patchCard = (cardId, card) => dispatch => Util.patchCard(cardId, card)
  .then(payload => dispatch(receiveCard(payload)));

export const destroyCard = cardId => dispatch => Util.deleteCard(cardId)
  .then(payload => dispatch(deleteCard(payload)));