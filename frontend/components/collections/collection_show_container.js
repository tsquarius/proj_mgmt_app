import {connect} from 'react-redux';
import CollectionShow from './collection_show';
import {fetchBoards, createBoard} from '../../actions/board_actions';
import {fetchCollection, destroyCollection, updateCollection} from '../../actions/collection_actions';
import {reorderCards} from '../../actions/board_column_actions';
import {patchCard} from '../../actions/card_actions';

//need to pull bcId => cards mapping
const mapStateToProps = ({entities, ui}, {match}) => {
  return ({
    collection: entities.collections[match.params.collectionId],
    collectionId: match.params.collectionId,
    loading: ui.loader.loading,
    boardColumns: entities.boardColumns
  });
};


//import fetchCollection && then include the boards in here
const mapDispatchToProps = (dispatch) => ({
  fetchCollection: collectionId => dispatch(fetchCollection(collectionId)),
  fetchBoards: collectionId => dispatch(fetchBoards(collectionId)),
  deleteCollection: collectionId => dispatch(destroyCollection(collectionId)),
  updateCollection: (collection, collectionId) => dispatch(updateCollection(collection,collectionId)),
  newBoard: (collectionId, board) => dispatch(createBoard(collectionId, board)),
  //below are included for drag&drop features
  patchCard: (cardId, card) => dispatch(patchCard(cardId,card)),
  reorderCards: cardArr => dispatch(reorderCards(cardArr))

});

export default connect(mapStateToProps,mapDispatchToProps)(CollectionShow);