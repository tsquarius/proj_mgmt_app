export const objToArray = myObject => {
  if (Object.keys(myObject).length === 0) return [];
  const arr = Object.keys(myObject).map(id => myObject[id]);
  return arr;
};

export const searchFilter = (cards, tags, search) => {
  if (!search.param || !search.query || search.query.length === 0 || !cards ) {
    return undefined;
  }

  const query = search.query.toLowerCase();
  const param = search.param;

  if (param === 'all') {
    let tagFilter = filterObjForIds(tags, 'tag', query);
    let cardFilter = filterObjForIds(cards, 'title', query);
    return Array.from(new Set(tagFilter.concat(cardFilter)));
  } else if (param === 'tag') {
    return filterObjForIds(tags, param, query);
  } else if (param === 'title') {
    return filterObjForIds(cards, param, query);
  }
};

// helper function
const filterObjForIds = (obj, param, query) => {
  let keys = Object.keys(obj);
  let filterIds = [];

  if (param === 'tag') { 
    keys.forEach(id => {
      const name = obj[id].name.toLowerCase();
      if (name.startsWith(query)) {
        filterIds.push(obj[id].card_id);
      }
    });
    return filterIds;

  } else if (param === 'title') {
    keys.forEach(id => {
      const title = obj[id].title.toLowerCase();
      if (title.startsWith(query)) {
        filterIds.push(obj[id].id);
      }
    });
    return filterIds;
  }
};
