import {connect} from 'react-redux';
import TagIndexItem from './tag_index_item';

import {destroyTag} from '../../actions/tag_actions';

const mapStateToProps = ({entities}, {tagId}) => ({
  tag: entities.tags[tagId]
});

const mapDispatchToProps = dispatch => ({
  deleteTag: tagId => dispatch(destroyTag(tagId))
});

export default connect(mapStateToProps,mapDispatchToProps)(TagIndexItem);