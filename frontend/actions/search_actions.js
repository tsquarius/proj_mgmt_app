export const SEARCH_CARDS = 'SEARH_CARDS';


//search sample: {param: "tag", query: "finance"}
const searchCards = search => ({
  type: SEARCH_CARDS,
  search
});