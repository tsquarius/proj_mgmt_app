export const SEARCH_CARDS = 'SEARCH_CARDS';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';


//search sample: {param: "tag", query: "finance"}
export const searchCards = search => ({
  type: SEARCH_CARDS,
  search
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH
});