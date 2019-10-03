import * as Util from '../util/card_util';

export const RECEIVE_CARD = 'RECEIVE_CARD';
export const DELETE_CARD = 'DELETE_CARD';

// regular actions

export const receiveCard = card => ({
  type: RECEIVE_CARD,
  card
});

export const deleteCard = card => ({
  type: DELETE_CARD,
  card
});


// thunk actions

export const fetchCard = cardId => dispatch => Util.fetchCard(cardId)
  .then(card => dispatch(receiveCard(card)));

export const postCard = (bcId, card) => dispatch => Util.postCard(bcId, card)
  .then(card => dispatch(receiveCard(card)));

export const patchCard = (cardId, card) => dispatch => Util.patchCard(cardId, card)
  .then(card => dispatch(receiveCard(card)));

export const destroyCard = cardId => dispatch => Util.deleteCard(cardId)
  .then(card => dispatch(deleteCard(card)));