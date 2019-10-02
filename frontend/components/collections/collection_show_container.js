import {connect} from 'react-redux';
import CollectionShow from './collection_show';
import {fetchBoards, deleteBoard} from '../../actions/board_actions';
import {boardArray} from '../../reducers/selectors';
import {renderNewBoardForm} from '../../actions/form_actions';


const mapStateToProps = ({entities, ui}, {match}) => ({
  collection: entities.collections[match.params.collectionId],
  boards: boardArray(entities.boards),
  collectionId: match.params.collectionId,
  activeBoardForm: ui.forms.boards.form
});


//import fetchCollection && then include the boards in here
const mapDispatchToProps = dispatch => ({
  fetchBoards: collectionId => dispatch(fetchBoards(collectionId)),
  deleteBoard: boardId => dispatch(deleteBoard(boardId)),
  newForm: () => dispatch(renderNewBoardForm()),
});

export default connect(mapStateToProps,mapDispatchToProps)(CollectionShow);