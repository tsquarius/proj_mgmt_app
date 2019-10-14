import {connect} from 'react-redux';
import CollectionIndex from './collection_index';

import { 
  fetchCollections, 
  postCollection
} from '../../actions/collection_actions';


import {objToArray} from '../../reducers/selectors';

const mapStateToProps = ({session, entities, errors, ui}) => ({
  currentUser: session.userId,
  collections: objToArray(entities.collections),
  errors: errors.collections,
  redirectId: ui.redirect
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: userId => dispatch(fetchCollections(userId)),
  postCollection: collection => dispatch(postCollection(collection)),
});

export default connect(mapStateToProps,mapDispatchToProps)(CollectionIndex);