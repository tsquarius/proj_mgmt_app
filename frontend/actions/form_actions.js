export const NEW_COLLECTION_FORM = 'OPEN_COLLECTION_FORM';
export const UPDATE_COLLECTION_FORM = 'UPDATE_COLLECTION_FORM';
export const CLOSE_COLLECTION_FORM = 'CLOSE_COLLECTION_FORM';

export const NEW_BOARD_FORM = 'NEW_BOARD_FORM';
export const UPDATE_BOARD_FORM = 'UPDATE_BOARD_FORM';
export const CLOSE_BOARD_FORM = 'CLOSE_BOARD_FORM';

export const NEW_CARD_FORM = 'NEW_CARD_FORM';
export const UPDATE_CARD_FORM = 'UPDATE_CARD_FORM';
export const CLOSE_CARD_FORM = 'CLOSE_CARD_FORM';


// formType = update/new
// if update, include collection/board id

// collections
export const renderNewCollectionForm = () => ({
  type: NEW_COLLECTION_FORM,
});

export const renderUpdateCollectionForm = id => ({
  type: UPDATE_COLLECTION_FORM,
  id
});

export const closeCollectionForm = () => ({
  type: CLOSE_COLLECTION_FORM
});

// boards
export const renderNewBoardForm = () => ({
  type: NEW_BOARD_FORM,
});

export const renderUpdateBoardForm = id => ({
  type: UPDATE_BOARD_FORM,
  id
});

export const closeBoardForm = () => ({
  type: CLOSE_BOARD_FORM
});

// cards

export const renderNewCardForm = bcId => ({
  type: NEW_CARD_FORM,
  bcId
});

export const renderUpdateCardForm = id => ({
  type: UPDATE_CARD_FORM,
  id
});

export const closeCardForm = () => ({
  type: CLOSE_CARD_FORM
});