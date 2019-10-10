import {connect} from 'react-redux';
import CollectionIndex from './collection_index';

import { 
  fetchCollections, 
  destroyCollection, 
  postCollection
} from '../../actions/collection_actions';

import {
  renderNewCollectionForm,
  renderUpdateCollectionForm
} from '../../actions/form_actions';

import {objToArray} from '../../reducers/selectors';

const mapStateToProps = ({session, entities, errors, ui}) => ({
  currentUser: session.userId,
  collections: objToArray(entities.collections),
  errors: errors.collections,
  activeForm: ui.forms.collections.form
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: userId => dispatch(fetchCollections(userId)),
  destroyCollection: collectionId => dispatch(destroyCollection(collectionId)),
  // newCollection: () => dispatch(renderNewCollectionForm()),
  updateCollection: id => dispatch(renderUpdateCollectionForm(id)),
  postCollection: collection => dispatch(postCollection(collection)),
});

export default connect(mapStateToProps,mapDispatchToProps)(CollectionIndex);