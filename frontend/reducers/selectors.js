export const collectionArray = collections => {
  if (Object.keys(collections).length === 0) return [];
  const arr = Object.keys(collections).map(colId => collections[colId]);
  return arr;
};

export const boardArray = boards => {
  if (Object.keys(boards).length === 0) return [];
  const arr = [];
  Object.keys(boards).forEach(boardId => {
    const curBoard = boards[boardId];
    arr[curBoard.order] = curBoard;
  });

  return arr;

};