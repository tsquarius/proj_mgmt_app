export const CLOSE_COLLECTION_DETAILS = 'CLOSE_COLLECTION_DETAILS';
export const COLLECTION_DETAILS = 'COLLECTION_DETAILS';

export const NEW_BOARD_FORM = 'NEW_BOARD_FORM';
export const UPDATE_BOARD_FORM = 'UPDATE_BOARD_FORM';
export const CLOSE_BOARD_FORM = 'CLOSE_BOARD_FORM';

export const NEW_CARD_FORM = 'NEW_CARD_FORM';
export const UPDATE_CARD_FORM = 'UPDATE_CARD_FORM';
export const CLOSE_CARD_FORM = 'CLOSE_CARD_FORM';


// collections
export const renderCollectionDetails = () => ({
  type: COLLECTION_DETAILS
});

export const closeCollectionDetails = () => ({
  type: CLOSE_COLLECTION_DETAILS
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