import { connect } from 'react-redux';
import { updateCollection } from '../../actions/collection_actions';
import CollectionForm from './collection_form';

const mapStateToProps = ({ entities, session, errors }, {match}) => ({
  currentUser: entities.users[session.userId],
  type: 'Edit',
  errors: errors.collections,
  collection: entities.collections[match.params.collectionId]
});

const mapDispatchToProps = dispatch => ({
  submitCollection: (collection, collectionId) => dispatch(updateCollection(collection, collectionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionForm);