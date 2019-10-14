import { connect } from 'react-redux';
import { removeMember } from '../../actions/collection_actions';
import { closeCollectionDetails } from '../../actions/form_actions';

import MemberIndex from './member_index';

const mapStateToProps = ({entities, ui}, {collectionId}) => ({
  members: entities.collections[collectionId].members,
  detailsActive: ui.forms.collections.active
});

const mapDispatchToProps = dispatch => ({
  removeMember: (collectionId, member) => dispatch(removeMember(collectionId, member)),
  closeDetails: () => dispatch(closeCollectionDetails())
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberIndex);