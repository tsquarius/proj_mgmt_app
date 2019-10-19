import {connect} from 'react-redux';
import {
  destroyBoardColumn,
  updateBoardColumn,
} from '../../actions/board_column_actions';
import { renderNewCardForm } from '../../actions/form_actions';
import BoardColumnsShow from './board_columns_show';
import {searchFilter} from '../../reducers/selectors';

const mapStateToProps = ({entities, ui}, {bcId}) => {
  let search = searchFilter(entities.cards, entities.tags, ui.search);

  return ({
    filter: search,
    boardColumn: entities.boardColumns[bcId],
    activeForm: ui.forms.cards
  });
};

const mapDispatchToProps = dispatch => ({
  destroyBoardColumn: boardColumnId => dispatch(destroyBoardColumn(boardColumnId)),
  updateBoardColumn: (boardColumnId, boardColumn) => dispatch(updateBoardColumn(boardColumnId, boardColumn)),
  newCard: (bcId) => dispatch(renderNewCardForm(bcId))
});

export default connect(mapStateToProps,mapDispatchToProps)(BoardColumnsShow);