import { connect } from 'react-redux';
import {addMember, removeMember} from '../../actions/collection_actions';

import MemberForm from './member_form';

// only need collectionId

const mapDispatchToProps = dispatch => ({
  addMember: (collectionId, member) => dispatch(addMember(collectionId, member)),
  removeMember: (collectionId, member) => dispatch(removeMember(collectionId, member))
});

export default connect(null, mapDispatchToProps)(MemberForm);