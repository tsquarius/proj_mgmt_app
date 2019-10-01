import {connect} from 'react-redux';
import CollectionIndex from './collection_index';

import { 
  fetchCollections, 
  destroyCollection, 
} from '../../actions/collection_actions';
import {collectionArray} from '../../reducers/selectors';

const mapStateToProps = ({session, entities, errors}) => ({
  currentUser: session.userId,
  collections: collectionArray(entities.collections),
  errors: errors.collections
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: userId => dispatch(fetchCollections(userId)),
  destroyCollection: collectionId => dispatch(destroyCollection(collectionId)),

});

export default connect(mapStateToProps,mapDispatchToProps)(CollectionIndex);