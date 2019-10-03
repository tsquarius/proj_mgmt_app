import {connect} from 'react-redux';
import {updateBoard} from '../../actions/board_actions';
import BoardForm from './board_form';
import {closeBoardForm} from '../../actions/form_actions';

const mapStateToProps = ({ui}, {collectionId, board}) => ({
  collectionId: collectionId,
  board: board,
  activeForm: ui.forms.boards.form
});

const mapDispatchToProps = dispatch => ({
  updateBoard: (boardId, board) => dispatch(updateBoard(boardId, board)),
  closeForm: () => dispatch(closeBoardForm())
});

export default connect(mapStateToProps,mapDispatchToProps)(BoardForm);