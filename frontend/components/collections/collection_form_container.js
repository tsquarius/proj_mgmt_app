import { connect } from 'react-redux';
import { updateCollection, postCollection } from '../../actions/collection_actions';
import CollectionForm from './collection_form';

const mapStateToProps = ({ entities, errors }, {collectionId}) => ({
  errors: errors.collections,
  collection: entities.collections[collectionId]
});

const mapDispatchToProps = dispatch => ({
  updateCollection: (collection, collectionId) => dispatch(updateCollection(collection, collectionId)),
  postCollection: collection => dispatch(postCollection(collection))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionForm);