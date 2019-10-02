import {connect} from 'react-redux';
import {createBoard, updateBoard} from '../../actions/board_actions';
import BoardForm from './board_form';
import {closeBoardForm} from '../../actions/form_actions';

const mapStateToProps = ({ui}, {collectionId, board}) => ({
  collectionId: collectionId,
  board: board,
  activeForm: ui.forms.boards.form
});

const mapDispatchToProps = dispatch => ({
  createBoard: (collectionId, board) => dispatch(createBoard(collectionId, board)),
  updateBoard: (boardId, board) => dispatch(updateBoard(boardId, board)),
  closeForm: () => dispatch(closeBoardForm())
});

export default connect(mapStateToProps,mapDispatchToProps)(BoardForm);