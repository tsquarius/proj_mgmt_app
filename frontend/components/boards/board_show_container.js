import {connect} from 'react-redux';
import {deleteBoard, updateBoard, fetchBoard} from '../../actions/board_actions';
import {createBoardColumn} from '../../actions/board_column_actions';
import BoardShow from './board_show';


const mapStateToProps = ({entities, ui}, {boardId}) => ({
  board: entities.boards[boardId],
  loading: ui.loader.loading
});

const mapDispatchToProps = dispatch => ({
  deleteBoard: boardId => dispatch(deleteBoard(boardId)),
  updateBoard: (boardId, board) => dispatch(updateBoard(boardId, board)),
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  createColumn: (boardId, boardColumn) => dispatch(createBoardColumn(boardId, boardColumn)),
});

export default connect(mapStateToProps,mapDispatchToProps)(BoardShow);