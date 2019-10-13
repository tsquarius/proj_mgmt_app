import {connect} from 'react-redux';
import { addTag } from '../../actions/tag_actions';
import TagsForm from './tags_form';

const mapDispatchToProps = dispatch => ({
  addTag: (cardId, tag) => dispatch(addTag(cardId, tag))
});

export default connect(null,mapDispatchToProps)(TagsForm);