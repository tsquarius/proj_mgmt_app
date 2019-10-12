export const fetchCard = cardId => (
  $.ajax({
    method: 'GET',
    url: `/api/cards/${cardId}`
  })
);

export const postCard = (bcId, card) => (
  $.ajax({
    method: 'POST',
    url: `/api/board_columns/${bcId}/cards`,
    data: {card}
  })
);

export const patchCard = (cardId, card) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/cards/${cardId}`,
    data: {card}
  })
);

export const deleteCard = cardId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/cards/${cardId}`
  })
);
