// Reminder to refactor all the array converters into one method


export const objToArray = myObject => {
  if (Object.keys(myObject).length === 0) return [];
  const arr = Object.keys(myObject).map(id => myObject[id]);
  return arr;
};
