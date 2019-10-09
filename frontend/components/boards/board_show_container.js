import {connect} from 'react-redux';
import {renderUpdateBoardForm} from '../../actions/form_actions';
import {deleteBoard, updateBoard, fetchBoard} from '../../actions/board_actions';
import {createBoardColumn} from '../../actions/board_column_actions';
import BoardShow from './board_show';


const mapStateToProps = ({entities, ui}, {boardId}) => ({
  board: entities.boards[boardId],
  formId: ui.forms.boards.id,
  active: ui.forms.boards.form,
  loading: ui.loader.loading
});

const mapDispatchToProps = dispatch => ({
  deleteBoard: boardId => dispatch(deleteBoard(boardId)),
  updateForm: boardId => dispatch(renderUpdateBoardForm(boardId)),
  updateBoard: (boardId, board) => dispatch(updateBoard(boardId, board)),
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  createColumn: (boardId, boardColumn) => dispatch(createBoardColumn(boardId, boardColumn)),
});

export default connect(mapStateToProps,mapDispatchToProps)(BoardShow);