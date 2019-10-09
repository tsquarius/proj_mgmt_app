import {connect} from 'react-redux';
import {
  destroyBoardColumn,
  fetchBoardColumn,
  updateBoardColumn,
} from '../../actions/board_column_actions';
import { renderNewCardForm } from '../../actions/form_actions';
import BoardColumnsShow from './board_columns_show';



// need to pull in the forms reducer for this
const mapStateToProps = ({entities, ui}, {bcId}) => ({
  boardColumn: entities.boardColumns[bcId],
  activeForm: ui.forms.cards
});

const mapDispatchToProps = dispatch => ({
  fetchBoardColumn: boardId => dispatch(fetchBoardColumn(boardId)),
  destroyBoardColumn: boardColumnId => dispatch(destroyBoardColumn(boardColumnId)),
  updateBoardColumn: (boardColumnId, boardColumn) => dispatch(updateBoardColumn(boardColumnId, boardColumn)),

  newCard: (bcId) => dispatch(renderNewCardForm(bcId))
});

export default connect(mapStateToProps,mapDispatchToProps)(BoardColumnsShow);