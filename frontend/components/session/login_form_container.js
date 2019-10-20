import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = ({errors}) => ({
  errors: errors.session,
  type: 'Log In',
  oppType: 'Sign Up'
});

const mapDispatchToProps = (dispatch) => ({
  submit: user => dispatch(login(user)),
  login: user => dispatch(login(user))
});


export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);