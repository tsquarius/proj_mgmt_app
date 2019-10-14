import { connect } from 'react-redux';
import { updateCollection, postCollection, addMember, removeMember } from '../../actions/collection_actions';
import {closeCollectionForm} from '../../actions/form_actions';

import CollectionForm from './collection_form';

const mapStateToProps = ({ entities, errors, ui }) => ({
  errors: errors.collections,
  collection: entities.collections[ui.forms.collections.id],
  activeForm: ui.forms.collections.form,
  collectionId: ui.forms.collections.id
});

const mapDispatchToProps = dispatch => ({
  updateCollection: (collection, collectionId) => dispatch(updateCollection(collection, collectionId)),
  postCollection: collection => dispatch(postCollection(collection)),
  closeForm: () => dispatch(closeCollectionForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionForm);