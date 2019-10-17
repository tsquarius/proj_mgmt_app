export const dateConverter = date => {
  let convertedDate = new Date(date);
  convertedDate.setDate(convertedDate.getDate() + 1);
  return convertedDate;
};

export const daysDifference = (date2, date1) => {
  const cardDate = date2.getTime();
  const todayDate = date1.getTime();

  return parseInt((cardDate - todayDate) / (24 * 3600 * 1000));
};

export const objLength = obj => {
  return Object.keys(obj).length;
};