import {connect} from 'react-redux';
import {postCollection} from '../../actions/collection_actions';
import CollectionForm from './collection_form';

const mapStateToProps = ({entities, session}) => ({
  currentUser: entities.users[session.userId],
  type: 'New Collection'
});

const mapDispatchToProps = dispatch => ({
  submitCollection: collection => dispatch(postCollection(collection))
});

export default connect(mapStateToProps,mapDispatchToProps)(CollectionForm);