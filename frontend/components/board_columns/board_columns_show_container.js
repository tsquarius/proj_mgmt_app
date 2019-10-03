import {connect} from 'react-redux';
import {
  createBoardColumn,
  destroyBoardColumn
} from '../../actions/board_column_actions';
import {boardColumnArray} from '../../reducers/selectors';
import BoardColumnsShow from './board_columns_show';

// need to pull in the forms reducer for this
const mapStateToProps = ({entities, ui}, {boardId}) => ({
  boardColumns: boardColumnArray(entities.boardColumns, boardId)
});

const mapDispatchToProps = dispatch => ({
  createColumn: boardColumn => dispatch(createBoardColumn(boardColumn)),
  destroyBoardColumn: boardColumnId => dispatch(destroyBoardColumn(boardColumnId)),

});

export default connect(mapStateToProps,mapDispatchToProps)(BoardColumnsShow);