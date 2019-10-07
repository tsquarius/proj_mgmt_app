import {connect} from 'react-redux';
import {
  createBoardColumn,
  destroyBoardColumn,
  fetchBoardColumns
} from '../../actions/board_column_actions';
import {boardColumnArray} from '../../reducers/selectors';
import BoardColumnsShow from './board_columns_show';

import {patchCard} from '../../actions/card_actions';


// need to pull in the forms reducer for this
const mapStateToProps = ({entities, ui}, {boardId}) => ({
  boardColumns: boardColumnArray(entities.boardColumns, boardId)
});

const mapDispatchToProps = dispatch => ({
  fetchBoardColumns: boardId => dispatch(fetchBoardColumns(boardId)),
  createColumn: (boardId, boardColumn) => dispatch(createBoardColumn(boardId, boardColumn)),
  destroyBoardColumn: boardColumnId => dispatch(destroyBoardColumn(boardColumnId)),
  patchCard: (cardId, card) => dispatch(patchCard(cardId, card)),
});

export default connect(mapStateToProps,mapDispatchToProps)(BoardColumnsShow);