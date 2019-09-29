import {connect} from 'react-redux';
import CollectionIndex from './collection_index';

import { fetchCollections } from '../../actions/collection_actions';
import {collectionArray} from '../../reducers/selectors';

const mapStateToProps = ({session, entities}) => ({
  currentUser: session.userId,
  collections: collectionArray(entities.collections)
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: userId => dispatch(fetchCollections(userId))
});

export default connect(mapStateToProps,mapDispatchToProps)(CollectionIndex);