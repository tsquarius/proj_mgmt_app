import {connect} from 'react-redux';
import {renderUpdateBoardForm} from '../../actions/form_actions';
import {deleteBoard} from '../../actions/board_actions';
import BoardShow from './board_show';


const mapStateToProps = ({ui}) => ({
  formId: ui.forms.boards.id,
  active: ui.forms.boards.form
});

const mapDispatchToProps = dispatch => ({
  deleteBoard: boardId => dispatch(deleteBoard(boardId)),
  updateForm: boardId => dispatch(renderUpdateBoardForm(boardId))
});

export default connect(mapStateToProps,mapDispatchToProps)(BoardShow);