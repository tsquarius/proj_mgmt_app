import {connect} from 'react-redux';
import CollectionShow from './collection_show';
import {fetchBoards, deleteBoard, createBoard} from '../../actions/board_actions';
import {objToArray} from '../../reducers/selectors';


const mapStateToProps = ({entities, ui}, {match}) => ({
  collection: entities.collections[match.params.collectionId],
  boards: objToArray(entities.boards),
  collectionId: match.params.collectionId,
  activeBoardForm: ui.forms.boards.form,
});


//import fetchCollection && then include the boards in here
const mapDispatchToProps = dispatch => ({
  fetchBoards: collectionId => dispatch(fetchBoards(collectionId)),
  deleteBoard: boardId => dispatch(deleteBoard(boardId)),
  newBoard: (collectionId, board) => dispatch(createBoard(collectionId, board)),
});

export default connect(mapStateToProps,mapDispatchToProps)(CollectionShow);