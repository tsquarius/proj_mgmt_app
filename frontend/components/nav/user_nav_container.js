import {connect} from 'react-redux';
import UserNav from './user_nav';
import {logout} from '../../actions/session_actions';

const mapStateToProps = ({entities, session}) => ({
  currentUser: entities.users[session.userId]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps,mapDispatchToProps)(UserNav);