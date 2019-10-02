import {connect} from 'react-redux';
import CollectionShow from './collection_show';
import {fetchBoards, deleteBoard} from '../../actions/board_actions';
import {boardArray} from '../../reducers/selectors';


const mapStateToProps = ({entities}, {match}) => ({
  collection: entities.collections[match.params.collectionId],
  boards: boardArray(entities.boards),
  collectionId: match.params.collectionId
});


//import fetchCollection && then include the boards in here
const mapDispatchToProps = dispatch => ({
  fetchBoards: collectionId => dispatch(fetchBoards(collectionId)),
  deleteBoard: boardId => dispatch(deleteBoard(boardId))
});

export default connect(mapStateToProps,mapDispatchToProps)(CollectionShow);