import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = ({errors}) => ({
  errors: errors.session,
  type: 'Sign Up',
  oppType: 'Log In'
});

const mapDispatchToProps = (dispatch) => ({
  submit: user => dispatch(signup(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);