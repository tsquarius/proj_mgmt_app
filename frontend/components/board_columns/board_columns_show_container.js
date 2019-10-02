import {connect} from 'react-redux'
import BoardColumnsShow from './board_columns_show';
import {
  fetchBoardColumns,
  createBoardColumn,
  destroyBoardColumn
} from '../../actions/board_column_actions';
import {boardColumnArray} from '../../reducers/selectors';


// need to pull in the forms reducer for this
const mapStateToProps = ({entities, ui}) => ({
  boardColumns: boardColumnArray(entities.boardColumns)
});

const mapDispatchToProps = dispatch => ({
  createColumn: boardColumn => dispatch(createBoardColumn(boardColumn)),
  fetchBoardColumns: boardId => dispatch(fetchBoardColumns(boardId)),
  destroyBoardColumn: boardColumnId => dispatch(destroyBoardColumn(boardColumnId))
});

export default connect(mapStateToProps,mapDispatchToProps)(BoardColumnsShow);