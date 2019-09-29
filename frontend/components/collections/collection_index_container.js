import {connect} from 'react-redux';
import CollectionIndex from './collection_index';

import { fetchCollections } from '../../actions/collection_actions';

const mapStateToProps = state => ({
  currentUser: state.session.userId
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: userId => dispatch(fetchCollections(userId))
});

export default connect(mapStateToProps,mapDispatchToProps)(CollectionIndex)