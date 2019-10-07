// Reminder to refactor all the array converters into one method

export const objToArray = myObject => {
  if (Object.keys(myObject).length === 0) return [];
  const arr = Object.keys(myObject).map(id => myObject[id]);
  return arr;
};

export const boardColumnArray = (boardColumns, boardId) => {
  if (Object.keys(boardColumns).length === 0) return [];
  const arr = Object.keys(boardColumns).map(bcId => boardColumns[bcId]);
  return arr.filter(obj => { return obj.board_id === boardId; });
};

export const cardColumnArray = (cards, bcId) => {
  let arr = [];
  let cardsArr = objToArray(cards);
  
  cardsArr.forEach(obj => {
    if (obj.board_column_id === bcId) {
      const position = obj.order;
      arr[position] = obj;
    }
  });
  
  return arr;
};